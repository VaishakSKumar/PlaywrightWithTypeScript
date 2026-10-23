import { test,expect, Locator, Page  } from "@playwright/test";
const pageURL="https://www.booking.com/";

test("Verify Date Selection on Booking.com Search",async({page})=>{
    await page.goto(pageURL);

    const signInBanner=page.locator("div[role='dialog']");
    await expect(signInBanner).toBeVisible();
    await signInBanner.getByRole("button").click();
    await expect(signInBanner).not.toBeVisible();
    const city="Chennai";
    const whereAreYouGoingSearchBox=page.locator("#searchbox-horizontal-destination-input");
    await expect(whereAreYouGoingSearchBox).toBeVisible();
    await whereAreYouGoingSearchBox.fill(city);
    const autoSuggestionsDropdown=page.locator("#autocomplete-results li div").getByTestId("autocomplete-result");
    const suggestionsResult=autoSuggestionsDropdown.locator("div").filter({hasText:"Chennai"}).first();
    await suggestionsResult.click(); 
    expect(page.getByTestId("searchbox-dates-container").isVisible()).toBeTruthy();
    if (!await page.getByTestId("searchbox-dates-container").isVisible()) {
         await page.getByTestId("searchbox-dates-container").click();
    }   
    await expect(whereAreYouGoingSearchBox).toHaveValue("Chennai, India")
    const checkIn={month:"October",year:"2026",day:"26"}
    const checkOut={month:"December",year:"2026",day:"30"}
    await selectDate(page,checkIn.month,checkIn.year,checkIn.day)
    await selectDate(page,checkOut.month,checkOut.year,checkOut.day)
    const dateInputValue = await page.getByTestId('searchbox-dates-container').innerText();
    expect(dateInputValue).toContain(checkIn.month.substring(0,3));
    expect(dateInputValue).toContain(checkOut.month.substring(0,3));
    await page.close();
})

 async function selectDate(page:Page,targetMonth:string,targetYear:string,targetDate:string) {
    const nextMonthButton=page.getByRole("button",{name:"Next month"});
    const targetLabelSubstring=`${targetMonth} ${targetDate}, ${targetYear}`;
    for (let index = 0; index < 12; index++) {
        const dateToBeClicked = page.locator(`[aria-label*="${targetLabelSubstring}"]`).first();
        if (await dateToBeClicked.isVisible()) {
            await dateToBeClicked.click();
            return;
        }
        if (await nextMonthButton.isVisible()) {
            await nextMonthButton.click();
            continue;
        }
        console.log(`Invalid Date ${targetLabelSubstring}`)
    }
}
