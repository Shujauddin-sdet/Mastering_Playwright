// //div[@id='admin1_map_inner']//*[name()='svg']//*[contains(@class,'sm_label')]
import { test, expect } from "@playwright/test";

const SimpleMaps = "https://simplemaps.com/svg/country/in";

test.describe("Map Selection", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(SimpleMaps);
    });

    test("Generate the list of all states", async ({ page }) => {
        const states = await page
            .locator("*[name()='svg'] *[name()='text']")
            .allTextContents();

        console.log("States found:", states.length);
        states.forEach(s => console.log(" -", s));
    });

    test("Click Uttar Pradesh", async ({ page }) => {
        await page.locator("[id='IN-UP']").click();
        await expect(page.locator(".state-info")).toContainText("Uttar Pradesh");
    });
});
