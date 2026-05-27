import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('scroll to view', async ({ page }) => {

        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you

        await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        await page.getByTestId('deep-anchor').click();

        await page.waitForTimeout(1000);

        // 2) scrollBy 1000 px
        await page.evaluate(() => window.scrollBy(0, 1000));
        await page.waitForTimeout(500);

        // 3) scroll to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // 4) scroll to specific element with evaluate
        await page.evaluate(() => {
            document.querySelector('[data-testid="section-bottom"]')?.scrollIntoView({ behavior: 'smooth' });
        });

        await page.waitForTimeout(1000);
    });
});
