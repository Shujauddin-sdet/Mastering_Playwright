import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');

    // Verify initial state
    await expect(columnA.locator('header')).toHaveText('A');
    await expect(columnB.locator('header')).toHaveText('B');

    // Drag A onto B
    await columnA.dragTo(columnB);

    // Verify swapped state
    await expect(columnA.locator('header')).toHaveText('B');
    await expect(columnB.locator('header')).toHaveText('A');
