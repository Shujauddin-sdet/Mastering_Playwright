import { test, expect } from '@playwright/test';

test.describe.serial('Checkout suite — must run in order', () => {
    test('open landing', async () => { console.log('1'); });
    test('search product', async () => { console.log('2'); });
    test('add to cart', async () => { console.log('3'); });
    test('checkout', async () => { console.log('4'); });
});

test.describe('Parallel group', () => {
    test.describe.configure({ mode: 'parallel' });

    test('parallel test A', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
        await expect(page).toHaveTitle(/The Testing Academy/);
    });

    test('parallel test B', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
        await expect(page.locator('h1')).toBeVisible();
    });
});
