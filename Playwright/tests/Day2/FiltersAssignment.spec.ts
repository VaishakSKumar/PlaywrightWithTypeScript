import { test, expect } from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto("https://sdetqa.vercel.app/filters_practice")
    }
)

test.afterEach(async ({page}) => {
    await page.close();
})

/*
Title  
1 Verify "Add to cart" for Product 2 

Steps
1. Open the page
2. Locate "Product 2"
3. Find "Add to cart" button

Expected Result
"Add to cart" button should be
visible
*/


test("1. Verify Add to cart for Product 2",async({page})=>{
    const product2=page.getByRole('listitem')
    .filter({hasText:"Product 2"});

    const addToCartButtonOfProduct2=product2.getByRole("button",{name:"Add to cart"});

    await expect(addToCartButtonOfProduct2).toBeVisible();
})

/*
Title  
2. Count items not having "Out of
stock"

Steps
1. Open the page
2. Go to product list
3. Filter items without "Out of
stock"

Expected Result
3 items should be displayed
*/
test("2. Count items not having Out of stock",async({page})=>{
    const notOutOfStock=page.locator(".card").nth(1)
    .getByRole("listitem")
    .filter({hasNotText:'Out of stock'});

    await expect(notOutOfStock).toHaveCount(3);
})
/*
Title  
3. Find items with "In stock"

Steps
1. Open the page
2. Search for "In stock" items

Expected Result
3 items should be found
*/
test("3. Find items with In stock",async({page})=>{
    const inStock=page.getByRole("listitem")
    .filter({hasText:'In stock'});

    await expect(inStock).toHaveCount(3);
})

/*
Title  
4. Find items with Out of stock

Steps
1. Open the page
2. Search for "Out of stock"
items

Expected Result
2 items should be found
*/
test("4. Find items with Out of stock",async({page})=>{
    const outOfStock=page.getByRole("listitem")
    .filter({hasText:'Out of stock'});

    await expect(outOfStock).toHaveCount(2);
})
/*
Title  
5. Verify elements using data-testid

Steps
1. Open the page
2. Locate apple, banana, orange
using test id

Expected Result
All elements should be visible
with correct text
*/
test("5. Verify elements using data-testid",async({page})=>{
   const appleTestID=page.getByTestId("apple");
   const bananaTestID=page.getByTestId("banana");
   const orangeTestID=page.getByTestId("orange");

   await expect(appleTestID).toBeVisible();
   await expect(bananaTestID).toBeVisible();
   await expect(orangeTestID).toBeVisible();
})

/*
Title  
6. Count all elements with test ids

Steps
1. Open the page
2. Locate all elements with
data-testid

Expected Result
Total count should be 5
*/
test("6. Count all elements with test ids",async({page})=>{
     const dataTestId=page.locator("[data-testid]");
    const elementsTestId=dataTestId.last();
    console.log(await elementsTestId.innerText());
    await expect(dataTestId).toHaveCount(5);
})

/*
Title  
7. Find "Say goodbye" button for John

Steps
1. Open the page
2. Find "John"
3. Locate "Say goodbye" button

Expected Result
Button should be visible with correct text
*/
test("7. Find Say goodbye button for John",async({page})=>{
   const sayGoodByeButton=page.getByRole("listitem")
   .filter({hasText:"John"})
   .getByRole('button',{name:"Say goodbye"});
   await expect(sayGoodByeButton).toBeVisible();
})

/*
Title  
8. Find "Say hello" button for Mary

Steps
1. Open the page
2. Find "Mary"
3. Locate "Say hello" button

Expected Result
Button should be visible with correct text
*/
test("8. Find Say hello button for Mary",async({page})=>{
   const sayHelloButton=page.getByRole("listitem")
   .filter({hasText:"Mary"})
   .getByRole('button',{name:"Say hello"});
   await expect(sayHelloButton).toBeVisible();
})

/*
Title  
9. Count "Say hello" buttons for John

Steps
1. Open the page
2. Filter "John"
3. Find "Say hello" buttons

Expected Result
Count should be 1
*/
test("9. Find Say Hello button for John",async({page})=>{
   const sayHelloButtonJohn=page.getByRole("listitem")
   .filter({hasText:"John"})
   .getByRole('button',{name:"Say hello"});
   await expect(sayHelloButtonJohn).toBeVisible();
   await expect(sayHelloButtonJohn).toHaveCount(1);
})

/*
Title  
10.  Count "Say goodbye" buttons for Mary

Steps
1. Open the page
2. Filter "Mary"
3. Find "Say goodbye" buttons

Expected Result
Count should be 1
*/
test("10. Find Say GoodBye button for Mary",async({page})=>{
   const sayGoodbyeButtonMary=page.getByRole("listitem")
   .filter({hasText:"Mary"})
   .getByRole('button',{name:"Say goodbye"});
   await expect(sayGoodbyeButtonMary).toBeVisible();
})

/*
Title  
11. Count all buttons for John 

Steps
1. Open the page
2. Filter "John"
3. Count buttons

Expected Result
Count should be 2
*/
test("11. Count all buttons for John",async({page})=>{
   const buttonsForJohn=page.getByRole("listitem")
   .filter({hasText:"John"})
   .getByRole('button');
   await expect(buttonsForJohn).toHaveCount(2);
})

/*
Title  
12. Find "Subscribe" buttons using multiple conditions

Steps
1. Open the page
2. Locate buttons with title
"Subscribe"

Expected Result
2 buttons should be found and visible
*/

test("12. Find Subscribe buttons using multiple conditions",async({page})=>{    
   const subscribeButton=page.getByRole("button")
                            .and(page.getByTitle("Subscribe",{exact:true}))
   await expect(subscribeButton).toHaveCount(2);
})

/*
Title  
13. Find "Unsubscribe" button 

Steps
1. Open the page
2. Locate button with title "Unsubscribe"

Expected Result
1 button should be found with correct text
*/

test("13. Find Unsubscribe button",async({page})=>{    
   const unSubscribeButton=page.getByRole("button")
                            .and(page.getByTitle("Unsubscribe",{exact:true}))
   await expect(unSubscribeButton).toHaveCount(1);
})

/*
Title  
14. Find "details" buttons for done tasks

Steps
1. Open the page
2. Filter tasks with "done"

Expected Result
2 buttons should be found
*/
test("14. Find details buttons for done tasks",async({page})=>{    
   const detailsButtonForDoneTask=page.getByRole("listitem")
                                    .filter({hasText:"done"})
                                    .getByRole("button",{name:"details"});
   await expect(detailsButtonForDoneTask).toHaveCount(2);
})

/*
Title  
15. Find "details" button for pending tasks

Steps
1. Open the page
2. Filter tasks with "pending"
3. Find "details" button

Expected Result
1 button should be found
*/
test("15. Find details buttons for pending tasks",async({page})=>{    
   const detailsButtonForPendingTask=page.getByRole("listitem")
                                    .filter({hasText:"pending"})
                                    .getByRole("button",{name:"details"});
   await expect(detailsButtonForPendingTask).toHaveCount(1);
})