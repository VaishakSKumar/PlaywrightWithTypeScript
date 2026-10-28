import { expect, test } from "@playwright/test";

const pageURL="https://gotranscript.com/text-compare"

test("keyboard Actions",async({page})=>{
    await page.goto(pageURL);
    const textArea1=page.locator("textarea[name='text1']")
    await textArea1.focus();
    await page.keyboard.insertText("Hello World");
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    const textArea2=page.locator("textarea[name='text2']")
    await textArea2.focus();
    await page.keyboard.press("Control+V")    
    await expect(textArea2).toHaveValue("Hello World");
    await page.close();
})