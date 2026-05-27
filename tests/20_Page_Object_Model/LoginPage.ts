import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    // Page Locators
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole("textbox", { name: "Email Address" });
        this.passwordInput = page.getByRole('textbox', { name: "Password" });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    }

    async login(username: string, password: string) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertLoggedIn() {
        await expect(this.page).toHaveURL(/admin/);
    }

    async assertErrorVisible() {
        await expect(this.page.locator('.alert-danger, .error-message')).toBeVisible();
    }
}
