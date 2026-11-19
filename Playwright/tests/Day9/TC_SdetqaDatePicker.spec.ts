import { test,expect, Page,Locator } from "@playwright/test";
const pageURL="https://sdetqa.vercel.app/autoplay";

test.describe("Date Validation",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageURL);
})

test("Date Picker (with navigation)",async({page})=>{    
    const datePicker= page.locator("#datepicker1");
   // await datePicker.fill("08/09/2028");
    await datePicker.click();
    const targetDate="22";
    const targetMonth="October"
    const targetYear="2026"
    await selectDate(page,targetMonth,targetDate,targetYear,false);
    await expect(datePicker).toHaveValue("10/22/2026");   
})

test("Date Picker (with select)",async({page})=>{
      const datePicker= page.locator("#datepicker2");
   // await datePicker.fill("08/09/2028");
    await datePicker.click();
    const targetDate="22";
    const targetMonth="Oct"
    const targetYear="2027"
    await selectDateWithSelect(page,targetMonth,targetDate,targetYear);
     await expect(datePicker).toHaveValue("22/10/2027");  
})

test("Date Range Selector",async({page})=>{
      const startDate= page.locator("#start-date");
      const endDate= page.locator("#end-date");
   // await datePicker.fill("08/09/2028");
    const fromDate='2026-10-22';
    const targetDate='2027-10-22';
    await startDate.fill(fromDate)
    await endDate.fill(targetDate);
    await expect(startDate).toHaveValue("2026-10-22");  
    await expect(endDate).toHaveValue("2027-10-22");

    await page.getByRole("button",{name:"Submit"}).nth(1).click();

    const pageResult=page.locator("#result");
    await expect(pageResult).toBeVisible();
})

test.afterEach(async({page})=>{
    await page.close();
})
})

async function selectDate(page:Page,targetMonth:string,targetDate:string,targetYear:string,isFuture:boolean){
       while (true) {
         const month=await page.locator(".ui-datepicker-month").innerText();
        const year=await page.locator(".ui-datepicker-year").innerText();
        if (month===targetMonth&&year===targetYear) {
            break;
        }
        if(isFuture===true){
            await page.locator(".ui-datepicker-next").click();
        }else{
            await page.locator(".ui-datepicker-prev").click();
        }
    }

    const dates=await page.locator(".ui-datepicker-calendar td").all();

    for (const date of dates) {
        if(await date.innerText()===targetDate){
            await date.click();
        }
    }
}

async function selectDateWithSelect(page:Page,targetMonth:string,targetDate:string,targetYear:string) {
    await page.locator(".ui-datepicker-month").selectOption({label:targetMonth});
    await page.locator(".ui-datepicker-year").selectOption({label:targetYear});
    await page.locator(".ui-datepicker-calendar td",{hasText:targetDate}).first().click();
}

