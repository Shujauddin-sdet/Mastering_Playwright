import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');


    // //await page.locator('#card-write-spec').dragTo(page.locator('[data-status="in-progress"]'));

    // await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    // await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="done"]'));

    // Manual mouse approach for advanced Kanban drag
    const card = page.locator('#card-write-spec');
    const targetColumn = page.locator('[data-status="in-progress"]');

    const cardBox = await card.boundingBox();
    const targetBox = await targetColumn.boundingBox();

    if (cardBox && targetBox) {
        await page.mouse.move(cardBox.x + cardBox.width / 2, cardBox.y + cardBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 10 });
        await page.mouse.up();
    }
