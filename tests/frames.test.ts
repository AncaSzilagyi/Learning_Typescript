import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No of frames: " + allFrames.length);

    const firstFrame = page.frame("firstFr");
    await firstFrame?.fill("input[name='fname']", "Elisa");
    //question mark considers the case
    //where there is no frame

    await firstFrame?.fill("input[name='lname']", "test");

    await page.waitForTimeout(3000);
})