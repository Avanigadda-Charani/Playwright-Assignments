import { chromium,test } from "@playwright/test";

test("Login Saleforce", async () => {
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

//waiting for 10seconds
await page.waitForTimeout(10000);
//printing page tile and current page url
console.log(await page.title());
console.log(await page.url());
//closing the browser
await browser.close();
 
})