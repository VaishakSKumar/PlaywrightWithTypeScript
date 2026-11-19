import {test,expect} from "@playwright/test";

const pageURL="https://sdetqa.vercel.app/autoplay"

test.describe("Dynamic Web Tables Test Cases",()=>{

    test.beforeEach(async({page})=>{
        await page.goto(pageURL);
        await expect(page.getByText("AutoPlay")).toContainText("AutoPlay")
    })

    test("Test Case 1: Chrome CPU Load Validation",async({page})=>{

       // 2. Verify the task table is displayed.
       const dynamicTable=page.locator("#taskTable");
       await expect(dynamicTable).toBeVisible();

       //3. Verify table contains multiple rows. 
       const dynamicTableRows=await dynamicTable.locator("tbody tr").all();
       expect(dynamicTableRows.length).toBeGreaterThan(0);
        let cpuLoad='';
       //4. Verify each row has process name column.
       for (let dynamicTableRow of dynamicTableRows) {
            const rowValue=await dynamicTableRow.locator("td").nth(0).innerText();
             
            //5. Identify the row where process name = Chrome. 
            if (rowValue==="Chrome") {
               // 6. Extract CPU load value (should contain %). 
               // 7. Verify CPU load value is not empty. 
                cpuLoad=await dynamicTableRow.locator("td",{hasText:'%'}).innerText();
                const expectedCpuLoad=await page.locator("strong.chrome-cpu").innerText();
                expect(cpuLoad).toEqual(expectedCpuLoad);
                break;
            }
       }

     //  8. Verify red label (strong.chrome-cpu) is visible.
       const label=page.locator("strong.chrome-cpu");
       await expect(label).toBeVisible();

//9. Verify red label value matches the extracted CPU load. 
        expect(await label.innerText()).toEqual(cpuLoad);

//10.  Verify only one Chrome row exists (or handle multiple correctly).
       expect(cpuLoad).not.toBe('');
    })


    test("Test Case 2: Firefox Memory Usage Validation",async({page})=>{
  
    
  // 2. Verify the task table is present.
       const dynamicTable=page.locator("#taskTable");
       await expect(dynamicTable).toBeVisible();
       const dynamicTableRows=await dynamicTable.locator("tbody tr").all();
        let memoryValue='';

       for (let dynamicTableRow of dynamicTableRows) {
            const rowValue=await dynamicTableRow.locator("td").nth(0).innerText();
       
            //3. Identify the row where process name = Firefox. 
            if (rowValue==="Firefox") {
               // 4. Extract memory value ending with MB. 
//5. Verify extracted value matches pattern (e.g., \d+ MB). 
                memoryValue=await dynamicTableRow.locator("td",{hasText:/MB$/}).innerText();
                const expectedMemoryValue=await page.locator("strong.firefox-memory").innerText();
                expect(memoryValue).toEqual(expectedMemoryValue);
                break;
            }
       }
//6. Verify memory value is not empty.
       expect(memoryValue).not.toBe('');
       //7. Verify blue label (strong.firefox-memory) is visible. 
       const label=page.locator("strong.firefox-memory");
       await expect(label).toBeVisible();
       //8. Compare extracted memory with label value.
       expect(await label.innerText()).toEqual(memoryValue);
       
    })

 test("Test Case 3: : Chrome Network Speed Validation",async({page})=>{

//1. Verify table is loaded. 
       const dynamicTable=page.locator("#taskTable");
       await expect(dynamicTable).toBeVisible();
       const dynamicTableRows=await dynamicTable.locator("tbody tr").all();
       expect(dynamicTableRows.length).toBeGreaterThan(0);
        let networkSpeed='';
       for (let dynamicTableRow of dynamicTableRows) {
            const rowValue=await dynamicTableRow.locator("td").nth(0).innerText();
            //2. Find row with process name = Chrome. 
            if (rowValue==="Chrome") {
               //3. Extract network speed value (should contain Mbps). 
               // 4. Verify value format (e.g., \d+ Mbps). 
                networkSpeed=await dynamicTableRow.locator("td",{hasText:/Mbps$/}).innerText();
                const expectedNetworkSpeed=await page.locator("strong.chrome-network").innerText();
                expect(networkSpeed).toEqual(expectedNetworkSpeed);
                break;
            }
       }

     //6. Verify orange label (strong.chrome-network) is visible. 
       const label=page.locator("strong.chrome-network");
       await expect(label).toBeVisible();

//7. Compare extracted value with label value. 
        expect(label).toContainText(networkSpeed);

//  5. Ensure extracted value is not empty.
       expect(networkSpeed).not.toBe('');

//8. Validate behavior if multiple "Mbps" values exist in row.
expect(networkSpeed).toContain('Mbps');       
    })


    test("Test Case 4: Firefox Disk Space Validation",async({page})=>{
//      1. Verify table is displayed.
        const dynamicTable=page.locator("#taskTable");
       await expect(dynamicTable).toBeVisible();
       const dynamicTableRows=await dynamicTable.locator("tbody tr").all();
        let diskSpace='';

       for (let dynamicTableRow of dynamicTableRows) {
            const rowValue=await dynamicTableRow.locator("td").nth(0).innerText();            
            //2. Locate row with process name = Firefox. 
            if (rowValue==="Firefox") {
               // 3. Extract disk value containing MB/s. 
                diskSpace=await dynamicTableRow.locator("td",{hasText:/MB\/s$/}).innerText();
                const expectedMemoryValue=await page.locator("strong.firefox-disk").innerText();
                expect(diskSpace).toEqual(expectedMemoryValue);
                break;
            }
        }
       
            const label=page.locator("strong.firefox-disk");
            await expect(label).toBeVisible();

//    7. Compare extracted disk value with label.
            await expect(label).toContainText(diskSpace);

//    8. Validate correct column is selected (not confused with memory). 
    expect(diskSpace).not.toBe('');
        })


    test.afterEach(async({page})=>{
        await page.close();
    })
})