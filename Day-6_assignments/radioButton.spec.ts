import { test, expect } from "@playwright/test";

test("Radio Buttons", async ({ page }) => {

    // 1. Navigate to the page
    await page.goto("https://leafground.com/radio.xhtml");

    // 2. Identify and assert the default selected radio button
    const defaultBrowser = page.getByRole("radio", { name: "Safari" }).nth(1);
    await expect(defaultBrowser).toBeChecked();
    const agegroup = page.getByRole("radio", { name: "21-40 Years" });
    await expect(agegroup).toBeChecked();

    // 3. Click your most favorite browser and assert that the browser is enabled
    const browser= page.locator('//label[text()="Chrome"]/preceding-sibling::div').first();
    await browser.click();
    await expect(browser).toBeEnabled();
    

    // 4. Click one of the cities
    await page.locator('//label[text()="Chennai"]/preceding-sibling::div').click();

    // 5. Select the age group and assert the default selected button
    let ageGroup = page.locator('//label[text()="21-40 Years"]/preceding-sibling::div')
    await expect(ageGroup).toBeEnabled();
   
});