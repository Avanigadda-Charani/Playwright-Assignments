 import {chromium,firefox,test} from "@playwright/test"
test("Redbus browser launch",async()=>{
    const browser1=await firefox.launch({headless:false,channel:"firefox"})
    const browser2=await chromium.launch({headless:false,channel:"msedge"})
    const context1=await browser1.newContext()
    const context2=await browser2.newContext()
    const page1=await context1.newPage()
    const page2=await context2.newPage()
    //Flipcart
    await page1.goto("https://www.flipkart.com")
    console.log(await page1.title())
    console.log(page1.url())
    //RedBus
    await page2.goto("https://www.redbus.in")
    console.log(await page2.title())
    console.log(page2.url())
    //time to see opening of browser clearly
    await page1.waitForTimeout(5000) 
    await page2.waitForTimeout(5000) 
})

