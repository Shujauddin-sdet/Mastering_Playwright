import { test, expect } from '@playwright/test';

test.describe('DDT Simple', () => {

    // Only 1 Data
    const data =
    {
        description: "valid credentials",
        username: "admin@gmail.com",
        password: "admin123",
        expectedURL: /admin/,
        shouldPass: true

    };


    test(`Login with : ${data.description}`, async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
        let textboxPassword = page.getByRole('textbox', { name: "Password" });
        let btnLogin = page.getByRole('button', { name: 'Login' });

        await textboxEmailAddress.fill(data.username);
        await textboxPassword.fill(data.password);
        await btnLogin.click();

        if (data.shouldPass) {
            await expect(page).toHaveURL(data.expectedURL);
        } else {
            await expect(page.locator('.error-message')).toBeVisible();
        }
    });
});
