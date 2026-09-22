import {chromium,test} from "@playwright/test"

//Assignment1
test("hands on xpath creating leads",async()=>{
const browser = await chromium.launch({headless:false,channel:"chrome"}) // here we are getting the chromium browser "object" from playwright library
const context = await browser.newContext(); // Created an isolated environment with the help of browser reference
const page = await context.newPage() // Created a new blank page for loading the url
await page.goto("https://login.salesforce.com/")
//giving username in testbox
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
//click on login button
await page.locator("//input[@id='Login']").click();
//giving password in textbox
await page.locator("//input[@id='password']").fill("TestLeaf@2025")
//again clicking on login button
await page.locator('//input[contains(@value,"Log In")]').click();
//selecting menu button
await page.locator("//button[contains(@title,'App')]").click();
//selecting view all 
await page.locator("//button[contains(@aria-label,'View All Applications')]").click();
//selecting sales in app launcher
await page.locator("//one-app-launcher-app-tile[@data-name='Sales']").click();
//selecting leads options
await page.locator("//a[@title='Leads']").click();
//selecting new button in leads tab
await page.locator("//a[@title='New']").click();
//selecting salutation option
await page.locator("//button[@name='salutation']").click();
//selecting mrs. option saluation options
await page.locator("//lightning-base-combobox-item[@data-value='Mrs.']").click();
//giving firstname
await page.locator('//input[@name="firstName"]').fill("Avg");
//giving last name
await page.locator("//input[@placeholder='Last Name']").fill("Avg")
//comapany name
await page.locator("//input[@name='Company']").fill("test")
//saving created leads
await page.locator("//button[@name='SaveEdit']").click();
});