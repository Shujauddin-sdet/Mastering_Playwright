// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs name() / local-name() because
// tag names are namespaced (e.g. svg:path).
// Common patterns: locate SVG, locate child shapes (path/rect/circle/g),
// click, hover, read attributes (d, fill, viewBox, stroke), assert state.

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products').click();
        const searchBtn = page.locator('button[type="submit"]').first();
        await searchBtn.click();

        // Wait for search results
        await page.waitForSelector('.DOjaWF');

        const productTitles = await page.locator('.KzDlHZ').allTextContents();
        console.log('Products found:', productTitles.length);
        productTitles.forEach((t, i) => console.log(`  [${i + 1}] ${t}`));
    });
});
