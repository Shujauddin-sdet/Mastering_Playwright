import { test, expect } from '@playwright/test';

test.describe('Javascript Alerts', () => {
    // Group the testcases toghter

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('JS Alert accept 1', async ({ page }) => {

        // Register the dialog handler BEFORE triggering the alert

        page.once('dialog', async dialog => {
            console.log('Alert type:', dialog.type());
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });

        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    });

    test('JS Confirm accept', async ({ page }) => {

        page.once('dialog', async dialog => {
            console.log('Dialog type:', dialog.type());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
        });

        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });

    test('JS Confirm dismiss', async ({ page }) => {

        page.once('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    });

    test('JS Prompt with value', async ({ page }) => {

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            await dialog.accept('Playwright Learner');
        });

        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText('You entered: Playwright Learner');
    });
});
