import { test } from "@playwright/test";


test("Learn Xpath",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

await page.waitForEvent("domcontentloaded")
    await page.locator('//input[@id="username"]').fill("democsr2");


    await page.locator('//input[@id="password"]').fill("crmsfa");


    await page.locator('//input[@class="decorativeSubmit"]').click();


    await page.locator('//a[contains(text(),"CRM")]').click();
await page.waitForTimeout(4000)
})