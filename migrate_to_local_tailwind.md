# Skill: Migrate from Tailwind Play CDN to Local Tailwind v3

This skill automates the migration of a website using the Tailwind Play CDN (`cdn.tailwindcss.com`) to a production-ready local Tailwind CSS installation. This fixes issues where the CDN is unreachable (DNS/outage) and restores the correct visual styling.

## Prerequisites
- Node.js and npm installed.
- Vite-based project (typical for these sites).

## Step-by-Step Migration

### 1. Identify and Extract Configuration
- Open `index.html`.
- Locate the `<script>` block containing `tailwind.config = { ... }`.
- Copy the entire configuration object.
- Locate any `<style type="text/tailwindcss">` or standard `<style>` blocks. Copy their contents.

### 2. Install Local Dependencies
Run the following command in the terminal:
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```
*Note: We use version 3 to ensure compatibility with existing configurations designed for the Play CDN.*

### 3. Create Configuration Files

#### `tailwind.config.js`
Create this file in the project root and paste the extracted configuration. Ensure the `content` array covers all relevant files:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Paste the extracted 'theme.extend' content here
    }
  },
  plugins: [],
}
```

#### `postcss.config.js`
Create this file in the project root:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. Create Local Stylesheet (`index.css`)
Create `index.css` in the project root:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Paste any extracted custom CSS here */
```

### 5. Link the Stylesheet
- In `index.tsx` (or your main entry point), add:
  ```javascript
  import './index.css';
  ```
- In `index.html`, remove the Tailwind CDN `<script>` tags and the internal `<style>` block.
- Add the stylesheet link in the `<head>` of `index.html`:
  ```html
  <link rel="stylesheet" href="/index.css">
  ```

### 6. Verification
- Restart the development server: `npm run dev`.
- Clear browser cache and verify that the styling is identical to the original design.
- Run `npm run build` to ensure the production bundle is generated correctly.

## Troubleshooting
- **Missing Colors/Fonts**: Ensure the `tailwind.config.js` exactly matches the extracted object.
- **Overlapping Elements**: Usually indicates a missing `absolute` or `hidden` utility in the generated CSS. Check that all source files are in the `content` array of `tailwind.config.js`.
- **500 Errors**: Ensure `postcss.config.js` exists and dependencies are correctly installed.
