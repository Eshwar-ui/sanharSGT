const Logos = () => {
  const logos = [
    "OCTA", "ELIXIR", "CAPITAL", "FINOVANCE", "ORBIT", "NEXUS", "VENTURE", "HORIZON"
  ]

  return (
    <div className="py-20 bg-surface border-y border-border overflow-hidden">
      <div className="flex animate-infinite-scroll whitespace-nowrap gap-20 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div 
            key={i} 
            className="text-2xl md:text-3xl font-display font-black text-muted hover:text-primary transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Logos
