import{test,expect} from "@playwright/test";

test("Page Nation Table",async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    
    const table=page.locator("table#example");
    
    const tableRows=table.locator("tbody tr");
    const nextButton=page.getByRole("link",{name:"Next"});
    let hasNextPage=true;
    let pageCount = 1;
    let pageDataFormat='';
    while (hasNextPage) {
        console.log(`Page Count-----${pageCount}`)
        await tableRows.first().waitFor({state:'visible'});
        const rows=await tableRows.all();        
        for (const row of rows) {            
            const cellValue=await row.locator("td").allInnerTexts();    
              if (cellValue.length>0) {
                pageDataFormat+=cellValue.join(',')+'\n';
            }              
        }

        if (await nextButton.isVisible()&&await nextButton.isEnabled()) {
            await nextButton.click();
            pageCount++;
            await page.waitForTimeout(1000);
        }else{
            hasNextPage=false;
            console.log("Reached Last Page");
        }
    }
    await page.close();
})