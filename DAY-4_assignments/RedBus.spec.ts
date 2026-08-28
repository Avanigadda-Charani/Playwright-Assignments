import { chromium, firefox, test } from "@playwright/test";

test("Launch Firefox and Edge browsers", async () => {

    const firefoxBrowser = await firefox.launch({
        headless: false,
        channel: "firefox"
    });

    const edgeBrowser = await chromium.launch({
        headless: false,
        channel: "msedge"
    });

    const firefoxContext = await firefoxBrowser.newContext();
    const edgeContext = await edgeBrowser.newContext();

    const firefoxPage = await firefoxContext.newPage();
    const edgePage = await edgeContext.newPage();

    // Flipkart
    await firefoxPage.goto("https://www.flipkart.com");
    console.log(await firefoxPage.title());
    console.log(firefoxPage.url());

    // RedBus
    await edgePage.goto("https://www.redbus.in");
    console.log(await edgePage.title());
    console.log(edgePage.url());

    // Wait to clearly see the browsers opening
    await firefoxPage.waitForTimeout(5000);
    await edgePage.waitForTimeout(5000);

    // Close the browsers after execution
    await firefoxBrowser.close();
    await edgeBrowser.close();
});

