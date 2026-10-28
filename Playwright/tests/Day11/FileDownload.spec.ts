import {test,expect, chromium, devices} from "@playwright/test";
import fs from "fs";
import path from "path";

test("File Download",async({page})=>{
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const filePath="Download";
    const [downloadButton]=await Promise.all(
        [
            page.waitForEvent("download"),
            page.getByRole("button").filter({hasText:"Download File"}).click()
        ]
    )
    const downloadPath = path.join("Download", downloadButton.suggestedFilename());
    await downloadButton.saveAs(downloadPath);
    const fileExist=fs.existsSync(downloadPath);
    expect(fileExist).toBeTruthy();
    await page.waitForTimeout(5000);
    await page.close();
})


test("File Open PDF",async({page})=>{
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const filePath="Download";
    const [pdfPage]=await Promise.all(
        [
            page.context().waitForEvent("page"),
            page.getByRole("button").filter({hasText:"Open PDF"}).click()
        ]
    )
    expect(pdfPage).toBeTruthy();
    
        await page.waitForTimeout(5000) 
        await page.close();
    }   

)

test("File Open PDF Browser Context With Emulator",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext({...devices['iPhone 15']});
    const page=await context.newPage();
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const filePath="Download";
    const [pdfPage]=await Promise.all(
        [
            page.context().waitForEvent("page"),
            page.getByRole("button").filter({hasText:"Open PDF"}).click()
        ]
    )
    expect(pdfPage).toBeTruthy();
    
        await page.waitForTimeout(5000) 
        await page.close();
    } )