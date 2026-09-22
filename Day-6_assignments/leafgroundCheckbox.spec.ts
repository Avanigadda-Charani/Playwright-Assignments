import {chromium,test,expect} from "@playwright/test"

test("Checkboxs", async ({ page }) => {
// 1. Navigate to https://leafground.com/checkbox.xhtml 
await page.goto("https://leafground.com/checkbox.xhtml")
// 2. Click on the "Basic Checkbox.” 
await page.getByText("Basic", { exact: true }).click();
// 3. Click on the "Notification Checkbox." 
await page.getByText("Ajax", { exact: true }).click();
// 4. Verify that the expected message is displayed. 
await expect(page.getByText("Checked")).toBeVisible();
// 5. Click on your favorite language (assuming it's related to checkboxes). 
await page.getByText("Java", { exact: true }).click();
// 6. Click on the "Tri-State Checkbox." 
const triState = page.locator('//h5[text()="Tri State Checkbox"]/following::div[contains(@class,"ui-chkbox-box")][1]').click();
// 7. Verify which tri-state option has been chosen. 
const message=await page.locator(".ui-growl-title");
await expect(message).toBeVisible();
const statetext=await message.textContent();
console.log(statetext);
// 8. Click on the "Toggle Switch." 
await page.locator(".ui-toggleswitch-slider").click();
// 9. Verify that the expected message is displayed.
 const tooglemessage=await page.locator(".ui-growl-message");
await expect(tooglemessage).toBeVisible();
const toogletext=await tooglemessage.textContent();
console.log(toogletext);
// 10. Verify if the Checkbox is disabled. 
const disablechkbox=page.locator("//h5[text()='Verify if check box is disabled']/following::div[contains(@class,'ui-state-disabled')]");
await expect(disablechkbox).toHaveClass('ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled');
// 11. Select multiple options on the page (details may be needed). 
await page.locator(".ui-selectcheckboxmenu-multiple-container").click();
await page.locator("//li[@data-item-value='London']/div").click();
await page.locator("//li[@data-item-value='Rome']/div").click();
await page.locator("//li[@data-item-value='Berlin']/div").click();
// 12. Perform any additional actions or verifications required. 
const selectedcitiesCount=await page.locator(".ui-selectcheckboxmenu-token-label");
await expect(selectedcitiesCount).toHaveCount(3);
// 13. Close the web browser when done.
await page.close(); 
  
});