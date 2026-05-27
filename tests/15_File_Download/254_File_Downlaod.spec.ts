import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('demo: upload file using setInputFiles', async ({ page }) => {

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('[data-testid="download-btn"]').click(),
        ]);

        const suggestedName = download.suggestedFilename();
        const downloadPath = path.join(__dirname, 'downloads', suggestedName);
        await download.saveAs(downloadPath);

        console.log('Downloaded file:', suggestedName);
        expect(suggestedName).toBeTruthy();
    });
});
