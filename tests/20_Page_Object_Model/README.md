# Module 20: Page Object Model

This module demonstrates the Page Object Model (POM) design pattern in Playwright.

## Key Files

- `270_WithOut_POM.spec.ts`: login test with all locators and actions inline — shows why POM is needed.
- `271_Login_With_POM.spec.ts`: same test refactored to use the `LoginPage` class.
- `LoginPage.ts`: the Page Object class encapsulating locators and login actions.

## Page Object Pattern

```typescript
// LoginPage.ts
export class LoginPage {
    constructor(page: Page) {
        this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        // ...
    }
}

// In test:
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('user@test.com', 'pass');
```
