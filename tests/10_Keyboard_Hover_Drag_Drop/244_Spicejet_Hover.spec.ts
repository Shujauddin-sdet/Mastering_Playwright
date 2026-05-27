import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Keybaord', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons', { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();


    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover');

    const allHoverItems = page.locator('.hover-item');
    const count = await allHoverItems.count();

    for (let i = 0; i < count; i++) {
        await allHoverItems.nth(i).hover();
        await page.waitForTimeout(500);
    }
