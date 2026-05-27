import { test, expect } from '@playwright/test';

test.describe('Expect Assertions - TestingAcademy', () => {

    test('1 Value assertions', async ({ page }) => {

        expect(1 + 2).toBe(3);
        // expect(1 + 2).toBe(4);

        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(34).toBeGreaterThan(11);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ role: 'admin' }).toEqual({ role: 'admin' });
        expect({ age: 20, role: 'admin' }).toEqual({ role: 'admin', age: 20 });


    });

    test('2 Locator-based assertions', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');


        const heading = page.getByText('Multiple Element Filter', { exact: true });
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('Multiple');

        const emailInput = page.getByRole('textbox', { name: 'Email Address' });
        await expect(emailInput).toBeEnabled();
        await expect(emailInput).toBeEditable();

        const submitBtn = page.getByRole('button', { name: 'Login' });
        await expect(submitBtn).toBeVisible();

        // Count assertions
        const items = page.locator('.item-list li');
        await expect(items).toHaveCount(0); // adjust as needed

        // Soft assertions — test keeps running even on failure
        await expect.soft(page).toHaveTitle(/Multiple Element/);
    });
});
