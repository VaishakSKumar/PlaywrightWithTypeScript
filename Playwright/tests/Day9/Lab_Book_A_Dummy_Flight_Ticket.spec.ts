import{test,expect,Page,Locator}from"@playwright/test"
const pageURL="https://www.dummyticket.com/dummy-ticket-for-visa-application/"

test("Lab : Book a Dummy Flight Ticket",async({page})=>{    
        await page.goto(pageURL);
        await expect(page.getByText("Dummy ticket booking"))
        .toContainText("Dummy ticket");
        const placeOrderButton=page.getByRole("button",{name:"Place order"});
        await expect(placeOrderButton).toBeVisible();  

   
        const dummyTicketVisaLocator=page.locator("#checkout-products li").filter({hasText:"Dummy ticket for Visa Application"});
         const dummyTicketVisaButton=dummyTicketVisaLocator.getByRole("radio");
        await dummyTicketVisaButton.click();
        expect(await dummyTicketVisaButton.isChecked()).toBeTruthy();
    

   
        const dateOfBirth=new Date("1995-01-15");
        const firstName=page.locator("#travname");
        const lastName=page.locator("#travlastname");
        const gender=page.locator("#sex_field");
        const maleRadioButton=gender.getByText("Male",{exact:true});
        await selectDateOfBirth(page,dateOfBirth);
        await firstName.fill("John");
        await lastName.fill("Smith");
        await maleRadioButton.click();

        await expect(firstName).toHaveValue("John");
        await expect(lastName).toHaveValue("Smith");
        await expect(maleRadioButton).toBeChecked();
   
   

    const travelType=page.locator("#traveltype_field")
    const roundTrip=travelType.getByText("Round trip",{exact:true});
    const fromCity=page.locator("#fromcity");
    const toCity=page.locator("#tocity");
    const departureOn=page.locator("#departon");
    const returnOn=page.locator("#returndate");
    const departureDate=new Date();
    departureDate.setDate(departureDate.getDate()+30);
    const returnDate=new Date(departureDate);
    returnDate.setDate(returnDate.getDate()+10);
    await roundTrip.click();
    await fromCity.fill("Hyderabad");
    await toCity.fill("London");
    await selectTravelDate(page,departureOn,departureDate);
    await selectTravelDate(page,returnOn,returnDate);


     await expect(roundTrip).toBeChecked();
     await expect(fromCity).toHaveValue("Hyderabad");
    await expect(toCity).toHaveValue("London");

   

const billingName= page.locator("#billname");
const phoneNumber=page.locator("#billing_phone");
const email=page.locator("#billing_email");
const selectCountry=page.locator("#billing_country");
const selectState=page.locator("#billing_state");
const address1=page.locator("input#billing_address_1");
const address2=page.locator("input#billing_address_2");
const city=page.locator("#billing_city");
const postalCode=page.locator("#billing_postcode");

await billingName.fill("John Smith")
await email.fill("john.smith@test.com")
await selectCountry.selectOption({label:"India"});
await address1.fill("Hitech City")
await address2.fill("Hyderabad")
await city.fill("Hyderabad")
await selectState.selectOption({label:"Telangana"});
await postalCode.fill("500081")
await phoneNumber.fill("9876543210")

 await expect(billingName).toHaveValue("John Smith");
    await expect(email).toHaveValue("john.smith@test.com");   
    await expect(selectCountry).toHaveValue("IN");
    await expect(address1).toHaveValue("Hitech City");
    await expect(address2).toHaveValue("Hyderabad");
    await expect(city).toHaveValue("Hyderabad");
    await expect(selectState).toHaveValue("TS");      
    await expect(postalCode).toHaveValue("500081");
     await expect(phoneNumber).toHaveValue("9876543210");

    const row=page.locator("table.shop_table tbody tr");
    const productName=row.locator("td.product-name div.product-details").nth(0);
    await expect(productName).toHaveText("Dummy ticket for Visa Application");
    const productPrice=row.locator("td.product-total").nth(0);
    await expect(productPrice).toHaveText("₹1,200");

    await expect(placeOrderButton).toBeEnabled();
    await placeOrderButton.click();

    await expect(page).toHaveTitle("Payment Page")
    
    await page.close();
    })
 

 async function selectDate(page:Page,dateInputSelector:Locator,targetDate:Date){
        await dateInputSelector.click();
        const targetYear=targetDate.getFullYear().toString();
        const targetMonth=targetDate.getMonth().toString();        
        const targetDay=targetDate.getDate().toString();

        await page.locator(".ui-datepicker-month").selectOption(targetMonth);
        await page.locator(".ui-datepicker-year").selectOption(targetYear);
        await page.locator(".ui-datepicker-calendar td a",{hasText:targetDay}).first().click();
    }
async function selectDateOfBirth(page:Page,dateOfBirth:Date){
    const dob=page.locator("#dob");
    await selectDate(page,dob,dateOfBirth);
}

async function selectTravelDate(page:Page,dateInputSelector:Locator,travelDate:Date){
   await selectDate(page,dateInputSelector,travelDate)
}
