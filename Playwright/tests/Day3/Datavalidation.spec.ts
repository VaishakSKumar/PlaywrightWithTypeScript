import{test,expect} from "@playwright/test"

const pageURl="https://sdetqa.vercel.app/autoplay";

test.describe("Data Validation Testcase",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageURl);
    await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");
})

test("1. Page Load Validation",async({page})=>{
     await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");
     const autoPlay=page.getByText("AutoPlay");
     expect(autoPlay).toBeVisible;
})

test("2. Input Fields Validation ",async({page})=>{
    const fullName=page.getByLabel("Full name");
    const email=page.getByLabel("Email");
    const phoneField=page.getByLabel("Phone");
    const address=page.getByLabel("Address");
    
    await expect(fullName).toBeVisible();
    await expect(fullName).toBeEnabled();
    await expect(fullName).toHaveAttribute("maxlength","15");
    fullName.fill("John Canedy")
    await expect(fullName).toHaveValue("John Canedy");

    await expect(email).toBeVisible();
    email.fill("tester@example.com")
    await expect(email).toHaveValue("tester@example.com");

    await expect(phoneField).toBeVisible();
    phoneField.fill("+91 1234567898")
    await expect(phoneField).toHaveValue("+91 1234567898");

    await expect(address).toBeVisible();
    address.fill("3/101 \n Gandhinagar \n Vellakinar \n Coimbatore-29")
    await expect(address).toHaveValue("3/101 \n Gandhinagar \n Vellakinar \n Coimbatore-29")
})

test("3. Radio Button (Gender) Validation",async ({page}) => {
    const maleRadioButton=page.getByRole('radio', { name: 'Male', exact: true });
    const femaleRadioButton=page.getByRole('radio', { name: 'Female', exact: true });

    await expect(maleRadioButton).toBeVisible();
    await expect(femaleRadioButton).toBeVisible();
    femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();
    await expect(maleRadioButton).not.toBeChecked();
})

test("4. Checkbox (Days) Validation",async({page})=>{
    const sunCheckBox=page.getByLabel("Sun");
    sunCheckBox.check()
    await expect(sunCheckBox).toBeChecked();

    const allDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const allCheckboxes=allDays.map((day)=>{
        return page.getByLabel(day);
    }) 

    // for (const checkBox of allCheckboxes) {
    //     await checkBox.check();
    //     await expect(checkBox).toBeChecked();
    // }

    for (const day of allDays) {
        const checkBox=page.getByLabel(day);
        await checkBox.check();
        await expect(checkBox).toBeChecked();
    }

    for (const day of ["Fri","Sat","Sun"]) {
        const checkBox=page.getByLabel(day);
        await checkBox.uncheck();
        await expect(checkBox).not.toBeChecked();
    } 

    for (const checkBox of allCheckboxes) {
        if (await checkBox.isChecked()) {
            await checkBox.uncheck()
            await expect(checkBox).not.toBeChecked();
        }else{
            await checkBox.check()
            await expect(checkBox).toBeChecked();
        }
    }

    const indexes=[1,3,6];
    for (const i of indexes) {
        await allCheckboxes[i].check();
        await expect(allCheckboxes[i]).toBeChecked();
    }

    const fridayCheckBox=page.getByLabel("Fri");
    fridayCheckBox.check()
    await expect(fridayCheckBox).toBeChecked();

})

test("5. Submit Button Validation",async({page})=>{
    const submitButton=page.getByRole("button",{name:"Submit"}).first();
    await expect(submitButton).toBeVisible();
    const fullName=page.getByLabel("Full name");
    const email=page.getByLabel("Email");
    const phoneField=page.getByLabel("Phone");
    const address=page.getByLabel("Address");
    await fullName.fill("John Canedy")
    await email.fill("tester@example.com")
    await phoneField.fill("+91 1234567898")
    await address.fill("3/101 \n Gandhinagar \n Vellakinar \n Coimbatore-29")
    await submitButton.click();
    await expect(submitButton).toBeEnabled()
})

test("6. Additional (Recommended) Test Cases",async({page})=>{
    const submitButton=page.getByRole("button",{name:"Submit"}).first();
    const errorMessage=page.locator(".error-message")
    const fullName=page.getByLabel("Full name");
    const email=page.getByLabel("Email");
    const phoneField=page.getByLabel("Phone");
    const address=page.getByLabel("Address");
    await fullName.fill("")
    await email.fill("")
    await phoneField.fill("")
    await address.fill("")
    await submitButton.click();
    await expect(errorMessage).toBeVisible();    
    await expect(errorMessage).toContainText("Please fix the following:")

    await page.reload();
    await email.fill("tester.com")
    await submitButton.click();
    await expect(errorMessage).toContainText("Please enter a valid email address.")

    await page.reload();
    await fullName.fill("ABCD0123456789EFG")
    await submitButton.click();
    await expect(fullName).toHaveValue("ABCD0123456789E")
    await expect(fullName).toHaveValue(/.{15}/)

    await page.reload();
    await phoneField.fill("ABCD1458796352EFGHT")
    await submitButton.click();
    await expect(phoneField).toHaveValue(/^\d+$/)
})

test.afterEach(async({page})=>{
   await page.close();
})
})