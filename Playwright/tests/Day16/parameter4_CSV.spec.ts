import { test,expect } from "@playwright/test";
import  fs  from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const dataFile = path.join(__dirname, "../../../Download/data.csv");
const jsonFile = fs.readFileSync(dataFile, "utf-8");

const loginCredentials:any[] = parse(jsonFile, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
  trim: true,
});

test.describe("Login Validation",()=>{
    for (const data of loginCredentials) {
test(`Login Validation for ${data.email} and ${data.password}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("a[href='/login']").click();
    await page.locator("#Email").fill(data.email)
    await page.locator("#Password").fill(data.password)
    await page.getByRole("button",{name:"Log in"}).click()   
    if(data.validity.toLowerCase()==="valid"){
        await expect(page.locator("a[href='/logout']")).toBeVisible();
    }else{
        await expect(page.locator(".validation-summary-errors")).toBeVisible();
        expect(page.url()).toEqual("https://demowebshop.tricentis.com/login");
    }
    
})
}
})