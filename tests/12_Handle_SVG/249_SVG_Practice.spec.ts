import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {


        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.click();

        // Validate the content in the output section
        const output = page.locator('#output');
        await expect(output).toContainText('circle-blue');

        // Click a chart bar
        const firstBar = page.locator('.bar').first();
        await firstBar.click();

        // Choose a star rating
        const stars = page.locator('.star-rating .star');
        await stars.nth(3).click(); // 4th star

        // Read all bar heights
        const bars = page.locator('.bar');
        const count = await bars.count();
        for (let i = 0; i < count; i++) {
            const height = await bars.nth(i).getAttribute('height');
            console.log(`Bar ${i + 1} height: ${height}`);
        }
    });
});
