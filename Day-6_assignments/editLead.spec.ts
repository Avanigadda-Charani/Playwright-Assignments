import {chromium,test,expect} from "@playwright/test"

//Assignment3
test("creating Lead and editing", async ({ page }) => {
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
// Create Lead 
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
// Fill the Company Name   
await page.locator('input[id="createLeadForm_companyName"]').fill("company");
// Fill the First Name   
await page.locator('input[id="createLeadForm_firstName"]').fill("cherry");
// Fill the Last Name   
await page.locator('input[id="createLeadForm_lastName"]').fill("Avg")
// Fill the Salutation   
await page.locator('input[name="personalTitle"]').fill("Mrs.")
// Fill the Title
await page.locator('input[name="generalProfTitle"]').fill("software")   
// Fill the Annual Revenue   
await page.locator('input[name="annualRevenue"]').fill('100000')
//Fill the Department  
await page.locator('input[name="departmentName"]').fill('it') 
//Fill the Phone number  
await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').fill('1234567890') 
// Click Create Lead button  
await page.locator('input[name="submitButton"]').click() 
//created lead to find lead
//7.Click Find Leads 
await page.locator('a[href="/crmsfa/control/findLeads"]').click();
// 8. Enter the first name 
await page.locator("input[name='firstName']").nth(2).fill("cherry")
// 9. Click Find Leads button 
await page.getByRole("button",{name:"Find Leads",exact:true}).click();
// 10. Click the first resulting Lead ID 
await page.locator("//div[contains(@class,'x-grid3-row')]").first().locator("a").first().click();
// 11. Click Edit 
await page.locator("//a[text()='Edit']").click();
// 12. Edit Company name 
await page.locator('input[id="updateLeadForm_companyName"]').fill("updatedcompany");
// 13. Edit Annual Revenue 
await page.locator('input[name="annualRevenue"]').fill('200000')
// 14. Edit Department 
await page.locator('input[name="departmentName"]').fill('itdepart') 
// 15. Enter Description 
await page.locator("textarea[id='updateLeadForm_description']").fill("updatedFields")
// 16. Click Update 
await page.locator("//input[@value='Update']").click();
// 17. Verify the edited fields using appropriate assertions 
await expect(page.locator("#viewLead_companyName_sp")).toContainText("updatedcompany");
await expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText("$200,000.00");
await expect(page.locator("#viewLead_departmentName_sp")).toHaveText("itdepart");

});