import { test ,expect ,Locator } from "@playwright/test";

test("Verify Playwright Locators",async({page})=>{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")
    
    //1.getByRole()
    const freePlanRadioButton=page.getByRole("radio",{name:"Free Plan"})
    await expect(freePlanRadioButton).toBeVisible();
    await freePlanRadioButton.click()

    //2.getByText()
    const bananaText:Locator=page.getByText("Banana");
    await expect(bananaText).toContainText("Bana");

    //3.getByLabel()
    const confirmPasswordLabel=page.getByLabel("Confirm Password");
    await expect(confirmPasswordLabel).toBeVisible()
    await confirmPasswordLabel.fill("Jhfpk9693n@")

    //4.getByPlaceHolder
    const zipCode:Locator=page.getByPlaceholder("ZIP / Postal code")
    await expect(zipCode).toBeVisible();
    await zipCode.fill("641030");

    //5.getByTestId
    const addToCartPro:Locator=page.getByTestId("add-to-cart-pro")
    await expect(addToCartPro).toBeVisible();
    await expect(addToCartPro).toBeEnabled();

    //6.getByTitle
    const failedTitle:Locator=page.getByTitle("Tests failed today")
    await expect(failedTitle).toBeVisible();
    await expect(failedTitle).toContainText("217");

    //7.getByAltText
    const puppyOnBoatImage:Locator=page.getByAltText("Puppy on a boat")
    await expect(puppyOnBoatImage).toBeVisible();   

})