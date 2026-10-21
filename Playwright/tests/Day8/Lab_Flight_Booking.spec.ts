import {test,expect, Locator} from "@playwright/test"
const pageUrl="https://blazedemo.com/"

test("Flight Booking",async({page})=>{
    await page.goto(pageUrl);

    const fromCity=page.locator("select[name='fromPort']");
    const toCity=page.locator("select[name='toPort']");

    await fromCity.selectOption({label:"Boston"});
    await toCity.selectOption({label:"London"});

    await page.getByRole("button",{name:'Find Flights'}).click();

    const flightTable=page.locator("table.table");
    await expect(flightTable).toBeVisible();

    const flightRows=flightTable.locator("tbody tr");
    const rowCount=await flightRows.count();
    console.log("Row Count: ",rowCount); 

    expect(rowCount).toBeGreaterThan(0);

  const toPrice = (text: string) => Number(text.replace(/[^0-9.]/g, ""));
   let minimum=await flightRows.nth(0).locator("td").nth(5).innerText();
   let lowestPriceRow:Locator=flightRows.nth(0);
    for (let index = 0; index < rowCount; index++) {
        const element = await flightRows.nth(index).locator("td").nth(5).innerText();
        if(toPrice(element)<toPrice(minimum)){
            minimum=element;    
            lowestPriceRow=flightRows.nth(index).locator("td").filter({hasText:"Choose This Flight"});        
        }
    }
   
     await lowestPriceRow.click();

       const nameField=page.getByLabel("Name",{exact:true});
    const addressField=page.getByLabel("Address");
    const cityField=page.getByLabel("City");
    const stateField=page.getByLabel("State");
    const zipCodeField=page.getByLabel("Zip Code");
    const cardTypeField=page.locator("#cardType");
    const cardNumberField=page.getByLabel("Credit Card Number");
    const expiryMonthField=page.getByLabel("Month");
    const expiryYearField=page.getByLabel("Year");
    const nameOnCardField=page.getByLabel("Name on Card");
    const findFlights=page.getByRole("button",{name:"Purchase Flight"})


for (const element of [nameField,addressField,cityField,stateField,zipCodeField,cardTypeField,cardNumberField,expiryMonthField,expiryYearField,nameOnCardField]) {
    await expect(element).toBeVisible();
    await expect(element).toBeEnabled();
}
await nameField.fill("John"); 
await addressField.fill("1403 American Beauty Ln"); 
await cityField.fill("Columbus"); 
await stateField.fill("OH"); 
await zipCodeField.fill("43240"); 
await cardTypeField.selectOption({label:"American Express"}); 
await cardNumberField.fill("6789067345231267"); 
await expiryMonthField.fill("10"); 
await expiryYearField.fill("2024"); 
await nameOnCardField.fill("John Canedy "); 
await findFlights.click();
const confirmationMessage=page.getByRole("heading",{name:"Thank you for your purchase today!"});
await expect(confirmationMessage).toBeVisible();
    await page.close();
})