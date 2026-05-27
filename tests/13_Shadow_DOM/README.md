# Shadow DOM

This module demonstrates how Playwright works with elements inside open Shadow DOM trees. The test opens the Shadow DOM widget page from The Testing Academy and interacts with form fields, buttons, nested hosts, and status text exposed through shadow roots.

## Key Files

- `251_Shadom_DOM.spec.ts`: lesson spec for locating and interacting with Shadow DOM content.

## Patterns Covered

- Navigate to the Shadow DOM practice page in `beforeEach`.
- Use `getByTestId()` to locate shadow host components such as `card-account`, `counter-cart`, and `nested-host`.
- Playwright automatically pierces open shadow roots — use standard locators like `locator('input[name="email"]')` inside the host.
- No special pierce selector is needed for open shadow DOM; Playwright handles it transparently.
