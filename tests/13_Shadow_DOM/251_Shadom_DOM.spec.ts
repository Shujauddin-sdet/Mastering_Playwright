import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {

        const card = page.getByTestId('card-account');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('secret123');
        await card.locator('button[type="submit"]').click();

        // Counter cart shadow DOM
        const counter = page.getByTestId('counter-cart');
        await counter.locator('button.increment').click();
        await counter.locator('button.increment').click();
        const countText = await counter.locator('.count').innerText();
        console.log('Cart count:', countText);

        // Nested host
        const nested = page.getByTestId('nested-host');
        const innerText = await nested.locator('.inner-content').innerText();
        console.log('Nested host text:', innerText);
    });
});
