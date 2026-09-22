import {chromium,test,expect} from "@playwright/test"

//Assignment2
test("creating Lead using assertions", async ({ page }) => {
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
// Verify the company name, first name, last name and the status using auto retrying and non retrying assertions 

// Auto-retrying
await expect(page.locator("#viewLead_companyName_sp")).toContainText("company");
await expect(page.locator("#viewLead_firstName_sp")).toHaveText("cherry");
await expect(page.locator("#viewLead_lastName_sp")).toHaveText("Avg");
await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned");
// Non-retrying assertions
const companyName = await page.locator("#viewLead_companyName_sp").innerText();

expect(companyName).toContain("company");
console.log(companyName);


console.assert(
    await page.locator("#viewLead_firstName_sp").textContent() === "cherry",
    "First name verification failed"
);

console.assert(
    await page.locator("#viewLead_lastName_sp").textContent() === "Avg",
    "Last name verification failed"
);

console.assert(
    await page.locator("#viewLead_statusId_sp").textContent() === "Assigned",
    "Status verification failed"
);



});