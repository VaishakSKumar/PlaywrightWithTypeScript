import{test,expect} from "@playwright/test"

const pageURL="https://sdetqa.vercel.app/autoplay.html"

test.describe("DropdownsValidation",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageURL);
    await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
    await expect(page.getByText("AutoPlay")).toHaveText("AutoPlay");
})

test("1. Single Select Dropdown",async({page})=>{
        const countryDropdown=page.locator("#country");
        await expect(countryDropdown).toBeVisible();

        await expect(countryDropdown).toHaveValue("india");

        await countryDropdown.selectOption({label:"USA"});
        await countryDropdown.selectOption({value:"uk"});
        await countryDropdown.selectOption({index:3});
        await countryDropdown.selectOption({label:"France",value:"france"});

        const countryDropdownCount=countryDropdown.locator("option");
        await expect(countryDropdownCount).toHaveCount(5);

        const countries=await countryDropdownCount.allTextContents();
        expect(countries).toContain("Germany");
        
        console.log("Option Dropdowns:");    
        for (const country of countries) {
            console.log(country);            
        }
})

test("2. Multi Select Dropdown",async({page})=>{
const colorDropDown=page.locator("#colors");
        await expect(colorDropDown).toBeVisible();

        await expect(colorDropDown).toHaveValue("blue");

        await colorDropDown.selectOption([{label:"Red"},{label:"Green"},{label:"Yellow"}]);
        await colorDropDown.selectOption([{value:"red"},{value:"green"},{value:"yellow"}]);
        await colorDropDown.selectOption([{index:0},{index:2},{index:3}]);
      
        await expect(colorDropDown).toHaveValues(["red","green","yellow"]);
})

test("3.Sorted Dropdown Validation",async({page})=>{
    const sortedDropdown=page.locator("#sorted");
    //const sortedDropdown=page.locator("#colors");
        await expect(sortedDropdown).toBeVisible();

    const sortedDropDownValues=sortedDropdown.locator("option");
    const allSortedDropDownValues=await sortedDropDownValues.allTextContents();
    for (let dropDownValue of allSortedDropDownValues) {
       console.log(dropDownValue);
    }
    const orginalList=allSortedDropDownValues
    const sortedCopy=[...allSortedDropDownValues].sort()
    console.log(orginalList)
    console.log(sortedCopy);
    expect(orginalList).toEqual(sortedCopy);
})

test.afterEach(async({page})=>{
   await page.close();
})

})