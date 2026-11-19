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
        await page.waitForTimeout(2000);
        const pimMenu=page.locator("a span").filter({hasText:"PIM"});
        await pimMenu.click();
        const pimDashboardHeader=page.getByRole("heading").filter({hasText:"PIM"});
        await expect(pimDashboardHeader).toBeVisible();
        const jobTitleDropDown=page.locator("form i").nth(2);
        await jobTitleDropDown.click();
        const dropdownOption=page.locator("div[role='listbox'] span");
        const dropDownOptionFirst=page.locator("div[role='listbox'] span").first();
        await expect(dropDownOptionFirst).toBeVisible();
        const dropdownOptionCount=await dropdownOption.count();
        console.log(dropdownOptionCount);
        const allDropdownOptionText=await dropdownOption.allInnerTexts();
        console.log(allDropdownOptionText);

        for (let index = 0; index < dropdownOptionCount; index++) {
           const dropDownOptions=dropdownOption.nth(index)
           const dropDownOptionsText=await dropDownOptions.innerText();
           console.log(dropDownOptionsText);

           if (dropDownOptionsText==="Automaton Tester") { 
             await dropDownOptions.click();
             break;
           }
        }
        await page.waitForTimeout(2000);
    })

    test.afterAll(async({page})=>{
        await page.close();
    })
})