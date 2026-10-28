import { expect, test } from "@playwright/test";

test("Drag and Drop In Bank And Sales",async({page})=>{
    await page.goto("https://demo.guru99.com/test/drag_drop.html");
    await page.waitForLoadState('load');
     const fiveThousand=page.locator("#products li").filter({hasText:"5000"}).nth(1);
    const bankDebtSide=page.locator("#products li").filter({hasText:"BANK"});
    const debtSideAccountColumn=page.locator("#bank");
    const debtSideAmountColumn=page.locator("#amt7");
    await bankDebtSide.focus();
    await bankDebtSide.dragTo(debtSideAccountColumn);
    await fiveThousand.focus();
    await fiveThousand.dragTo(debtSideAmountColumn);
    await page.waitForTimeout(2000);
    const salesCreditSide=page.locator("#products li").filter({hasText:"SALES"});
    const creditSideAccountColumn=page.locator("#loan");
    const creditSideAmountColumn=page.locator("#amt8");
    await salesCreditSide.focus();
    await salesCreditSide.dragTo(creditSideAccountColumn);
    await fiveThousand.focus();
    await fiveThousand.dragTo(creditSideAmountColumn);

    const result=await page.locator(".table4_result a").innerText();
    expect(result).toContain("Perfect");
    await page.close();
})
