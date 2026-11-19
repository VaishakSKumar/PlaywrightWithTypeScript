import { test,expect } from "@playwright/test";

test.describe.configure({mode:"serial"});

test("Admin Credentials Saved",async({browser})=>{
    const context=await browser.newContext({storageState:"./Download/admin_data.json"});
    const page=await context.newPage();
    await page.goto("https://sdetqa.vercel.app/login_app");    
    await expect(page.getByText("Dashboard Welcome")).toBeVisible();
    await expect(page.locator("#displayUser")).toContainText("admin");
})

test("User Credentials Saved",async({browser})=>{
    const context=await browser.newContext({storageState:"./Download/user_data.json"});
    const page=await context.newPage();
    await page.goto("https://sdetqa.vercel.app/login_app");    
    await expect(page.getByText("Dashboard Welcome")).toBeVisible();
    await expect(page.locator("#displayUser")).toContainText("testuser1");
})