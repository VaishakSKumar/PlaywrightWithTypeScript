import { expect, test } from "@playwright/test";

test.describe("Popups",()=>{
  
test.beforeEach(async({page})=>{
  await page.goto("https://sdetqa.vercel.app/autoplay");
})

test("New tab",async({context,page})=>{   

const [newTab]=await Promise.all(
  [
  context.waitForEvent('page'),
  page.getByRole("button").filter({hasText:"New Tab"}).click()
  ]
) 
const title=await newTab.title()
console.log("Title of the Page:",title);

  expect(newTab.url()).toContain("playwright");
})

test("New Window",async({context,page})=>{   

const [newWindowPage]=await Promise.all(
  [
  context.waitForEvent('page'),
  page.getByRole("button").filter({hasText:"New Window"}).click()
  ]
) 
await page.waitForTimeout(2000);
const title=await newWindowPage.title()
  console.log("Title of the Page:",title);
  expect(newWindowPage.url()).toContain("playwright");
})

test("Single File Upload",async({page})=>{
  const filePathChooseFile= page.locator("#singleFileInput");
  const filePath="C:/Users/nivet/Git/PlaywrightWithTypeScript/Playwright/tests/Day11/testdata/users.json"
  await filePathChooseFile.setInputFiles(filePath);
  await page.getByRole("button").filter({hasText:"Upload Single File"}).click();
  const expectedTest=page.locator("#singleFileStatus");
  await page.waitForTimeout(5000);
  expect(expectedTest).toHaveText(/users.json/);  
})

test("Multiple File Upload",async({page})=>{
  const filePathChooseFile= page.locator("#multipleFilesInput");  
  await filePathChooseFile.setInputFiles(["C:/Users/nivet/Git/PlaywrightWithTypeScript/Playwright/tests/Day11/testdata/users.json",
    "C:/Users/nivet/Git/PlaywrightWithTypeScript/Playwright/tests/Day11/testdata/simple.txt"
  ]);
  
  await page.getByRole("button").filter({hasText:"Upload Multiple File"}).click();
  const expectedTest=page.locator("#multipleFilesStatus");
  await page.waitForTimeout(5000);
  expect(expectedTest).toHaveText(/users.json/);  
  expect(expectedTest).toHaveText(/simple.txt/); 
})


test.afterEach(async({context})=>{
  await context.close();
})

})

