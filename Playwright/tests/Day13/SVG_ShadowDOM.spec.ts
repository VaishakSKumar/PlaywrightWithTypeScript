import { test,expect } from "@playwright/test";
const pageURL="https://sdetqa.vercel.app/autoplay";

test.describe("SVG and Shadow DOm Elements",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(pageURL);
        await expect(page.getByText("AutoPlay")).toBeVisible();
    })

    test("Shadow Dom",async({page})=>{
        const shadowDOMElement=page.locator("h3",{hasText:"Shadow DOM"});
        await shadowDOMElement.scrollIntoViewIfNeeded();

        const shadowHost=page.locator("#shadow_host");
        await expect(shadowHost).toBeVisible();

        const mobileText=await page.locator("#shadow_host span.info").innerText();
        expect(mobileText).toBe("Mobiles")

        const laptopText=await page.locator('div').filter({ hasText: 'Laptops' }).last().innerText();
        expect(laptopText).toBe("Laptops")

        const shadowDOMTextbox=shadowHost.locator("input[type='text']");
        await shadowDOMTextbox.fill("Welcome Home Baby Ma!");
        await expect(shadowDOMTextbox).toHaveValue("Welcome Home Baby Ma!")

        const shadowCheckBoxlocator=shadowHost.locator("input[type='checkbox']");
        await shadowCheckBoxlocator.check()
        expect(await shadowCheckBoxlocator.isChecked()).toBeTruthy();

        const shadowDomFile=shadowHost.locator("input[type='file']")
        await shadowDomFile.setInputFiles("Playwright/tests/Day11/testdata/users.json")

    })

    test("SVG Elements",async({page})=>{
        const svgLocator=page.locator(".svg-section").first();
        const circleColorLocator=await svgLocator.locator("circle").getAttribute("fill");
        expect(circleColorLocator).toBe("DeepSkyBlue");
        await svgLocator.scrollIntoViewIfNeeded();
         const svgBarGraphLocator=page.locator(".svg-section").nth(1);
         const bar=svgBarGraphLocator.locator("rect");
         const barTextValue=svgBarGraphLocator.locator("text");

         expect(await bar.count()).toEqual(await barTextValue.count());

        const countOfBar=await bar.count();

        for (let index = 0; index < countOfBar; index++) {
            const label = await barTextValue.nth(index).textContent();
            const barHeight=await bar.nth(index).getAttribute("height");
            
            console.log(`${label} value is ${barHeight}`);
            
        }


        let maxHeight=0;
        for (let index = 0; index < countOfBar; index++) {
            let height=Number(await bar.nth(index).getAttribute("height"));
            if (height>maxHeight) {
                maxHeight=height;
            }
        }
        expect(maxHeight).toEqual(70);

    })


    test.afterEach(async({page})=>{
        await page.close();
    })
})