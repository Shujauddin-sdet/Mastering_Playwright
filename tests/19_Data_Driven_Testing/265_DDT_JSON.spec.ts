import { test, expect } from '@playwright/test';
import path from 'path';
import loginData from "./registration-data.json";

test.describe('DDT CSV', () => {



    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole('textbox', { name: "Password" });
            const btnLogin = page.getByRole('button', { name: 'Login' });

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await btnLogin.click();

            if (data.shouldPass) {
                await expect(page).toHaveURL(/admin/);
            } else {
                await expect(page.locator('.alert-danger, .error-message')).toBeVisible();
            }
        });
    }
});
