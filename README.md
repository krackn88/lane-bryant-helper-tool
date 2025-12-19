# 🎁 Lane Bryant Helper Tool

A TamperMonkey userscript that helps apply gift cards to your Lane Bryant checkout cart.

## 🚀 Quick Install

**Visit the installer page:** [install.html](https://krackn88.github.io/lane-bryant-helper-tool/install.html)

1. Click the "Install Script" button
2. TamperMonkey will open with the script
3. Click "Install" in TamperMonkey
4. Done!

## 📋 Requirements

- [TamperMonkey](https://www.tampermonkey.net/) extension/add-on
  - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

## 🎯 Usage

1. Navigate to: `https://www.lanebryant.com/checkout?stage=payment`
2. The helper tool UI will appear automatically
3. Enter a 16-digit gift card number
4. Click "Submit"
5. The card will be applied and the page will refresh to show it

## ⌨️ Keyboard Shortcut

Press `Ctrl+Shift+A` to open the helper tool UI.

## 📝 Features

- ✅ Simple UI for entering gift card numbers
- ✅ Automatic CSRF token extraction
- ✅ Applies gift card to cart
- ✅ Shows balance information
- ✅ Auto-refreshes page after successful application
- ✅ Copy to clipboard functionality
- ✅ Obfuscated code for discretion

## 🔧 Manual Installation

If the auto-installer doesn't work:

1. Open TamperMonkey dashboard
2. Click "Create a new script"
3. Copy contents of `lanebryant_apply_giftcard.user.js`
4. Paste into TamperMonkey editor
5. Save (Ctrl+S)

## 🐛 Troubleshooting

- **Script doesn't install**: Make sure TamperMonkey is installed and enabled
- **UI doesn't appear**: Make sure you're on the checkout page (`/checkout?stage=payment`)
- **CSRF token error**: Refresh the checkout page to get a fresh token

## 📄 Files

- `lanebryant_apply_giftcard.user.js` - The main TamperMonkey script
- `install.html` - Auto-installer page
- `README_INSTALL.md` - Detailed installation guide

## ⚠️ Disclaimer

This tool is for personal use only. Use at your own risk.