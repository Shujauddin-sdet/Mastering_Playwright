// Screenshot assertions (visual diff)
import { test, expect } from '@playwright/test';

test.describe('URL & title  Assertions - TestingAcademy', () => {

    test('URL & title assertions', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar.html');
        await page.getByTestId('trigger-depart').click();
        await expect(page).toHaveTitle('Calendar Date Picker — The Testing Academy');
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar.html');
        await expect(page).toHaveURL(/calendar/);
    });

    test('Network response assertions', async ({ page }) => {

        const [response] = await Promise.all([
            page.waitForResponse(resp => resp.url().includes('/api/') && resp.status() === 200),
            page.goto('https://app.thetestingacademy.com/playwright/'),
        ]);

        expect(response.status()).toBe(200);
    });
});
