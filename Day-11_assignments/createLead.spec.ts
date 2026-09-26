
import { test } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
//import { ViewLeadPage } from "../pages/06-viewLeadPage";
//import { createAccountsPage } from "../pages/07-createAccountsPage"
import dotenv from "dotenv";
dotenv.config({ override: true });
const env = dotenv.config({ override: true }).parsed;
const result = dotenv.config();

console.log(result);
console.log("url =", process.env.url);
console.log("USERNAME =", process.env.USERNAME);
console.log("PASSWORD =", process.env.PASSWORD);

test("Learn login using POM",async ({page}) => {
    
 //object created for LoginPage class   
const objlog = new LoginPage(page); // page => p879870 //page reference used to loade the url
await objlog.loadurl(env!.url);
await objlog.enterCredentials(env!.USERNAME, env!.PASSWORD);
await objlog.clickLogin();

 //object created for WelcomePage class 

 const wp = new WelcomePage(page);
 await wp.clickCRM()

  //object created for HomePage class 

 const hp = new HomePage(page);
 await hp.clickLeads()

  //object created for LeadPage class 

 const lp = new LeadPage(page);
 await lp.clickCreateLead();

   //object created for CreateLeadPage class 

 const clp = new CreateLeadPage(page);
 await clp.enterMandatoryFields();
 await clp.clickCreateLead();

//    //object created for ViewLeadPage class 

//  const vp = new ViewLeadPage(page);
//  await vp.viewLeadName();

//   const Ap = new createAccountsPage(page);
//  await Ap.clickAccounts();
//  await Ap.enterMandatoryFields();
//  await Ap.clickCreateAccount();
 


})
