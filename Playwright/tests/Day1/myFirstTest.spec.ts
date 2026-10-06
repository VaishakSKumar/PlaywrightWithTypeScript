import { test,expect } from "@playwright/test";

// test("Verify The Title Of the Page",async({page})=>{

//     await page.goto("https://demowebshop.tricentis.com/");
//     await expect(page).toHaveTitle("Demo Web Shop")

// })

test('Verify Title Image and Body Text', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Welcome to our store');
});