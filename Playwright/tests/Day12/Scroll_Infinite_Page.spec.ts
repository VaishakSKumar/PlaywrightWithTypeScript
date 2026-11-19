import { test,expect } from "@playwright/test";

test("Scroll Infinite",async ({page}) => {
    test.setTimeout(180000); // default is 30s - each scroll waits 3s, so allow 3 minutes
    await page.goto("https://www.booksbykilo.in/teen-fiction");
    let previousHeight=0;
    let scrollCount=0;
    const maxScrolls=50; // safety limit so the loop can't run forever
    while(scrollCount<maxScrolls){
        scrollCount++;
        await page.evaluate(()=>{
            window.scrollBy(0,document.body.scrollHeight);
        })        
        await page.waitForTimeout(3000);
        let currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight;
        })
    console.log(`Previous Height: ${previousHeight}`)
    console.log(`Current Height: ${currentHeight}`)
        if (previousHeight===currentHeight) {
            break;
        }

        previousHeight=currentHeight;
    }


})


test("Scroll Infinite By Checking Count of Each Book In Row",async ({page}) => {
    test.setTimeout(180000);
    await page.goto("https://www.booksbykilo.in/teen-fiction");
    let previousHeight=0;
    let scrollCount=0;
    const maxScrolls=50; 
    while(scrollCount<maxScrolls){
        scrollCount++;
        const bookCountInARow=await page.locator("#divItemCard").count();
        console.log(`Book Count on Scroll ${scrollCount}: ${bookCountInARow}`);

        await page.evaluate(()=>{
            window.scrollBy(0,document.body.scrollHeight);
        })        
        await page.waitForTimeout(3000);
        let currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight;
        })
    
        if (previousHeight===currentHeight) {
            break;
        }

        previousHeight=currentHeight;
    }
})
test("Scroll To A Particular Book",async ({page}) => {
    test.setTimeout(180000); 
    await page.goto("https://www.booksbykilo.in/teen-fiction");
    let previousHeight=0;
    let scrollCount=0;
    const maxScrolls=50;     
    let bookFound=false;
    while(scrollCount<maxScrolls){
        scrollCount++;
        const bookTitlesInARow=await page.locator("#divItemCard h3").allInnerTexts();

        if (bookTitlesInARow.includes("The General")) {
            console.log(`Book Found and It require a Scroll Count of ${scrollCount}`);
            bookFound=true;
            expect(bookFound).toBeTruthy()
            break;
        }

        await page.evaluate(()=>{
            window.scrollBy(0,document.body.scrollHeight);
        })        
        await page.waitForTimeout(3000);
        let currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight;
        })
                
        if(previousHeight===currentHeight) {
            break;
        }

        previousHeight=currentHeight;
        }
    })




    test.afterEach(async ({page}) => {
       // await page.close();
    })
