import { useState, useRef, useEffect } from "react";
import { SANHAR_SYSTEM_PROMPT, findKnowledgeAnswer } from "../constants/systemPrompt";

// Fallback contact info shown when the backend call fails (network error, 5xx, etc).
const FALLBACK_MESSAGE =
  "Sorry, I'm having trouble connecting right now. Please reach us directly:\n" +
  "📧 Email: sales@sanharsgt.com\n" +
  "📞 Phone: +91-9100999976";

const QUICK_PILLS = [
  { label: "Products", prompt: "What products and platforms does SanharSGT offer?" },
  { label: "Contact Us", prompt: "How can I get in touch with the SanharSGT sales team?" },
  { label: "Offices", prompt: "Where are SanharSGT's global offices located?" },
];

const INITIAL_MESSAGE = {
  id: "greeting",
  role: "bot",
  text: "Hi! I'm the SanharSGT assistant. Ask me about our healthcare IT products, offices, or how to get in touch.",
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="m22 2-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Plug-and-play SanharSGT chat widget. Drop <SanharChatWidget /> anywhere
 * (e.g. in App.jsx) — it renders itself as a fixed floating button + popup.
 *
 * @param {string} [backendUrl] - endpoint that accepts { message, history } and returns { reply }.
 */
export default function SanharChatWidget({ backendUrl = "/api/chat" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handlePillClick = (prompt) => {
    setInputValue(prompt);
    inputRef.current?.focus();
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { id: `${Date.now()}-user`, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // 1) Answer instantly from the local SanharSGT knowledge base when possible —
    //    keeps the widget fully functional as a real Q&A bot with zero backend.
    const localAnswer = findKnowledgeAnswer(trimmed);
    if (localAnswer) {
      setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: "bot", text: localAnswer }]);
      setIsLoading(false);
      return;
    }

    // 2) Otherwise defer to the backend (real LLM / support system), if wired up.
    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: messages.map(({ role, text }) => ({ role, text })),
          systemPrompt: SANHAR_SYSTEM_PROMPT,
        }),
      });

      if (!res.ok) throw new Error(`Backend responded with ${res.status}`);

      const data = await res.json();
      const replyText = data?.reply || data?.message || FALLBACK_MESSAGE;
      setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: "bot", text: replyText }]);
    } catch {
      // 3) Network/backend failure and no local match — surface direct contact details.
      setMessages((prev) => [...prev, { id: `${Date.now()}-fallback`, role: "bot", text: FALLBACK_MESSAGE }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-body">
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-sm h-[70vh] max-h-[560px] flex flex-col bg-background rounded-card border border-border shadow-hover overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-primary text-white shrink-0">
            <div>
              <p className="font-display font-bold leading-tight">SanharSGT Assistant</p>
              <p className="text-xs text-white/80">We typically reply instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Quick pills */}
          <div className="flex gap-2 px-4 pt-3 pb-1 flex-wrap shrink-0">
            {QUICK_PILLS.map((pill) => (
              <button
                key={pill.label}
                type="button"
                onClick={() => handlePillClick(pill.prompt)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-soft text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-surface text-body rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface text-muted rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
                  Typing…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-border shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 min-w-0 bg-surface rounded-full px-4 py-2.5 text-sm text-body placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white disabled:opacity-40 hover:bg-primary-hover transition-colors"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-hover hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
