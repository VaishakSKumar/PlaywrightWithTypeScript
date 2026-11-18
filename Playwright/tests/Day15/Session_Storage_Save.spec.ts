import { test,expect } from "@playwright/test";
import fs from "fs"

test("Login through session Storage session data",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage();
    const sessionStorageData=JSON.parse(fs.readFileSync("./Download/sessiondata.json","utf-8"))

    await context.addInitScript((storage)=>{
        Object.keys(storage).forEach(Key=>{
            sessionStorage.setItem(Key,storage[Key])
        })
    },sessionStorageData)

    await page.goto("https://sdetqa.vercel.app/login_app")

    
    await expect(page.getByText("Dashboard Welcome")).toBeVisible();
    await expect(page.locator("#displayUser")).toContainText("admin");
})