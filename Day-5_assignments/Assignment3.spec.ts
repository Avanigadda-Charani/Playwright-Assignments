import {chromium,test,expect} from "@playwright/test"

//Assignment3
test("creating individulas in saleforce page",async()=>{
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
 // Verify Individual Name
 await expect(
        page.getByRole("heading", {name: `Individual ${"Avanigadda"}`,exact: true})).toBeVisible();


});