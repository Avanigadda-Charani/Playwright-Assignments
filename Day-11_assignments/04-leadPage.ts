import { LoginPage } from "./01-loginPage";


export class LeadPage extends LoginPage {

    async clickCreateLead() {

        await this.page.locator('//a[text()="Create Lead"]').click();

    }

}