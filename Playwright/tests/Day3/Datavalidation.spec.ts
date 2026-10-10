import{test,expect} from "@playwright/test"

const pageURl="https://sdetqa.vercel.app/autoplay";

test.describe("Data Validation Testcase",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageURl);
    await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");
})

test("1. Page Load Validation",async({page})=>{
     const autoPlay=page.getByText("AutoPlay");
     expect(autoPlay).toBeVisible;
})

})