import { expect, test } from "@playwright/test";

const pageURL="https://sdetqa.vercel.app/autoplay"

test.describe("Mouse Actions",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageURL)
})

test("Click",async({page})=>{
    const toggleButton= page.locator("#toggleBtn")
    const textAtBegining=await toggleButton.innerText();
    await toggleButton.click();    
    await toggleButton.click(); 
    await page.waitForTimeout(2000);
    await toggleButton.click(); 
    await toggleButton.click(); 
    const textAtEnd=await toggleButton.innerText();
    expect(textAtEnd).not.toBe(textAtBegining);
})

test("Right Click/Context Click",async({page})=>{
    const rightClick= page.locator("#rightClickBtn")
   await rightClick.click({button:"right"});
    const allContextMenuText=await page.locator("#customContextMenu button").allInnerTexts();
    expect(allContextMenuText).toEqual([ 'Edit', 'Cut', 'Copy', 'Paste', 'Delete', 'Quit' ]);
    
    page.once('dialog',(dialog)=>{
        expect(dialog.message()).toContain("Quit")
        dialog.accept();
    })
    await page.locator("#customContextMenu button").filter({hasText:'Quit'}).click();

})

test("Hover Over",async({page})=>{
    const hoverButton=page.getByText("Hover me").first();
    await hoverButton.hover();
    await expect(page.getByTitle("This is a tooltip")).toBeVisible();
     const title=await hoverButton.getAttribute("title");
     expect(title).toBe("This is a tooltip");
})

test("Double Click Copy",async({page})=>{
    await page.locator("#field1").fill("Hello World");
    await page.getByRole("button",{name:"Copy Text"}).dblclick();
    const value=await page.locator("#field2").inputValue();
    expect(value).toBe("Hello World");
})

test("Double Click",async({page})=>{
    page.once("dialog",(dialog)=>{
        expect(dialog.message()).toEqual("Double clicked!");
        dialog.accept();
    })
    
    await page.getByRole("button",{name:"Double click"}).dblclick();
})

test.afterEach(async({page})=>{
    await page.close();
})

})

