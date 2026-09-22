import { test, expect } from "@playwright/test";

test("Alerts", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    // Handle the alert confirm dialog
       page.on("dialog", async (dialog) => {
        // Get the message
        console.log(dialog.message());

        // Accept the alert
        await dialog.accept();
    });
    // Switch to the iframe
    const frame = page.frameLocator("#iframeResult");
    await frame.getByRole("button", { name: "Try it" }).click();
    //Retrieve and verify the result
    await expect(frame.locator("#demo")).toHaveText("You pressed OK!");
    
});
