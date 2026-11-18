import { test,expect } from "@playwright/test";
const loginCredentials:string[][]=[
    ["laura.taylor123@example.com","test123","valid"],
    ["invalidUser@example.com","test321","invalid"],
    ["validUser@example.com","testxyz","invalid"],
    ["","","invalid"]
]
for(const [email,password,validity] of loginCredentials){
test.describe("Login Validation",async()=>{
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
})
}