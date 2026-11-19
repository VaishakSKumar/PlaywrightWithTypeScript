import { test,expect } from "@playwright/test";

const pageURL="https://www.bstackdemo.com/"

test.describe("Browser Stack Validation",()=>{

    test.beforeEach(async({page})=>{
        await page.goto(pageURL);
    })

    test("Validate product sorting functionality and extract product details such as names and prices from the webpage",async({page})=>{
        await expect(page).toHaveURL("https://www.bstackdemo.com/")
        const orderByDropdown=page.locator(".sort select");
        await expect(orderByDropdown).toBeVisible();
        await expect(orderByDropdown).toBeEnabled();
        await orderByDropdown.selectOption({label:"Lowest to highest"});
        await page.waitForTimeout(2000);
        const productPriceLocator=page.locator(".shelf-item__price .val");
        const productPrices=await productPriceLocator.allInnerTexts();        

        const productTitleLocator=page.locator(".shelf-item__title");
        const productTitles=await productTitleLocator.allInnerTexts();

        expect(productTitles.length).toEqual(productPrices.length);

       for (let index = 0; index < productTitles.length; index++) {
        console.log(productTitles[index]+" "+productPrices[index]);        
       }
   
       const productPriceFirstLocator=productPrices[0];
       const productTitleFirstLocator=productTitles[0];       
       console.log("First product Title and Price:")
       console.log(productTitleFirstLocator+" "+productPriceFirstLocator);

        const productPriceLastLocator=productPrices[productPrices.length-1];
        const productTitleLastLocator=productTitles[productTitles.length-1];
        console.log("Last product Title and Price:")
        console.log(productTitleLastLocator+" "+productPriceLastLocator);
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

})