import { expect, test } from "@playwright/test";
const pageURL="https://sdetqa.vercel.app/autoplay"

test("Scroll To Infinite Select",async({page})=>{

    await page.goto(pageURL);

    const infiniteScrollLocator=page.locator("#scrollable");
    await expect(infiniteScrollLocator).toBeVisible();

    await infiniteScrollLocator.evaluate(async(select:HTMLSelectElement)=>{
        while (true) {
             const optionToSelect=Array.from(select.options).some((option)=>option.text==="Item 300");
        if (optionToSelect) {
            break;
        }
        select.scrollTop= select.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, 100));
        }       
    })

    await infiniteScrollLocator.selectOption("Item 300");

    await expect(infiniteScrollLocator).toHaveValue('Item 300');

    await page.waitForTimeout(5000);

    await page.close();  
})