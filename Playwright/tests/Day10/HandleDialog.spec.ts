import { test,expect } from "@playwright/test";
const pageURL="https://sdetqa.vercel.app/autoplay"

test.describe("Handle Alerts",()=>{
    test.beforeEach(async ({page}) => {
        await page.goto(pageURL);
        await expect(page.getByText("AutoPlay")).toBeVisible();
    })

    test("Handle Simple alerts",async({page})=>{
        page.on("dialog",(dialog)=>{
            expect(dialog.type()).toBe("alert");
            expect(dialog.message()).toEqual("Simple alert!")
            dialog.accept();
        })
        await page.getByRole("button",{name:"Simple"}).click();
    })

    test("Handle Confirmation alerts",async({page})=>{
        page.on("dialog",(dialog)=>{
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toEqual("Confirm?")
           dialog.dismiss();
        })
        await page.getByRole("button",{name:"Confirm"}).click();
    })

    test("Handle Prompt alerts",async({page})=>{
        page.on("dialog",(dialog)=>{
            if (dialog.type()==="prompt"){
                dialog.accept("Welcome World!");
            }else if(dialog.type()!="prompt")     {
                dialog.accept();
            }      
        })
        await page.getByRole("button",{name:"Prompt"}).click();
    })


    test.afterEach(async({page})=>{
        await page.close();
    })
})