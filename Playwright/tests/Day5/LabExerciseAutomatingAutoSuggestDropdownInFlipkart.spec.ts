import {test,expect } from "@playwright/test";

test("Automating Auto-Suggest Dropdown in Flipkart ",async({page})=>{

    await page.goto("https://www.flipkart.com/")
    const closePopup=page.locator("span[role='button']");
    await closePopup.click();
    const searchBox=page.locator("form input[placeholder*='Search']");
    await expect(searchBox).toBeVisible();
    await searchBox.fill("smart");
    await page.waitForTimeout(2000);
    const autoSuggestion=page.locator("form ul>li");
    await expect(autoSuggestion.first()).toBeVisible();
    const autoSuggestionCount=await autoSuggestion.count();
    console.log("Total Auto Suggestion Count:",autoSuggestionCount);   
    const autoSuggestionFifthElement=await autoSuggestion.nth(4).innerText();
    if (autoSuggestionCount >= 5) {
    console.log("Auto Suggestion Fifth Element:", await autoSuggestion.nth(4).innerText());
  } else {
    console.log("Fewer than 5 suggestions - no 5th element");
  } 
    console.log("AutoSuggestion Elements:")   
    for (let index = 0; index < autoSuggestionCount; index++) {
        const element = await autoSuggestion.nth(index).innerText();        
        console.log(element);           
    }
    let optionFound = false;
    for (let index = 0; autoSuggestionCount; index++) {
        const suggestionIteration = autoSuggestion.nth(index);
        const suggestionText=await suggestionIteration.innerText();
        if (suggestionText==="smartphone") {
            await suggestionIteration.click();
            optionFound=true;
            break;
        }
    }
    expect(optionFound).toBe(true);
    await expect(searchBox).toHaveValue("smartphone");
    await expect(page).toHaveURL(/smartphone/i);

})
test.afterAll(async({page})=>{
    await page.close();
}) 