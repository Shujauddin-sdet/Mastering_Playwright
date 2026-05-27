import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let mainFrame: FrameLocator = page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);

    page.getByRole('link', { name: 'Registration' });

    // total number of <frame> elements on the page
    const totalFrames = page.frames().length;
    console.log('Total frames:', totalFrames);

    let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByRole('link', { name: 'Registration' }).click();
});
