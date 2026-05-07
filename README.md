# 🎭 Mastering Playwright - My Learning Journey

A structured repository where I'm learning **Playwright end-to-end testing** with **TypeScript**.

Each lab builds progressively on the previous one, taking me from basics to real-world automation scenarios.

---

## 📚 What I'm Learning

This repository contains hands-on labs covering:

- ✅ **Basics** - First tests, test annotations
- ✅ **Browser/Context/Page** - Understanding Playwright's hierarchy
- ✅ **Locators & Commands** - Finding and interacting with elements
- ✅ **Session Management** - Reusing sessions to avoid repetitive logins
- ✅ **Reporting** - Allure and custom HTML reports
- ✅ **Web Tables** - Automating table interactions
- ✅ **Complex UI** - Dropdowns, frames, selects
- ✅ **End-to-End Tests** - Real banking application workflows

---

## 🚀 Quick Start

### Prerequisites
```bash
# Need Node.js LTS and npm
node --version  # Should be v18+
npm --version   # Should be v9+
```

### Setup
```bash
npm install                    # Install dependencies
npx playwright install         # Download browsers
```

### Running Tests
```bash
npm test                       # Run all tests
npm run test:headed            # Watch in browser
npm run test:ui                # Interactive mode
npm run report                 # View HTML report
npm run report:tta             # View TTA custom report
```

---

## 📁 Project Structure

```
tests/
├── 01_Basics/                    # Foundation & annotations
├── 02_first_tests/               # Browser, Context, Page hierarchy
├── 03_Locators_Commands/         # Locators and navigation
├── 04_Session_Storage/           # Reusing sessions
├── 05_Allure_Reporting/          # Rich reporting
├── 06_Multiple_Element_/         # Working with collections
├── 07_WebTables/                 # Table automation
├── 08_Web_Select_Frames_Iframe/  # Advanced UI patterns
└── Projects/                     # Real-world scenarios

utils/
└── CustomTTAReporter.ts          # Custom HTML reporter

.github/workflows/
└── playwright.yml                # CI/CD pipeline
```

---

## 🔍 Key Learning Topics

### Browser Hierarchy (Labs 211-218)
- Launching browser, creating contexts, opening pages
- Multiple contexts for different users
- Multiple pages in one context

### Locators (Labs 219-227)
- Page navigation and wait strategies
- CSS and XPath selectors
- Accessibility-first locators (getByRole)
- Working with cookies

### Session Reuse (Labs 228-229)
- Saving session state with `storageState`
- Reusing sessions across tests
- Skipping repetitive logins

### Reporting (Lab 230)
- Allure annotations (epic, feature, story)
- Custom TTA HTML reports
- Screenshots and traces

### Advanced Topics (Labs 231-238)
- Multiple elements and collections
- HTML table extraction
- Native and custom dropdowns
- React-Select patterns
- Frames and iframes

---

## 🛠️ Technologies

- **Playwright** - Cross-browser automation
- **TypeScript** - Type-safe code
- **Allure** - Advanced test reporting
- **Jest/Playwright Test** - Test runner

---

## 📊 CI/CD

Tests run automatically via GitHub Actions on every push:
- Ubuntu environment
- Node.js LTS
- All Playwright browsers
- Test reports saved as artifacts

---

## 📝 Development Workflow

```bash
# 1. Make changes to test files
# 2. Run locally
npm test

# 3. Commit and push
git add .
git commit -m "fix: description"
git push origin dev
```

---

## 📖 Resources

- [Playwright Docs](https://playwright.dev)
- [Playwright API](https://playwright.dev/docs/api/class-playwright)
- [Allure Reporting](https://www.npmjs.com/package/allure-playwright)
