import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    const vechileFrame: FrameLocator = page.frameLocator('#frame-one');
    await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
    await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
    await vechileFrame.locator('#RESULT_Button-1').click();

    await expect(vechileFrame.locator('#RESULT_TextField-1')).toHaveValue('Hyundai i10');
});
