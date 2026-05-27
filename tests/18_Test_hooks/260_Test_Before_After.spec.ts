import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('beforeAll — server is up');
});

test.beforeEach(async ({ page }) => {
    // run before every test — e.g. log in, seed cookies
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 25 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29);
});

test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/The Testing Academy/);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
});

test.afterAll(async () => {
    console.log('afterAll — cleanup done');
});
