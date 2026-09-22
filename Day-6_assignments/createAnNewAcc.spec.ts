import {test,expect} from "@playwright/test"

//Assignment1
test("creating New Account", async ({ page }) => {
// 1. Navigate to the url https://login.salesforce.com/ 
await page.goto("https://login.salesforce.com/")
// 2. Enter username using getByLabel 
await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[@id='Login']").click();
// 3. Enter password using getByLabel 
await page.getByLabel("Password").fill("TestLeaf@2025")
// 4. Click Login 
await page.locator('//input[contains(@value,"Log In")]').click();
// 5. Verify the title and url of the page using appropriate assertions 
const title=await page.title();
console.log(title);
await expect(page).toHaveTitle(title)
await expect(page).toHaveURL(
  "https://testleaf.lightning.force.com/one/one.app"
);
// 6. Click App Launcher using the class locator 
await page.locator("//button[contains(@class,'slds-button slds-context')]").click();
// 7. Click View All using getByText 
await page.getByRole("button", { name: "View All Applications" }).click();
// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
await page.getByPlaceholder("Search apps or items...").fill("Service");
// 9. Click Service using index based XPath 
await page.locator(
  "//one-app-launcher-app-tile[@data-name='Service']").click();
// 10. Click Accounts using attribute based CSS selector 
 await page.locator("//a[normalize-space()='Accounts']").click()
// 11. Click New using getByRole 
await page.getByRole("button",{name:"New"}).click();
// 12. Enter Account name using attribute based CSS selector 
await page.locator('input[name="Name"]').fill("cherry")
// 13. Click Save button using XPath 
await page.locator("//button[@name='SaveEdit']").click()
// 14. Verify the toast message displayed 
const msg=await page.locator("//span[contains(@class,'toastMessage')]")
console.log(await msg.textContent());
});