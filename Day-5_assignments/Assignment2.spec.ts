import {chromium,test} from "@playwright/test"

//Assignment2
test("creating lead with diff locators",async()=>{
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
await page.locator("//one-app-launcher-app-tile[@data-name='Sales']").click({ timeout: 30000 });
//selecting leads options
await page.locator("//a[@title='Leads']").click();

// Locating the row containing "Avg Avg"
const leadRow = page.getByRole("row").filter({
    has: page.getByRole("link", { name: "Avg Avg", exact: true })
});

// Click Show Actions dropdown in Avg Avg row
await leadRow.getByRole("button", { name: "Show Actions" }).click();

// Click Edit from the dropdown
await page.getByRole("menuitem", { name: "Edit", exact: true }).click();

//selecting salutation option
await page.locator("//button[@name='salutation']").click();
//selecting mrs. option saluation options
await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click();
//giving firstname
await page.locator('//input[@name="firstName"]').fill("cherry");
//giving last name
await page.locator("//input[@placeholder='Last Name']").fill("cherry")
//comapany name
await page.locator("//input[@name='Company']").fill("testing1")
//saving created leads
await page.locator("//button[@name='SaveEdit']").click();
});