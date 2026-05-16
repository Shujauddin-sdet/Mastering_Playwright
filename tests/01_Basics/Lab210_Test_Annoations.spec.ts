import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

// Skip test
test.skip('skipped test', async ({ page }) => {
    // This test is skipped
});
// Regular test
test('focused test', async ({ page }) => {
    // This test runs with all others
});

// Mark as failing
test.fail('expected to fail', async ({ page }) => {
    // Test is expected to fail
});

// Slow test (3x timeout)
test.slow('slow test', async ({ page }) => {
    // Has extended timeout
});

// Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});