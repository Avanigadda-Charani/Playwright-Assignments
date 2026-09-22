import {chromium,test,expect} from "@playwright/test"

//Assignment4
test("saleforce webpage testing with locators",async()=>{
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
await page.getByRole("button",{name: "App Launcher", exact:true}).click();
//selecting view all
await page.getByRole("button",{name:"View All Applications",exact:true}).click();
//selecting Indiduals option in app launcher
await page.getByRole("link", { name: "Individuals" }).click();
// Click dropdown beside Recently Viewed
await page.getByRole("button", { name: "Individuals List" }).click();
// Click New Individual
await page.getByRole("menuitem", { name: "New Individual" }).click();
//giving last name
await page.getByPlaceholder("Last Name").fill("Avanigadda");
//click on save
await page.getByRole("button",{name: "Save",exact:true}).click();
//selecting individuals again to edit
await page.getByRole("link", { name: "Individuals", exact: true }).click();
//selecting show actions 
const individualRow = page.getByRole("row").filter({has: page.getByRole("link", {name: "Avanigadda",exact: true})}).first();
//select edit
await individualRow.getByRole("button", {name: "Show Actions",exact:true}).click();
await page.getByRole("menuitem", {name: "Edit",exact: true}).click(); 
// Select Mrs.
await page.locator('div.salutation a.select').click();
await page.locator('//a[@title="Mrs."]').click();
//giving first name
await page.getByPlaceholder("First Name").fill("avg")
//click on save
await page.getByRole("button",{name: "Save",exact:true}).click();
//verifying first name
await expect(
    page.getByRole("row").filter({
        has: page.getByRole("link", { name: "avg Avanigadda", exact: true })
    })
).toContainText("avg");
});