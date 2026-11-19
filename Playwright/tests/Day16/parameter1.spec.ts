import { test,expect } from "@playwright/test";

const searchItems:string[]=["Laptop","Mouse","Monitor","Desktop"]

searchItems.forEach(item=>{
test(`Search For Item: ${item}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator(".search-box-text").fill(item);
    await page.locator(".search-box-button").click();
    await expect.soft(page.locator("h2 a").nth(0)).toBeVisible();
    await page.close();
})
})
