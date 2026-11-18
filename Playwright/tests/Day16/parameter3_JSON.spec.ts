import { test,expect } from "@playwright/test";
import  fs  from "fs";
import path from "path";

const dataFile = path.join(__dirname, "../../../Download/json_data.json");
const loginCredentials = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

test.describe("Login Validation",()=>{
    for (const { email, password, validity } of loginCredentials) {
test(`Login Validation for ${email} and ${password}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("a[href='/login']").click();
    await page.locator("#Email").fill(email)
    await page.locator("#Password").fill(password)
    await page.getByRole("button",{name:"Log in"}).click()   
    if(validity.toLowerCase()==="valid"){
        await expect(page.locator("a[href='/logout']")).toBeVisible();
    }else{
        await expect(page.locator(".validation-summary-errors")).toBeVisible();
        expect(page.url()).toEqual("https://demowebshop.tricentis.com/login");
    }
    
})
}
})