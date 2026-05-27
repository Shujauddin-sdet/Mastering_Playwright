import { test, expect } from '@playwright/test';
import path from 'path';
import { readCSV } from './csvReader';

test.describe('DDT CSV', () => {



    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    const loginData = readCSV(path.join(__dirname, "login-data.csv"));

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            const emailInput = page.getByRole("textbox", { name: "Email Address" });
            const passwordInput = page.getByRole('textbox', { name: "Password" });
            const loginBtn = page.getByRole('button', { name: 'Login' });

            await emailInput.fill(data.username);
            await passwordInput.fill(data.password);
            await loginBtn.click();

            if (data.shouldPass === 'true') {
                await expect(page).toHaveURL(/admin/);
            } else {
                await expect(page.locator('.alert-danger, .error-message')).toBeVisible();
            }
        });
    }
});
