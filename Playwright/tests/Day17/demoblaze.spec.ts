import { test,expect, chromium } from "@playwright/test";

test.describe("Demoblaze Store",{tag:'@smoke'},()=>{

    test.beforeAll("Print The Message",()=>{
        console.log("BEFORE ALL PRINTS FIRST");
        
    })

    test.afterAll("Print The Message",async()=>{
        console.log("AFTER ALL PRINTS LAST");
        
    })

  test.beforeEach("Open The Site and Check Categories(Phones, Laptops and Monitors) are visible",async({page})=>{
        await page.goto("https://www.demoblaze.com/")
        await expect(page.getByRole("link",{name:"Phones"})).toBeVisible();
        await expect(page.getByRole("link",{name:"Laptops"})).toBeVisible();
        await expect(page.getByRole("link",{name:"Monitors"})).toBeVisible();
        await expect(page.getByRole("link",{name:"CATEGORIES"})).toBeVisible();
    })

    test.afterEach("Take a screenshot, saved with the test's title in the file name",async({page},testInfo)=>{
        
        const testTitleFileName= `./Users/nivet/Git/PlaywrightWithTypeScript/Playwright/ScreenShot/${testInfo.title}.png`;
        
        await page.screenshot({
                fullPage:true,
                path:testTitleFileName
            })
    })

    test.describe("Catalog",()=>{
        /*
        Click Laptops. 
        Capture all product names, 
        assert that there is at least one,
         and print them
        */
        test("Laptops are listed",{tag:"@smoke"},async({page})=>{
          /*  const context=await browser.newContext();
            const tracePath=`./Users/nivet/Git/PlaywrightWithTypeScript/Playwright/${testInfo.title}.zip`
            await context.tracing.start({
                screenshots:true,
                snapshots:true,
                sources:true
            })
            const page=await context.newPage();
            await page.goto("https://www.demoblaze.com/")*/
            await page.getByRole("link", { name: "Laptops" }).click();
            const lapTopTitlecard=page.locator("#tbodyid h4.card-title");
            const allNames:string[]=[]
            await lapTopTitlecard.nth(0).waitFor({state:'visible'});
           const nextButton= page.locator("button#next2")
           allNames.push(...(await lapTopTitlecard.allInnerTexts()));
           while (await nextButton.isVisible()) {               
               const firstbefore=await lapTopTitlecard.first().innerText();
               await nextButton.click();
               await expect(lapTopTitlecard.first()).not.toHaveText(firstbefore)
              allNames.push(...(await lapTopTitlecard.allInnerTexts()));
            }

            expect(allNames.length).toBeGreaterThan(0);
            for (const name of allNames) {
                console.log(name);                
            }

           /* await context.tracing.stop({
                path:tracePath
            })*/
            
        })

        /*
        Open the first laptop.
        Assert that its name and price are displayed.
        */
       test("Product details",{tag:"@regression"},async({page})=>{            
            await Promise.all([
  page.waitForResponse((res) => res.url().includes("/bycat")),
  page.getByRole("link", { name: "Laptops" }).click(),
]);
await page.locator("#tbodyid h4.card-title").first().click();
            const actualName=page.locator("#tbodyid h2.name");
            const actualprice=page.locator("#tbodyid h3.price-container")
             await expect(actualName).toHaveText("Sony vaio i5")
            await expect(actualprice).toContainText("$790")            
       })
       
    })

    test.describe("Cart",()=>{
        /*
         Add that product to the cart.
         An alert appears, so handle it and check its message.
         Open Cart and assert that the product is listed.
         */
        test("Add to cart",{tag:"@regression"},async({page})=>{
            test.slow();
          await Promise.all([
  page.waitForResponse((res) => res.url().includes("/bycat")),
  page.getByRole("link", { name: "Laptops" }).click(),
]);
await page.locator("#tbodyid h4.card-title").first().click();
const productName=await page.locator("#tbodyid h2.name").innerText();
            page.on("dialog",async(dialog)=>{
                const getMessage=dialog.message();
                expect(getMessage).toEqual("Product added");
            })
  const dialogPromise = page.waitForEvent("dialog");
  await page.getByRole("link", { name: "Add to cart" }).click();
  const dialog = await dialogPromise;
  expect(dialog.message()).toContain("Product added");
  await dialog.accept();
            await page.locator("#cartur").click();
 await expect(page.locator("#tbodyid")).toContainText(productName);
        })

        test.skip("Login (not built yet)",async()=>{

        })

        test.fail("Known bug",async({page})=>{
            const pageUrl=page.url();
            await Promise.all([
  page.waitForResponse((res) => res.url().includes("/bycat")),
  page.getByRole("link", { name: "Laptops" }).click(),
]);
        expect(pageUrl).toEqual(page.url());
        })

        test.fixme("Fix The Bug",async({page})=>{
             const pageUrl=page.url();
            await Promise.all([
  page.waitForResponse((res) => res.url().includes("/bycat")),
  page.getByRole("link", { name: "Laptops" }).click(),
]);
        expect(pageUrl).toEqual(page.url());
        })
    })


})