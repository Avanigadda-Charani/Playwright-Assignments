import {test,expect} from "@playwright/test"

test("Dropdowns", async ({ page }) => {
// 1. Navigate to https://leafground.com/select.xhtml 
await page.goto("https://leafground.com/select.xhtml")
// 2. Select your favorite UI automation tool using the different select options 
await page.selectOption("//select[@class='ui-selectonemenu']",{label:'Selenium'});
// 3. Get the count and print of all the values 
const dropdownvalues=await page.locator("//select[@class='ui-selectonemenu']/Option")
const count=await dropdownvalues.count();
console.log(count);
// 4. Choose your preferred Country 
await page.locator("//label[text()='Select Country']").click();
await page.locator("//li[text()='Germany']").click();

// 5. Confirm Cities belongs to Country is loaded 

await page.locator("//label[text()='Select City']").click();
const cityDropdown = page.locator("select").nth(2);

const cities = await cityDropdown.locator("option").allInnerTexts();
console.log("Cities loaded:", cities.slice(1));

// 6. Choose any three courses from the dropdown 
await page.locator("//button[@aria-label='Show Options']").click();

// 7. Choose a language and print all the values from the dropdown. 
await page.locator("//label[text()='Select Language']").click()
const languages=await page.locator("//ul[@id='j_idt87:lang_items']//li[normalize-space()!='Select Language']").allTextContents();
console.log(languages);
await page.locator("//li[normalize-space()='English']").click();
// 8. Select 'Two' irrespective of the language chosen 
await page.locator("//label[text()='Select Values']").click();
await page.locator("//li[text()='Three']").click();

});