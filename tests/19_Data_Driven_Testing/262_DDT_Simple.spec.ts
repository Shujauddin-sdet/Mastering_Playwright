import { test, expect } from '@playwright/test';

test.describe('DDT Simple', () => {

    // TEST DATA — array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin123@ymail.com",
            password: "wrongpass",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: false
        },
    ];

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            await page.getByRole('textbox', { name: 'Email Address' }).fill(data.username);
            await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
            await page.getByRole('button', { name: 'Login' }).click();

            if (data.shouldPass) {
                await expect(page).toHaveURL(data.expectedURL);
            } else {
                await expect(page.locator('.error-message')).toBeVisible();
            }
        });
    }
});
