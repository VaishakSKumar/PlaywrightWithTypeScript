import { chromium } from "@playwright/test";

async function saveAdminData() {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
 
  await page.goto("https://sdetqa.vercel.app/login_app");
  await page.getByLabel("Username").fill("admin");
  await page.getByLabel("Password").fill("admin123");
  //await page.getByLabel("🍪 Cookie").click();
  await page.getByLabel("💾 Local").click();  
  await page.getByRole("button", { name: "Login" }).click();

await context.storageState({ path: "./Download/admin_data.json" });
  await page.locator("#dashboardView .greeting").waitFor();
  console.log("Admin state saved!");

  await browser.close();
}

async function saveUserData() {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://sdetqa.vercel.app/login_app");
  await page.getByLabel("Username").fill("testuser1");
  await page.getByLabel("Password").fill("testuser123");
  //await page.getByLabel("🍪 Cookie").click();
  await page.getByLabel("💾 Local").click();
  await page.getByRole("button", { name: "Login" }).click();

await context.storageState({ path: "./Download/user_data.json" });
  await page.locator("#dashboardView .greeting").waitFor();
  console.log("User state saved!");

  await browser.close();
}

saveAdminData();
saveUserData();