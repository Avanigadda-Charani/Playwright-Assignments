import { LoginPage } from "./01-loginPage";


export class CreateLeadPage extends LoginPage {

    async enterMandatoryFields() {
        //Filling all the mandatory fields such as Company name, First name and Last name 
        await this.page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
        await this.page.locator('//input[@id="createLeadForm_firstName"]').fill("cherry");
        await this.page.locator('//input[@id="createLeadForm_lastName"]').fill("Avg")
        //Select Direct Mail from the Source dropdown using label 
        await this.page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { label: "Direct Mail" })
        //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value  
        await this.page.selectOption('//select[@id="createLeadForm_marketingCampaignId"]', { value: "DEMO_MKTG_CAMP" })
        // Get the count and print all the values in the Marketing Campaign dropdown 
        const marketCampaignCount = await this.page.locator('//select[@id="createLeadForm_marketingCampaignId"]/option').count();
        console.log(marketCampaignCount);
        // Select General Services from the Industry dropdown using index
        await this.page.selectOption('//select[@id="createLeadForm_industryEnumId"]', { index: 7 })
        //Select INR from the Preferred Currency dropdown 
        await this.page.selectOption('//select[@id="createLeadForm_currencyUomId"]', { label: "INR - Indian Rupee" })
        // Select India from the Country dropdown 
        await this.page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]', { label: "India" })
        // Select any state from the State dropdown  
        await this.page.selectOption('//select[@id="createLeadForm_generalStateProvinceGeoId"]', { label: "GUJARAT" })
        //Get the count of all states and print the values in the console 
        const statesCountText = await this.page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]').textContent();
        console.log(statesCountText);

    }

    async clickCreateLead() {
        //creating lead
        await this.page.locator('//input[@class="smallSubmit"]').click();
    }

}