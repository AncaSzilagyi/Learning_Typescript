import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No of frames: " + allFrames.length);
})