import { test,expect,Page } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx"

const jsonFile=path.join(__dirname, "../../../Download/FD-jsonData.json");
const jsonData=JSON.parse(fs.readFileSync(jsonFile,"utf-8"));

const csvFile=path.join(__dirname, "../../../Download/FD-Calculator-CSV.csv");
const csvFileContent=fs.readFileSync(csvFile,"utf-8");
const csvData: any[] = parse(csvFileContent, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
  trim: true,
});

const xlsxFile=path.join(__dirname, "../../../Download/FD-Calculator-XLSX.xlsx");
const workBook=XLSX.readFile(xlsxFile);
const sheetName=workBook.SheetNames[0];
const sheets=workBook.Sheets[sheetName];

const xlsxData:any[]=XLSX.utils.sheet_to_json(sheets);

function toValue(value:string|number) {
   return typeof value === "number"
    ? `\u20B9 ${value.toLocaleString("en-IN")}` 
    : value;
}

async function fdCalculator(page:Page,data:any) {
    await page.locator("#principalNumber").fill(data.principal.toString());
    await page.locator("#rateNumber").fill(data.rate.toString());
    if (data.periodType==="Years") {
       await page.getByRole("button",{name:"Years"}).click(); 
    } else {
      await page.getByRole("button",{name:"Months"}).click(); 
    }
    await page.locator("#tenureNumber").fill(data.period.toString());
    await page.locator("#compounding").selectOption(data.frequency);
    await expect(page.locator("#maturityValue")).toHaveText(toValue(data.maturityValue));
}


test.describe("FD Calculator",()=>{
    for (const data of jsonData) {    
        test(`FD Data for ${data.principal} ,${data.rate} ,${data.period} IN JSON`,async({page})=>{
            await page.goto("https://sdetqa.vercel.app/fd-calculator")
            await fdCalculator(page,data)
            await page.close()
        })       
    }    

     for (const data of xlsxData) {    
        test(`FD Data for ${data.principal} ,${data.rate} ,${data.period} IN XLSX`,async({page})=>{
            await page.goto("https://sdetqa.vercel.app/fd-calculator")
            await fdCalculator(page,data)
            await page.close()
        })       
    }

    for (const data of csvData) {    
        test(`FD Data for ${data.principal} ,${data.rate} ,${data.period} In CSV`,async({page})=>{
            await page.goto("https://sdetqa.vercel.app/fd-calculator")
            await fdCalculator(page,data)
            await page.close()
        })       
   }
 })