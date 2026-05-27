import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    await page.locator('span.context-menu-one').first().click({ button: 'right' });

    const allOptions: string[] = await page
        .locator('.context-menu-list .context-menu-item')
        .allTextContents();

    console.log('Context menu options:', allOptions);

    // Click a specific option
    await page.locator('.context-menu-list .context-menu-item').first().click();
