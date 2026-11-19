import { test,expect } from "@playwright/test";
const pageURL="https://www.worldometers.info/geography/flags-of-the-world/"
//const pageURL="https://www.booksbykilo.in/teen-fiction";

test.describe("Scrolling techniques",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(pageURL);
    })

test("Scroll through Pixels",async({page})=>{
    await page.evaluate( ()=>window.scrollBy(0,2000) ) 
        const scrollPosition=await page.evaluate( ()=> window.scrollY)
        console.log("Pixels scrolled:",scrollPosition)
})

test("Scroll To Specific Element",async({page})=>{
    const indianFlag=page.getByAltText("Flag of India");
    await indianFlag.scrollIntoViewIfNeeded();
    await expect(indianFlag).toBeVisible();
})

test("Scroll To Bottom Of The Page",async({page})=>{
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
    await page.waitForTimeout(2000);
    await expect(page.getByAltText("Worldometer Logo").last()).toBeVisible();
})

test("Scroll To Top Of The Page",async({page})=>{
     await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
    await page.waitForTimeout(2000);
  await expect(page.getByAltText("Worldometer Logo").last()).toBeVisible();

    await page.evaluate(()=>{
        window.scrollTo(0,0);
    })
    await page.waitForTimeout(2000);
    await expect(page.getByAltText("Worldometer Logo").first()).toBeVisible();
})

    test.afterEach(async({page})=>{
        await page.close();
    })
})