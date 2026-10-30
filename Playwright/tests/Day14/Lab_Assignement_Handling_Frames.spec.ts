import { test,expect } from "@playwright/test";

const pageURL="https://ui.vision/demo/webtest/frames/";

test.describe("Frame test",()=>{
   
   test.beforeEach(async({page})=>{
        await page.goto(pageURL);
   })
   
   test("Verify Frame 1 input field ",async({page})=>{
        const frame1InputField=page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
        await frame1InputField.fill("Welcome");
        expect(frame1InputField).toHaveValue("Welcome");    
    })
    

     test("Verify Frame 2 input field ",async({page})=>{
        const frame2InputField=page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']")
        await frame2InputField.fill("Suneel");
        expect(frame2InputField).toHaveValue("Suneel");    
    })

     test("Verify Frame 3 parent frame textbox  ",async({page})=>{
        const frame3InputField=page.frameLocator("frame[src='frame_3.html']").locator("input[name='mytext3']")
        await frame3InputField.fill("You are in Frame 3 - Tea");
        expect(frame3InputField).toHaveValue("You are in Frame 3 - Tea");    
    })

     test("Access nested iframe inside Frame 3",async({page})=>{
        const frame3NestedFrame=page.frameLocator("frame[src='frame_3.html']").locator("iframe").contentFrame();
        expect(frame3NestedFrame).toBeTruthy();    
    })

     test("Select radio button inside nested frame",async({page})=>{
        const frame3NestedFrame=page.frameLocator("frame[src='frame_3.html']").locator("iframe").contentFrame()
        const radioButton1= frame3NestedFrame.getByRole("radio",{name:"Hi, I am the UI.Vision IDE"});
        await radioButton1.check();
        await expect(radioButton1).toBeChecked();    
    })

     test("Select checkbox inside nested frame",async({page})=>{
        const frame3NestedFrame=page.frameLocator("frame[src='frame_3.html']").locator("iframe").contentFrame()
        const checkBoxButton= frame3NestedFrame.getByRole("checkbox",{name:"Form Autofilling"});
        await checkBoxButton.check();
        await expect(checkBoxButton).toBeChecked();    
    })


      test("Navigate to next page of Google Form ",async({page})=>{
        const frame3NestedFrame=page.frameLocator("frame[src='frame_3.html']").locator("iframe").contentFrame()
        const nextButton= frame3NestedFrame.getByRole("button",{name:"Next"});
        await nextButton.click();
        const newPage=frame3NestedFrame.getByText("Some text boxes")
        await expect(newPage).toBeVisible();
    })

     test("Fill Short and Long Answer",async({page})=>{
        const frame3NestedFrame=page.frameLocator("frame[src='frame_3.html']").locator("iframe").contentFrame()
        const nextButton= frame3NestedFrame.getByRole("button",{name:"Next"});
        await nextButton.click();
        const newPageShortAnswer=frame3NestedFrame.locator("input[type='text']")
        await newPageShortAnswer.fill("We are here")        
        expect(newPageShortAnswer).toHaveValue("We are here");
        const newPageLongAnswer=frame3NestedFrame.locator("textarea")
        await newPageLongAnswer.fill("We are able to access all element in child frame")        
        expect(newPageLongAnswer).toHaveValue("We are able to access all element in child frame");
         const submitButton=frame3NestedFrame.getByRole("button",{name:"Submit"})
         await submitButton.click();
         const message=frame3NestedFrame.locator(".vHW8K")
         expect(await message.innerText()).toContain("Thank you for testing the UI.Vision")
       })


     test("Verify Frame 4 textbox",async({page})=>{
        const frame4InputField=page.frameLocator("frame[src='frame_4.html']").locator("input[name='mytext4']")
        await frame4InputField.fill("Frame 4 Text");
        expect(frame4InputField).toHaveValue("Frame 4 Text");    
    })

       test("Verify Frame 5 textbox",async({page})=>{
        const frame5InputField=page.frameLocator("frame[src='frame_5.html']").locator("input[name='mytext5']")
        await frame5InputField.fill("playwright");
        expect(frame5InputField).toHaveValue("playwright");    
    })

     test("Verify logo inside Frame 5",async({page})=>{
        const frame5LinkField=page.frameLocator("frame[src='frame_5.html']").locator("a")
        await frame5LinkField.click();
        await expect(frame5LinkField.getByAltText("Ui.Vision by a9t9 software - Image-Driven Automation")).toBeVisible();  
    })

    test.afterEach(async({page})=>{
     await page.close();
    })
})