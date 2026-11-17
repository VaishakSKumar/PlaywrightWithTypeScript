import { test,expect } from "@playwright/test";
import console from "console";
import fs from "fs";

const cookieFile="./Download/cookiesFile.json"
const appURL="https://sdetqa.vercel.app/login_app"

test.describe.configure({mode:"serial"})

test("Login and Save Cookie",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    page.goto(appURL);
    
    await page.getByLabel("Username").fill("admin");
    await page.getByLabel("Password").fill("admin123");
    await page.getByLabel("🍪 Cookie").click();
    await page.getByRole("button",{name:"Login"}).click();

    const dashBoardtext=page.locator("#dashboardView .greeting");
    await expect(dashBoardtext).toBeVisible();

    let cookies=await context.cookies();
    fs.writeFileSync(cookieFile, JSON.stringify(cookies, null, 2));
    console.log("Cookie save Successfully!")    
})

test("Saved Cookie and Loading",async({browser})=>{
    const context=await browser.newContext();
    const savedFiles=JSON.parse(fs.readFileSync(cookieFile,"utf-8"))
    await context.addCookies(savedFiles);
    const page=await context.newPage();
    await page.goto(appURL);
    const dashBoardtext=page.locator("#dashboardView .greeting");
    await expect(dashBoardtext).toBeVisible();
})