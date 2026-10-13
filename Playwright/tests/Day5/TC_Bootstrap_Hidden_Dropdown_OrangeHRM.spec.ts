import{test,expect}from "@playwright/test"
const pageURL="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test.describe("TC_Bootstrap Hidden Dropdown",()=>{

test("Bootstrap Hidden Dropdown",async({page})=>{
        await page.goto(pageURL);
        const userName= page.getByPlaceholder("Username");
        const password= page.getByPlaceholder("Password");
        const loginButton=page.getByRole("button").filter({hasText:"Login"});
        await expect(userName).toBeVisible();
        await expect(password).toBeVisible();
        await expect(loginButton).toBeVisible();
        await userName.fill("Admin");
        await password.fill("admin123")
        await loginButton.click();
        const dashboardHeader=page.getByRole("heading").filter({hasText:"Dashboard"});
        await expect(dashboardHeader).toBeVisible();
    })

    test.afterAll(async({page})=>{
        await page.close();
    })
})