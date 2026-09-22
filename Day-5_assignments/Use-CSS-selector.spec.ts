import {chromium,test,expect} from "@playwright/test"

//Assignment1
test("hands on css selector",async()=>{
const browser = await chromium.launch({headless:false,channel:"chrome"}) // here we are getting the chromium browser "object" from playwright library
const context = await browser.newContext(); // Created an isolated environment with the help of browser reference
const page = await context.newPage() // Created a new blank page for loading the url
await page.goto("https://leaftaps.com/opentaps/control/main")
//giving username
await page.locator('[id="username"]').fill("Demosalesmanager")
//giving password
await page.locator('[id="password"]').fill("crmsfa")
//selecting login button
await page.locator(".decorativeSubmit").click()
// 5. Click CRM/SFA  
await page.locator("div[id='label']").click();
// 6. Click Leads   
await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
// 7. Click Create Lead 
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
// 8. Fill the Company Name   
await page.locator('input[id="createLeadForm_companyName"]').fill("company");
// 9. Fill the First Name   
await page.locator('input[id="createLeadForm_firstName"]').fill("cherry");
// 10. Fill the Last Name   
await page.locator('input[id="createLeadForm_lastName"]').fill("Avg")
// 11. Fill the Salutation   
await page.locator('input[name="personalTitle"]').fill("Mrs.")
// 12. Fill the Title
await page.locator('input[name="generalProfTitle"]').fill("software")   
// 13. Fill the Annual Revenue   
await page.locator('input[name="annualRevenue"]').fill('100000')
// 14. Fill the Department  
await page.locator('input[name="departmentName"]').fill('') 
// 15. Fill the Phone number  
await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').fill('1234567890') 
// 16. Click Create Lead button  
await page.locator('input[name="submitButton"]').click() 
// 17. Get the page title 
console.log(await page.title());
  await page.waitForTimeout(5000);

});