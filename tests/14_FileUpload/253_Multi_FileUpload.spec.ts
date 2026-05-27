import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {


        await page.locator("div.pf-v6-c-multiple-file-upload input[type='file']").setInputFiles([
            {
                name: 'report.pdf',
                mimeType: 'application/pdf',
                buffer: Buffer.from('PDF content here'),
            },
            {
                name: 'data.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from('name,email\nAlice,alice@test.com'),
            },
        ]);

        // Assert uploaded file names appear
        await expect(page.locator('.pf-v6-c-file-upload__file-name').first()).toContainText('report.pdf');
    });
});
