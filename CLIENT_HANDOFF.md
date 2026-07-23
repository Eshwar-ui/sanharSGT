# Client Handoff Guide: Content Management

This document provides instructions on how to update the content of your website without needing to touch the core application logic. All website content is centralized in a single directory for ease of access.

---

## 📂 Content Location
All editable content is stored in the following directory:
`src/data/`

Each file in this directory corresponds to a specific section or feature of your website.

---

## 📄 File Mapping

| File Name | Description / Section Controlled |
| :--- | :--- |
| `heroContent.js` | Main banner at the top of the homepage. |
| `aboutContent.js` | "About Us" section details. |
| `solutionsContent.js` | List of solutions/services offered. |
| `productsContent.js` | Details of your software products/platforms. |
| `locationsContent.js` | Global office locations and contact info. |
| `contactContent.js` | Contact section details (email, phone, address). |
| `testimonialsContent.js` | Client feedback and reviews. |
| `industriesContent.js` | Industries you serve. |
| `teamContent.js` | Core team members. |
| `careersContent.js` | Current job openings. |
| `whyUsContent.js` | Key differentiators and "Why Choose Us" points. |
| `resourcesContent.js` | Media, downloads, or external links. |

---

## 🛠 How to Edit Content

### 1. Basic Text Updates
Open any file (e.g., `heroContent.js`). You will see objects like this:
```javascript
export const heroContent = {
    heading: "Innovative Tech Solutions",
    description: "Empowering businesses through digital excellence."
};
```
Simply change the text within the quotes and save the file.

### 2. Updating Lists (Arrays)
Sections like **Solutions** or **Locations** use lists (arrays). To add a new item, copy an existing block within the square brackets `[]`:
```javascript
offices: [
    { 
        city: "Hyderabad", 
        country: "India", 
        // ... other details
    },
    // New item here
]
```

### 3. Images and Icons
Images can be updated in two ways:
- **URLs**: Use a link to an image hosted elsewhere (e.g., Unsplash).
- **Base64**: Inline images (long strings of text starting with `data:image/...`). These are best for small logos or icons.

---

## 🚀 Publishing Your Changes

After saving your changes in the codebase, you must rebuild and deploy the site for the changes to go live.

1.  **Build the Project**:
    Run this command in the terminal:
    ```bash
    npm run build
    ```


---

## ⚠️ Important Rules
- **Don't remove commas**: Most lines end with a comma (`,`). Removing them can cause build errors.
- **Keep the keys identical**: Do not change words like `title`, `heading`, or `value` on the left side of the colon. Only change the content on the right side.
- **Backup**: Always test locally (`npm run dev`) before deploying to ensure the layout still looks great!
