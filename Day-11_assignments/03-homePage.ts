import { LoginPage } from "./01-loginPage";



export class HomePage extends LoginPage {

    async clickLeads() {

        await this.page.locator('//a[text()="Leads"]').click();

    }


}