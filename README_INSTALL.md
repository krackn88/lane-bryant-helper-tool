# Lane Bryant Helper Tool - Installation Guide

## Quick Install

### Option 1: Auto-Install (Recommended)

1. Open `install.html` in your browser
2. Click the "Install Script" button
3. TamperMonkey will prompt you to install
4. Click "Install" in TamperMonkey

### Option 2: Manual Install

1. Install TamperMonkey:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. Open TamperMonkey dashboard
3. Click "Create a new script"
4. Copy contents of `lanebryant_apply_giftcard.user.js`
5. Paste into TamperMonkey editor
6. Save (Ctrl+S)

## Hosting for Auto-Install

To make the auto-install work, you need to host the files on a web server:

### Option A: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload both files:
   - `lanebryant_apply_giftcard.user.js`
   - `install.html`
3. Enable GitHub Pages in repository settings
4. Share the `install.html` URL

### Option B: Local Web Server

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open: `http://localhost:8000/install.html`

### Option C: Any Web Hosting

Upload both files to your web server and share the `install.html` URL.

## Usage

1. Navigate to: `https://www.lanebryant.com/checkout?stage=payment`
2. The helper tool UI will appear automatically
3. Enter a 16-digit gift card number
4. Click "Submit"
5. The card will be applied and the page will refresh

## Keyboard Shortcut

Press `Ctrl+Shift+A` to open the helper tool UI.

## Troubleshooting

- **Script doesn't install**: Make sure TamperMonkey is installed and enabled
- **UI doesn't appear**: Make sure you're on the checkout page (`/checkout?stage=payment`)
- **CSRF token error**: Refresh the checkout page to get a fresh token
