import { test, expect } from '@playwright/test';
import path from 'path';
import { readCSV } from './csvReader';

test.describe('DDT CSV', () => {
    const loginData = readCSV(path.join(__dirname, 'login-data.csv'));

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole('textbox', { name: "Password" });
            let btnLogin = page.getByRole('button', { name: 'Login' });

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await btnLogin.click();

            if (data.shouldPass === 'true') {
                await expect(page).toHaveURL(/admin/);
            } else {
                await expect(page.locator('.error-message')).toBeVisible();
            }
        });
    }
});
