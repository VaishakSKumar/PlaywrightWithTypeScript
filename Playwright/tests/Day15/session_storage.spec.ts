import { chromium } from "@playwright/test";
import fs from "fs"

async function saveSessionStorage() {
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://sdetqa.vercel.app/login_app");
    await page.getByLabel("Username").fill("admin");
    await page.getByLabel("Password").fill("admin123");
    await page.getByLabel("⏳ Session").click();  
    await page.getByRole("button", { name: "Login" }).click();

    const sessionStorageData=await page.evaluate(()=>sessionStorage);    
    await page.locator("#dashboardView .greeting").waitFor();
    fs.writeFileSync("./Download/sessiondata.json",JSON.stringify(sessionStorageData,null,2))

    
    console.log("Session state saved!");
    await browser.close();
}

saveSessionStorage();