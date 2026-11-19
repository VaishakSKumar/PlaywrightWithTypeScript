import {test,expect} from "@playwright/test";

const pageURL="https://sdetqa.vercel.app/autoplay";

test("Static Web Table – Functional Validations",async({page})=>{

   await page.goto(pageURL);
//   1. Count number of rows in the table → Expected: 4 
//2. Count number of columns in the table → Expected: 5 
   const table=page.locator("table").first();
   const headers=table.locator("thead th");
   const rows=table.locator("tbody tr");
   const rowsCount=await rows.count();
   const columnsCount=await headers.count();
   expect(rowsCount).toEqual(4);
   expect(columnsCount).toEqual(5)
//3. Read all data from 2nd row (index 2 → 3rd row including header) →
//  Expected: Keyboard | Electronics | $79 | 0 | Out of Stock 
   const thirdCellValue=await rows.nth(2).locator("td").allInnerTexts();
   console.log("Third Row Value:",thirdCellValue);
   expect(thirdCellValue).toEqual([ 'Keyboard', 'Electronics', '$79', '0', 'Out of Stock' ]);
   
   //4. Read all data from the table (excluding header) →
   //  Expected: 4 rows of product data 

   const tableData:string[][]=[];
   console.log("Product Name\tCategory\tPrice\tStock\tStatus")
   for (let index = 0; index < rowsCount; index++) {
      const cellValue=await rows.nth(index).locator("td").allInnerTexts();
      tableData.push(cellValue);
      console.log(`Row ${index+1} : `,cellValue);
   }
   expect(tableData).toEqual([
  [ 'Laptop', 'Electronics', '$999', '15', 'In Stock' ],
  [ 'Mouse', 'Electronics', '$29', '50', 'In Stock' ],
  [ 'Keyboard', 'Electronics', '$79', '0', 'Out of Stock' ],
  [ 'Monitor', 'Electronics', '$349', '8', 'In Stock' ]
])

//5. Print all product names → Expected: Laptop, Mouse, Keyboard, Monitor
const productNames=tableData.map(row=>row[0]);
console.log("Product Names:",productNames);
expect(productNames).toEqual([ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]);

//6. Print products where Stock = 0 → Expected: Keyboard 
const outOfStock=tableData.filter(row=>row[3]==="0").map(row=>row[0]);
console.log("Out Of Stock Product:",outOfStock);
expect(outOfStock).toEqual([ 'Keyboard' ]);

//7. Print products where Status = "In Stock" → Expected: Laptop, Mouse, Monitor 
const inStockProduct=tableData.filter(row=>row[4]==="In Stock").map(row=>row[0]);
console.log("In Stock Products:",inStockProduct);
expect(inStockProduct).toEqual([ 'Laptop', 'Mouse', 'Monitor' ]);

//8. Count number of products "In Stock" → Expected: 3 
//9. Count number of products "Out of Stock" → Expected: 1 
const inStockProductCount=inStockProduct.length;
const outOfStockProductCount=outOfStock.length;
console.log("instock Count:",inStockProductCount,"  outOfStock Count:",outOfStockProductCount);
expect(inStockProductCount).toEqual(3);
expect(outOfStockProductCount).toEqual(1);


//10.  Get price of a specific product (e.g., Mouse) → Expected: $29
const priceOfProductMouse=tableData.filter(row=>row[0]==="Mouse").map(row=>row[2]);
console.log("Price Of Mouse:",priceOfProductMouse);
expect(priceOfProductMouse[0]).toEqual('$29');



//11.  Calculate total price of all products → Expected: 999 + 29 + 79 + 349 = 1456 
const toPrice = (text: string) => Number(text.replace(/[^0-9.]/g, ""));
const totalPriceOfAllProducts=tableData.reduce((sum,row)=>sum + toPrice(row[2]),0)
console.log("Total Price Of All Products:",totalPriceOfAllProducts);
expect(totalPriceOfAllProducts).toEqual(1456)

//12.  Find product with highest price → Expected: Laptop ($999) 
const highestPriceProduct=tableData.reduce((max,row)=>toPrice(row[2])>toPrice(max[2])?row:max);
console.log("Highest Price Product:",highestPriceProduct[0]);
expect(highestPriceProduct[0]).toEqual('Laptop');

//13.  Find product with lowest price → Expected: Mouse ($29) 
const lowestPriceProduct=tableData.reduce((min,row)=>toPrice(row[2])<toPrice(min[2])?row:min);
console.log("Lowest Price Product:",lowestPriceProduct[0]);
expect(lowestPriceProduct[0]).toEqual('Mouse');

//14.  Print products with price greater than $100 → Expected: Laptop, Monitor 
const productsGreaterThan100Dollars=tableData.filter(row=>toPrice(row[2])>100).map(row=>row[0]);
console.log("Products Greater than $100:",productsGreaterThan100Dollars);
expect(productsGreaterThan100Dollars).toEqual([ 'Laptop', 'Monitor' ]);
   await page.close();
})