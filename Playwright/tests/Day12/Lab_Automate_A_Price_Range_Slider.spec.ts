import { expect, Page, test } from "@playwright/test";
const pageURL="https://sdetqa.vercel.app/autoplay";

test("Range Slider",async({page})=>{
   await page.goto(pageURL);

    const minimumValue=page.locator("#slider-range span").first();
    const maximumValue=page.locator("#slider-range span").last();
    const priceRangeTextBox=page.locator("p input#amount");
    await expect(minimumValue).toBeVisible();
    await expect(maximumValue).toBeVisible();
    await expect(priceRangeTextBox).toBeVisible();

    await minimumValue.focus();
    await page.keyboard.press("Home");

    await maximumValue.focus();
    await page.keyboard.press("End");

    console.log("Default Price range:",await priceRangeTextBox.inputValue());

    await minimumValue.focus();
    let count=0
    await  minimumSlider(page,count,100);
 console.log("Updated Price range After setting Minimum value:",await priceRangeTextBox.inputValue());
    
    
 await maximumValue.focus();
 await  maximumSlider(page,count,300);
 console.log("Updated Price range After setting Maximum value:",await priceRangeTextBox.inputValue());
    const valueText=await priceRangeTextBox.inputValue();
 await expect(priceRangeTextBox).toHaveValue("$100 - $300");   

   await page.close();
})

async function minimumSlider(page:Page,count:number,minimumValue:number) {
    for (let index = 0; index < minimumValue; index++) {        
        await page.keyboard.press("ArrowRight")
        count++;
    }
    console.log("KeyBoard Press Count:",count);
}

async function maximumSlider(page:Page,count:number,maximumValue:number) {
    for (let index = 500; index > maximumValue; index--) {        
        await page.keyboard.press("ArrowLeft")
        count++;
    }
    console.log("KeyBoard Press Count:",count);
}