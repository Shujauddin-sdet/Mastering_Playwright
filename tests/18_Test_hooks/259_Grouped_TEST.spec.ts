import { test, expect } from '@playwright/test';

test('login form is reachable via steps', async ({ page }) => {

    await test.step('open practice page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
    });

    await test.step('fields are visible', async () => {
        await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });

    await test.step('fill and submit', async () => {
        await page.getByRole('textbox', { name: 'Email Address' }).fill('test@example.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret');
        await page.getByRole('button', { name: 'Login' }).click();
    });
});
