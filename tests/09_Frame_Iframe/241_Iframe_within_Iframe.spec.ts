import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame3.locator('#email').fill('test@example.com');
    await expect(frame3.locator('#email')).toHaveValue('test@example.com');
