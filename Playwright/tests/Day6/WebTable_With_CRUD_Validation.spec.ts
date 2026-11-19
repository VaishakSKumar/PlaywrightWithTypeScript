import {test,expect} from "@playwright/test"
const pageURL="https://sdetqa.vercel.app/autoplay"

test("Web Table with CRUD Validation",async({page})=>{
   // 1. Open the CRUD Web Table page. 
  //  The page opens successfully and the Web Table with CRUD section is displayed.

  await page.goto(pageURL);
  const crudTable=page.locator("#dynamicTable");
  await expect(crudTable).toBeVisible();

//2. Verify the CRUD table is displayed.
// The table is visible with the headers #, Name, Role, Action. 
        const crudHeaders=await crudTable.locator("thead th").allInnerTexts();
        console.log(`CRUD Table Headers:${crudHeaders}`);
        expect(crudHeaders).toEqual([ '#', 'Name', 'Role', 'Action' ]);


//3. Verify the input fields and buttons.
//  Name, Role, Add, + Dynamic, and Search fields are visible and enabled. 
const nameField=page.getByPlaceholder("Name");
const roleField=page.getByPlaceholder("Role");
const addField=page.getByRole("button",{name:"Add"});
const dynamicField=page.getByRole("button",{name:" + Dynamic"});
const searchField=page.getByPlaceholder("Search table...");

for (const element of [nameField,roleField,addField,dynamicField,searchField]) {
    await expect(element).toBeEnabled();
    await expect(element).toBeVisible();
}

//4. Verify the default table data.
// The table contains two records: Alice and Bob.
const tabledata=[];
const crudRows=crudTable.locator("tbody tr");
const crudData=await crudRows.locator("td").allInnerTexts();
const crudCount=await crudRows.count();
expect(crudRows).toHaveCount(2);
for (let index = 0; index < crudCount; index++) {
    const cellValue=await crudRows.nth(index).locator("td").allInnerTexts();
    tabledata.push(cellValue);
    console.log("The Data are: ",cellValue);
}
 expect(tabledata[0]).toContain("Alice");
 expect(tabledata[1]).toContain("Bob");

//5. Enter Sam Tester as Name and QA Lead as Role. Click Add. 
// A new row for Sam Tester with role QA Lead is added to the table.

await nameField.fill("Sam Tester");
await roleField.fill("QA Lead");
await addField.click();
await page.waitForTimeout(2000);
const samTesterRow=await crudRows.nth(2).locator("td").allInnerTexts();
expect(samTesterRow).toContain("Sam Tester");
expect(samTesterRow).toContain("QA Lead");


//6. Verify the total number of rows.
// The table now contains 3 rows.
expect(crudRows).toHaveCount(3);

//7. Search for Alice in the search box.
// Only the Alice record is visible, and other rows are hidden. 
await searchField.fill("Alice")
const aliceRow=crudRows.nth(0).locator("td").allInnerTexts();
const visibleRows=crudRows.filter({visible:true});
await expect(visibleRows).toHaveCount(1);
await expect(visibleRows.first()).toContainText("Alice")


//8. Clear the search box.
// All table rows become visible again
await searchField.clear();
await expect(visibleRows).toHaveCount(3);

//9. Delete the Bob record by clicking Delete and accept the confirmation dialog. 
// The Bob record is removed from the table and the total row count decreases to 2.
const bobRow=crudRows.filter({ hasText: "Bob" });
page.once("dialog", (d) => d.accept());                      
await bobRow.getByRole("button", { name: "Delete" }).click(); 
await expect(bobRow).toHaveCount(0);
await expect(visibleRows).toHaveCount(2);

//10. Click the + Dynamic button.
//  A new dynamic record is added to the table with values such as New and Dev, confirming the button works successfully. 
  await dynamicField.click();
  await expect(crudRows.last()).toContainText("New")
 await expect(crudRows.last()).toContainText("Dev")
await page.close();
})