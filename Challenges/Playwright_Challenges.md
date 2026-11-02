# 🎭 Playwright Challenge Workbook

> **Instructor:** Claude  **Student:** Vaishak
> **Built from:** `Playwright/tests/Day1` → `Day14` in your repo
> **Prerequisite:** finish `TypeScript_Challenges.md`, **especially Module 9 (async/await)**

---

## 📜 Rules of the Classroom

1. **No solutions in this file.** Each challenge gives you a **URL + Input (test data)** and the **Expected Output** (what your assertions must prove, or what your console must print).
2. Put your specs in `Playwright/tests/Practice/`, one file per module (e.g. `Module01_Locators.spec.ts`).
3. Run a single file in one browser while you practise:
   ```bash
   npx playwright test tests/Practice/Module01_Locators.spec.ts --project=chromium --headed
   ```
4. **Every challenge must end with assertions.** A test that only prints to the console isn't a test.
5. 🚫 **Banned from Module 3 onwards:** `page.waitForTimeout()`. Use web-first assertions (`await expect(...).toBeVisible()` etc.) and auto-waiting instead. (Exception: the slider and infinite scroll challenges allow one short wait, only if you can explain why you need it.)
6. 🚫 **Don't copy selectors from this file.** I mostly don't give you selectors. Open DevTools, inspect the page and pick the locator yourself. Prefer `getByRole` / `getByLabel` / `getByText` over CSS, and CSS over XPath.
7. **Stuck?** Paste your code in the chat along with:
   - the **Challenge ID** (e.g. `PW-10.2`)
   - the **error message** or the HTML report screenshot / trace
   - what you've already tried

   I'll walk you through it step by step with questions. **I won't hand you the code.**

> Every challenge ends with **🧩 Concepts involved** (what you already learned in your Day folders) and **🆕 New for you** (the *only* thing you'd need to look up, if anything).

### Difficulty legend
🟢 Warm-up · 🟡 Practice · 🔴 Challenge · ⭐ Stretch · 🗣️ Interview question (answer out loud, then write 2 lines in a comment)

### Practice sites used
| Site | Why |
|---|---|
| `https://the-internet.herokuapp.com` | Stable, one concept per page. **New to you**, so you can't reuse old code |
| `https://sdetqa.vercel.app/...` | The site from your course |
| `https://datatables.net/examples/basic_init/zero_configuration.html` | Pagination |
| `https://blazedemo.com` | Forms / flight booking |
| `https://testautomationpractice.blogspot.com` | Date picker |
| `https://jqueryui.com/datepicker/` | Date picker **inside an iframe** |
| `https://www.bstackdemo.com` | Capstone e-commerce flow |

### Progress tracker
| # | Module | Your Day | Done |
|---|---|---|---|
| 0 | 🐞 Bug Hunt in your own code | Day3–Day6 | ☐ |
| 1 | Locators & first tests | Day1 | ☐ |
| 2 | Filters & chaining | Day2 | ☐ |
| 3 | Hooks, describe & form assertions | Day3 | ☐ |
| 4 | Dropdowns | Day4 | ☐ |
| 5 | Auto-suggest, hidden dropdown, static tables | Day5 | ☐ |
| 6 | CRUD / add-remove elements | Day6 | ☐ |
| 7 | Dynamic tables & pagination | Day7 | ☐ |
| 8 | Forms end-to-end | Day8 | ☐ |
| 9 | Date pickers | Day9–10 | ☐ |
| 10 | Dialogs | Day10 | ☐ |
| 11 | Tabs/windows, upload, download | Day11 | ☐ |
| 12 | Keyboard, mouse, drag & drop, slider, scroll | Day12 | ☐ |
| 13 | SVG & Shadow DOM | Day13 | ☐ |
| 14 | Frames | Day14 | ☐ |
| 🏆 | Capstone: BrowserStack demo E2E + Page Object Model | All | ☐ |

---

## Module 0 🐞 Bug Hunt in Your Own Code
> Real QA work means reviewing tests, not just writing them. Every one of these files **passes or half-passes today**, but contains bugs. Find them, fix them, and write a one-line comment explaining each fix.

### PW-0.1 🟡 `Day3/Datavalidation.spec.ts`
- There is **at least 1 assertion that never actually runs**, even though the test is green. Find it.
- There are **at least 7 actions** (`fill`, `check`) that aren't awaited. Find them all.
- 🗣️ Why can a test with a missing `await` pass sometimes and fail other times? (Your answer to `TS-9.4` will help.)

> 🧩 **Concepts involved:** `async` / `await` · Actions `fill()` / `check()` · `expect` assertions · Calling vs. referencing a function (`toBeVisible` vs `toBeVisible()`)
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-0.2 🟡 `Day5/LabExerciseAutomatingAutoSuggestDropdownInFlipkart.spec.ts`
- One `for` loop has a condition that **can never become false**. What happens if `"smartphone"` isn't in the suggestions?
- One line reads the 5th suggestion **before** checking that 5 suggestions exist. What happens when there are only 3?
- `test.afterAll(async ({ page }) => ...)`: what does Playwright say about using the `page` fixture in `afterAll`? Run it and read the error. (Same issue in `Day5/TC_Bootstrap_Hidden_Dropdown_OrangeHRM.spec.ts`.)

> 🧩 **Concepts involved:** `for` loop conditions · `count()` · `nth()` · `test.afterAll` · The `page` fixture
> 🆕 **New for you (look up only this):** fixture scopes: why `page` belongs to a single test

### PW-0.3 🟢 `Day6/WebTable_With_CRUD_Validation.spec.ts`
- Find the `expect(...)` on a **locator** that's missing `await`.
- 🗣️ What's the difference between `expect(locator).toHaveCount(2)` and `expect(await locator.count()).toBe(2)`? Which one retries?

> 🧩 **Concepts involved:** `expect(locator).toHaveCount()` · `locator.count()` · `await`
> 🆕 **New for you (look up only this):** auto-retrying (web-first) vs. one-time assertions

### PW-0.4 🔴 Remove the sleeps
In `Day4/Lab_BrowserStack.spec.ts`, delete `page.waitForTimeout(2000)` and make the test **reliably pass 5 runs in a row**:
```bash
npx playwright test tests/Day4/Lab_BrowserStack.spec.ts --project=chromium --repeat-each=5
```
**Expected Output:** `5 passed`

> 🧩 **Concepts involved:** Web-first assertions · `waitFor({ state })` (Day7) · `selectOption()`
> 🆕 **New for you (look up only this):** the `--repeat-each` CLI flag

---

## Module 1: Locators & First Tests (Day 1)

### PW-1.1 🟢 Valid Login
**URL:** `https://the-internet.herokuapp.com/login`
**Input:** username `tomsmith`, password `SuperSecretPassword!`
**Expected (assert all):**
- URL ends with `/secure`
- Flash message contains `You logged into a secure area!`
- A `Logout` link is visible
- After clicking Logout → flash contains `You logged out of the secure area!`

✅ Use **only** `getByLabel` and `getByRole` (no CSS, no XPath).

> 🧩 **Concepts involved:** `page.goto()` · `getByLabel()` · `getByRole()` · `fill()` · `click()` · `toHaveURL()` with regex · `toContainText()` · `toBeVisible()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### PW-1.2 🟡 Data-Driven Negative Login
**Input:** create this array **at the top of the file** and generate **one test per row** with a `for...of` loop around `test()`:
| username | password | expected flash text |
|---|---|---|
| `wronguser` | `SuperSecretPassword!` | `Your username is invalid!` |
| `tomsmith` | `wrongpass` | `Your password is invalid!` |
| *(empty)* | *(empty)* | `Your username is invalid!` |

**Expected Output** in the terminal: **3 separate tests**, each with a readable title such as `Login fails for user "wronguser"`.

🗣️ Why is "one test per data row" better than one test with a loop inside it?

> 🧩 **Concepts involved:** Array of objects (TS-6.1) · `for...of` · Template literals in test titles · `getByRole()` / `getByLabel()` · `toContainText()`
> 🆕 **New for you (look up only this):** calling `test()` inside a loop to generate data-driven tests

---

### PW-1.3 🟡 Three Ways to Find One Element
**URL:** `https://sdetqa.vercel.app/pw-locators-demo-app`
Locate the **Free Plan** radio button in **3 different ways**: `getByRole`, a CSS selector and an XPath.
**Expected:** each locator has `toHaveCount(1)`, and checking any one of them makes **all three** report `toBeChecked()`.
🗣️ Rank the three by how likely they are to break when a developer changes the UI. Why?

> 🧩 **Concepts involved:** `getByRole()` · CSS `locator()` · `toHaveCount()` · `check()` · `toBeChecked()`
> 🆕 **New for you (look up only this):** XPath locators (`page.locator("//...")`)

---

## Module 2: Filters & Chaining (Day 2)

**URL for all:** `https://the-internet.herokuapp.com/tables` (use **Example 1** table only)

### PW-2.1 🟢 Find a Row by Text
**Input:** last name `Doe`
**Expected:** that row's Email cell has text `jdoe@hotmail.com`
✅ Use `.filter({ hasText })`, then chain down to the cell.

> 🧩 **Concepts involved:** Table row locators · `filter({ hasText })` · Chaining locators · `nth()` · `toHaveText()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-2.2 🟡 Filter by Value in a Column
**Expected:** exactly **2** rows have Due = `$50.00`, and their last names are `Smith` and `Conway`.

> 🧩 **Concepts involved:** `filter({ hasText })` · `toHaveCount()` · `allInnerTexts()` · `map()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-2.3 🟡 Filter with `has`
**Expected:** the number of rows that **have** a `delete` link = `4`.
Then click `edit` **in Conway's row only** → URL ends with `#edit`.

> 🧩 **Concepts involved:** `getByRole('link')` · `toHaveCount()` · `click()` · `toHaveURL()` with regex
> 🆕 **New for you (look up only this):** `filter({ has: locator })`

### PW-2.4 🔴 `.and()` / `.or()`
On the **login page**, write ONE locator using `.or()` that matches the flash message whether it says `invalid` or `secure area`. Use it in two tests (one valid login, one invalid). **Expected:** the same locator is visible in both.

> 🧩 **Concepts involved:** `.and()` (Day2) · `toBeVisible()` · Login flow
> 🆕 **New for you (look up only this):** `.or()`

---

## Module 3: Hooks, `describe` & Form Assertions (Day 3)

### PW-3.1 🟢 Checkboxes
**URL:** `https://the-internet.herokuapp.com/checkboxes`
Use `test.describe` + `test.beforeEach` for navigation.
| Test | Expected |
|---|---|
| Default state | checkbox 1 **not** checked, checkbox 2 checked |
| Toggle both | checkbox 1 checked, checkbox 2 **not** checked |
| Check all | both checked (loop over `.all()`) |

> 🧩 **Concepts involved:** `test.describe` · `beforeEach` · `locator.all()` · `for...of` · `check()` / `uncheck()` · `toBeChecked()` · `.not`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-3.2 🟡 Dynamic Controls (auto-waiting)
**URL:** `https://the-internet.herokuapp.com/dynamic_controls`
| Action | Expected |
|---|---|
| Click **Remove** | message `It's gone!`, checkbox has count 0 |
| Click **Add** | message `It's back!`, checkbox visible |
| Click **Enable** | message `It's enabled!`, textbox enabled, fill `Vaishak` → value `Vaishak` |
| Click **Disable** | message `It's disabled!`, textbox disabled |

🚫 No `waitForTimeout`. 🗣️ There's a loading bar on this page. How does Playwright know to wait for it?

> 🧩 **Concepts involved:** `click()` · `toHaveText()` / `toContainText()` · `toBeEnabled()` · `toHaveCount(0)` · `fill()` / `toHaveValue()` · Auto-waiting
> 🆕 **New for you (look up only this):** `toBeDisabled()`

### PW-3.3 🟡 Dynamic Loading: hidden vs not rendered
**URLs:** `/dynamic_loading/1` and `/dynamic_loading/2`
**Expected:** after clicking **Start**, the text `Hello World!` is visible **on both pages**.
🗣️ In example 1 the element is in the DOM but hidden. In example 2 it doesn't exist yet. Did your locator need to change? Why or why not?

> 🧩 **Concepts involved:** `click()` · `getByText()` · `toBeVisible()` · Hidden element vs. element not in the DOM
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-3.4 ⭐ Soft Assertions
Rewrite PW-3.1's "Default state" test using `expect.soft`, and deliberately make **2** assertions wrong.
**Expected:** the report shows **both** failures, not just the first. 🗣️ When would you use soft assertions on a real project?

> 🧩 **Concepts involved:** Assertions from PW-3.1
> 🆕 **New for you (look up only this):** `expect.soft()`

### PW-3.5 ⭐ Hook Order
Add `beforeAll`, `beforeEach`, `afterEach` and `afterAll` with a `console.log` in each, plus 2 tests.
**Expected console order** (with `--workers=1`):
```
beforeAll
beforeEach
test 1
afterEach
beforeEach
test 2
afterEach
afterAll
```

> 🧩 **Concepts involved:** `beforeEach` / `afterEach` / `afterAll` · `console.log`
> 🆕 **New for you (look up only this):** `beforeAll` · the `--workers=1` CLI flag

---

## Module 4: Dropdowns (Day 4)

### PW-4.1 🟢 Basic Select
**URL:** `https://the-internet.herokuapp.com/dropdown`
**Expected:**
- 3 options in total
- The first option `Please select an option` is **disabled**
- Select `Option 2` by **label** → `toHaveValue("2")`
- Select by **value** `"1"` → the selected option's text is `Option 1`

> 🧩 **Concepts involved:** `locator('option')` · `toHaveCount()` · `selectOption()` by label / value · `toHaveValue()`
> 🆕 **New for you (look up only this):** `toBeDisabled()` · reading the selected option (`option:checked` CSS or `inputValue()`)

### PW-4.2 🟡 Reusable Helper
Write a helper `async function selectAndVerify(dropdown: Locator, label: string)` that selects by label and asserts the selected text. Use it on `#country` at `https://sdetqa.vercel.app/autoplay` for **every** country in a loop (read the labels from the page, don't hard-code them).
**Expected:** the loop runs once per option and all assertions pass.

> 🧩 **Concepts involved:** Helper function with typed parameters (`Locator` type, imported in Day1) · `allTextContents()` · `for...of` · `selectOption()` · `toHaveValue()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-4.3 🔴 Numeric Sort Validation
**URL:** `https://www.bstackdemo.com/`
Choose **Highest to lowest** from the Order By dropdown.
**Expected:**
- Prices (as **numbers**) are in **descending** order. Compare against a sorted copy.
- Print the most expensive and cheapest product names with prices.

⚠️ Remember `TS-5.9`. Sorting price **strings** gives the wrong answer.

> 🧩 **Concepts involved:** `selectOption()` · `allInnerTexts()` · `replace()` + `Number()` (TS-5.6) · Spread copy `[...arr]` · `sort()` comparator (TS-5.9) · `toEqual()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 5: Auto-suggest, Hidden Dropdowns & Static Tables (Day 5)

### PW-5.1 🟡 Auto-suggest (OrangeHRM)
**URL:** `https://opensource-demo.orangehrmlive.com` (Admin / admin123)
Go to **PIM → Employee List**. In **Employee Name**, type `a`.
**Expected:**
- Suggestions appear (count > 0). Print them all.
- Click the **2nd** suggestion → the input's value equals the text you clicked.

🚫 Don't use `nth(1)` blindly. Assert the count is `>= 2` first. (See PW-0.2.)

> 🧩 **Concepts involved:** Login flow · `fill()` / `click()` · `count()` · `allInnerTexts()` · `nth()` · `innerText()` · `toHaveValue()` · `if` guard before `nth()`
> 🆕 **New for you (look up only this):** `toBeGreaterThanOrEqual()` matcher

### PW-5.2 🟡 Hidden Dropdown
Same page. Open the **Employment Status** dropdown.
**Expected:** print all options, select `Full-Time Permanent`, and assert the dropdown now **displays** that text.
🗣️ Why can't you use `selectOption()` here?

> 🧩 **Concepts involved:** Clicking to open a custom dropdown (Day5 OrangeHRM) · `role=listbox` / option locators · `filter({ hasText })` · `toContainText()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-5.3 🔴 Static Table Analytics
**URL:** `https://the-internet.herokuapp.com/tables` (Example 1)
Read the whole table into `string[][]` (like you did in Day5), then:
| Task | Expected |
|---|---|
| Rows / columns | `4` / `6` |
| Header texts | `Last Name, First Name, Email, Due, Web Site, Action` |
| Total Due | `$251.00` |
| Highest due | `Jason Doe ($100.00)` |
| Emails ending in `.com` | `jsmith@gmail.com, fbach@yahoo.com, jdoe@hotmail.com` |
| Click **Last Name** header, then read the column again | `Bach, Conway, Doe, Smith` |

✅ Find the **Due** column's index by reading the header, not by hard-coding `3`.

> 🧩 **Concepts involved:** `thead th` / `tbody tr` / `td` locators · `allInnerTexts()` · `string[][]` · `indexOf()` on headers · `reduce()` · `filter()` · `map()` · `endsWith()` · `replace()` + `Number()` · `toEqual()` · Clicking a header
> 🆕 **New for you (look up only this):** `toFixed(2)` (from TS-6.5)

---

## Module 6: CRUD / Add-Remove Elements (Day 6)

### PW-6.1 🟢 Add & Remove
**URL:** `https://the-internet.herokuapp.com/add_remove_elements/`
| Step | Expected |
|---|---|
| Click **Add Element** 5 times | 5 `Delete` buttons |
| Delete 2 | 3 remain |
| Delete all (loop) | 0 remain |

⚠️ When you delete in a loop, the list shrinks while you're looping over it. Which index should you always click?

> 🧩 **Concepts involved:** `click()` in a loop · `toHaveCount()` · `first()` · `while` loop until the count is 0
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-6.2 🔴 Full CRUD on sdetqa
**URL:** `https://sdetqa.vercel.app/autoplay` → CRUD table (`#dynamicTable`)
| Step | Input | Expected |
|---|---|---|
| Create | Name `Charlie`, Role `QA Lead` | 3 rows, last row contains `Charlie` and `QA Lead` |
| Read | Search `char` | exactly 1 visible row, containing `Charlie` |
| Clear search | (empty) | 3 rows |
| Delete | Charlie's row | 2 rows, and **no** row contains `Charlie` |

✅ Delete Charlie by **filtering the row by text**, not by index.

> 🧩 **Concepts involved:** `fill()` · `click()` · `tbody tr` + `filter({ hasText })` · `toHaveCount()` · `page.once('dialog')` + `accept()` (Day6)
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 7: Dynamic Tables & Pagination (Day 7)

**URL:** `https://datatables.net/examples/basic_init/zero_configuration.html`

### PW-7.1 🔴 Don't Trust Hard-coded Totals
1. Read the info text `Showing 1 to 10 of N entries` and extract **N** with regex (`TS-8.3`).
2. Walk through **all** pages collecting every Name.
**Expected:**
- `collectedNames.length === N`
- No duplicate names (compare length with a de-duplicated copy)
- Print: `Collected N names across P pages`

> 🧩 **Concepts involved:** `innerText()` · Regex number extraction (TS-8.3) · `while` loop pagination (Day7) · `isVisible()` / `isEnabled()` · `waitFor()` · `push()` · De-duplicating with `filter` + `indexOf` (Day5 lab #17)
> 🆕 **New for you (look up only this):** `new Set()` (optional, a shorter way to de-duplicate)

### PW-7.2 🟡 Page Size
Change the "entries per page" dropdown to `25`.
**Expected:** the number of pages you walk through = `Math.ceil(N / 25)`, and the first page shows 25 rows.

> 🧩 **Concepts involved:** `selectOption()` · Page counter in a `while` loop · `toHaveCount()`
> 🆕 **New for you (look up only this):** `Math.ceil()`

### PW-7.3 🟡 Search Filter Validation
Type `London` in the search box.
**Expected:** **every** visible row's **Office** column equals `London` (find the column index from the header), and the info text's filtered count equals the number of rows you counted across all pages.

> 🧩 **Concepts involved:** `fill()` · Header `indexOf()` · `nth(index)` · `every()` · Regex extraction
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-7.4 🔴 Dynamic Column Order (sdetqa)
**URL:** `https://sdetqa.vercel.app/autoplay` → task table (`#taskTable`)
The column order changes on reload. **Expected:**
- Find the CPU column index from the headers each time
- Print the process with the **highest CPU %**
- Reload 3 times; your test passes every time without changing code

> 🧩 **Concepts involved:** Header texts + `indexOf()` / `includes()` · `replace('%', '')` + `Number()` · `reduce()` for a max · `page.reload()` · `for` loop
> 🆕 **New for you (look up only this):** `findIndex()` (optional)

---

## Module 8: Forms End-to-End (Day 8)

### PW-8.1 🔴 Cheapest Flight, Data-Driven
**URL:** `https://blazedemo.com`
**Input:** generate one test per route:
| from | to |
|---|---|
| Boston | London |
| Paris | Rome |
| Mexico City | Dublin |

**Expected for each route:**
- Results heading mentions both cities
- Find the **cheapest** flight by parsing prices, and click **its** "Choose This Flight". (Not the first row.)
- Fill the purchase form (use a test-data object). Tick "Remember me"
- Confirmation heading: `Thank you for your purchase today!`
- Print `Route: Boston → London | Price: $xxx | Confirmation Id: xxxx`

⭐ Move the test-data object to `tests/Practice/testdata/passenger.json` and read it with `fs` + `JSON.parse` (like `users.json` in Day11).

> 🧩 **Concepts involved:** Data-driven tests (PW-1.2) · `selectOption()` · Table rows · `replace()` + `Number()` · Finding a minimum (`reduce`) · Clicking inside a filtered row · `fill()` / `check()` · `toHaveText()` · `innerText()`
> 🆕 **New for you (look up only this):** `fs.readFileSync()` + `JSON.parse()` (stretch)

---

## Module 9: Date Pickers (Day 9–10)

### PW-9.1 🟢 Type Into It
**URL:** `https://testautomationpractice.blogspot.com/`, the Date Picker 1 input
**Input:** fill `03/15/2027` directly → **Expected:** `toHaveValue("03/15/2027")`
🗣️ Why do testers usually also test the *calendar clicking* path, if filling works?

> 🧩 **Concepts involved:** `fill()` · `toHaveValue()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-9.2 🔴 Navigate the Calendar
Write `async function selectDate(page, day: number, month: string, year: string)` that clicks **Next** or **Prev** until the calendar title shows the target month/year, then clicks the day.
| Input | Expected input value |
|---|---|
| `selectDate(page, 15, "March", "2027")` | `03/15/2027` |
| `selectDate(page, 1, "January", "2025")` *(past)* | `01/01/2025` |

⚠️ Your function must decide **by itself** whether to go forward or back.

> 🧩 **Concepts involved:** Async helper with a `Page` parameter (Day10 `selectDate`) · `while` loop · `innerText()` · Month-name array + `indexOf()` · `Date` object (Day9) · `click()` · `toHaveValue()`
> 🆕 **New for you (look up only this):** comparing two dates to decide the direction (logic, not new syntax)

### PW-9.3 🔴 Relative Dates
**Input:** "today + 10 days", calculated with the `Date` object at runtime
**Expected:** the input shows that date in `MM/DD/YYYY`. The test must still pass if you run it next month.

> 🧩 **Concepts involved:** `Date` object (Day9) · `getMonth() + 1` · Template literals
> 🆕 **New for you (look up only this):** `setDate()` / `getDate()` for adding days · `padStart()` for `03` instead of `3`

---

## Module 10: Dialogs (Day 10)

**URL:** `https://the-internet.herokuapp.com/javascript_alerts`

### PW-10.1 🟢 All Three Dialog Types
| Button | Handle with | Assert `dialog.type()` | Assert `dialog.message()` | Expected result text |
|---|---|---|---|---|
| JS Alert | accept | `alert` | `I am a JS Alert` | `You successfully clicked an alert` |
| JS Confirm | accept | `confirm` | `I am a JS Confirm` | `You clicked: Ok` |
| JS Confirm | dismiss | `confirm` | `I am a JS Confirm` | `You clicked: Cancel` |
| JS Prompt | accept with `Vaishak` | `prompt` | `I am a JS prompt` | `You entered: Vaishak` |
| JS Prompt | dismiss | `prompt` | `I am a JS prompt` | `You entered: null` |

> 🧩 **Concepts involved:** `page.once('dialog')` · `dialog.type()` · `dialog.message()` · `accept()` / `accept('text')` · `dismiss()` · `toHaveText()` (all from Day10)
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-10.2 🟡 Predict, Then Prove
Click **JS Confirm** with **no** dialog handler registered.
1. Write your prediction in a comment **first**.
2. Assert the actual result text. (Was it `Ok` or `Cancel`?)

🗣️ `page.on('dialog')` vs `page.once('dialog')`: when does using `on` cause bugs in a later step of the same test?

> 🧩 **Concepts involved:** Default dialog behaviour · `page.on` vs `page.once`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-10.3 🟡 Context Menu Alert
**URL:** `/context_menu`
Right-click the box. **Expected:** dialog message `You selected a context menu`.

> 🧩 **Concepts involved:** `click({ button: 'right' })` (Day12) · `page.once('dialog')` · `dialog.message()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 11: Tabs/Windows, Upload, Download (Day 11)

### PW-11.1 🟢 New Window
**URL:** `https://the-internet.herokuapp.com/windows`
**Expected:**
- Clicking **Click Here** opens a new page. Capture it **without** `waitForTimeout`
- New page title is `New Window` and its heading is `New Window`
- `context.pages().length === 2`
- Close the new page → the original page's heading is still `Opening a new window`

⚠️ 🗣️ Why must you start waiting for the `page` event **before** clicking?

> 🧩 **Concepts involved:** `context.waitForEvent('page')` + `Promise.all` (Day11) · `toHaveTitle()` · `toHaveText()` · `page.close()`
> 🆕 **New for you (look up only this):** `context.pages()`

### PW-11.2 🟢 Upload
**URL:** `/upload`
**Input:** `tests/Day11/testdata/users.json`
**Expected:** heading `File Uploaded!` and the uploaded file name shown is `users.json`.
⚠️ Build the file path with `path.join(__dirname, ...)` so the test works no matter which folder you run it from. (Look at the hard-coded path you used in `Day13/SVG_ShadowDOM.spec.ts`. That's what this fixes.)

> 🧩 **Concepts involved:** `setInputFiles()` · `path.join()` (Day11) · `toHaveText()`
> 🆕 **New for you (look up only this):** `__dirname`

### PW-11.3 🟡 Upload Without a File on Disk
Upload a file created **in memory** (`name`, `mimeType`, `buffer`) called `report.txt` containing `Hello from Playwright`.
**Expected:** uploaded file name `report.txt`.

> 🧩 **Concepts involved:** `setInputFiles()`
> 🆕 **New for you (look up only this):** passing a file object `{ name, mimeType, buffer }` · `Buffer.from()`

### PW-11.4 🟡 Download & Verify
**URL:** `/download`
**Expected:**
- Click the **first** file link, capture the download
- Save it to `tests/Practice/downloads/<suggestedFilename>`
- Assert with Node's `fs` that the file **exists** and its size is **> 0 bytes**
- Print `Downloaded: <name> (<size> bytes)`

> 🧩 **Concepts involved:** `page.waitForEvent('download')` + `Promise.all` · `suggestedFilename()` · `saveAs()` · `path.join()` · `fs.existsSync()` (all Day11)
> 🆕 **New for you (look up only this):** `fs.statSync().size`

### PW-11.5 🔴 JSON-Driven Login
Create `tests/Practice/testdata/loginData.json`:
```
[
  { "username": "tomsmith", "password": "SuperSecretPassword!", "expected": "You logged into a secure area!" },
  { "username": "tomsmith", "password": "nope",                 "expected": "Your password is invalid!" }
]
```
**Expected:** one test per JSON record on `/login`, titles generated from the data.

> 🧩 **Concepts involved:** `interface` / `type` for the data (TS-6.1) · `for...of` test generation (PW-1.2) · Login flow
> 🆕 **New for you (look up only this):** `fs.readFileSync()` + `JSON.parse()`

---

## Module 12: Keyboard, Mouse, Drag & Drop, Slider, Scroll (Day 12)

### PW-12.1 🟢 Key Presses
**URL:** `/key_presses`
**Input:** loop over `["Enter", "Tab", "Escape", "A"]`
**Expected result text:** `You entered: ENTER`, `You entered: TAB`, `You entered: ESCAPE`, `You entered: A`

> 🧩 **Concepts involved:** `keyboard.press()` · `for...of` over an array · `toHaveText()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-12.2 🟡 Copy-Paste with Shortcuts
**URL:** `/login`
Type `tomsmith` in Username, then use **only keyboard shortcuts** to select all, copy, Tab to Password, and paste.
**Expected:** the Password field's value is `tomsmith`.
⭐ Make it work on both Windows (`Control`) and Mac (`Meta`). Look up `ControlOrMeta`.

> 🧩 **Concepts involved:** `fill()` · Keyboard combos like `Control+A` (Day12) · `Tab` · `toHaveValue()`
> 🆕 **New for you (look up only this):** the `ControlOrMeta` modifier

### PW-12.3 🟢 Hover
**URL:** `/hovers`
**Expected for each of the 3 avatars (loop):** after hovering, the caption `name: user1` / `user2` / `user3` is visible, and its "View profile" link's `href` is `/users/1` / `/users/2` / `/users/3`.

> 🧩 **Concepts involved:** `locator.all()` / `nth()` in a loop · `hover()` · `toBeVisible()` · `toHaveAttribute('href', ...)` · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-12.4 🟡 Drag & Drop, Two Ways
**URL:** `/drag_and_drop`
1. With `dragTo()` → **Expected:** the first column's header now reads `B`
2. Reload, then do it again with `mouse.move` / `mouse.down` / `mouse.up` using `boundingBox()` → same expected result
🗣️ Which approach is more realistic, and which is more reliable?

> 🧩 **Concepts involved:** `dragTo()` (Day12) · `toHaveText()` · `page.reload()`
> 🆕 **New for you (look up only this):** `boundingBox()` · `page.mouse.move()` / `down()` / `up()`

### PW-12.5 🔴 Slider to an Exact Value
**URL:** `/horizontal_slider`
**Input:** target value `3.5`
**Expected:** the displayed value is `3.5`.
- Version 1: keyboard (`ArrowRight`) in a loop that **reads the value** and stops at the target. No fixed count.
- Version 2: mouse, using the slider's `boundingBox()`
⭐ Make the target a parameter and test `0`, `2.5` and `5`.

> 🧩 **Concepts involved:** `keyboard.press('ArrowRight')` · `while` loop that reads the value · `innerText()` · `Number()` · Comparison
> 🆕 **New for you (look up only this):** `boundingBox()` · `page.mouse.click(x, y)` · working out the x-position from a percentage

### PW-12.6 🔴 Infinite Scroll
**URL:** `/infinite_scroll`
**Expected:**
- Keep scrolling until **at least 10** extra paragraphs have loaded
- Print `Loaded N paragraphs after S scrolls`
- Add a safety limit (e.g. max 30 scrolls) so the test can never loop forever

> 🧩 **Concepts involved:** `page.evaluate()` scrolling (Day12) · `while` loop with a safety counter · `count()` · `break`
> 🆕 **New for you (look up only this):** `page.mouse.wheel()` (optional)

---

## Module 13: SVG & Shadow DOM (Day 13)

### PW-13.1 🟢 Shadow DOM
**URL:** `https://the-internet.herokuapp.com/shadowdom`
**Expected:**
- There are **2** `my-paragraph` elements
- The text `Let's have some different text!` is visible
- The list item `In a list!` is visible
🗣️ Playwright found these without any special shadow syntax. Which kind of shadow root would it **not** be able to pierce?

> 🧩 **Concepts involved:** Shadow DOM piercing (Day13) · Locating by tag name · `toHaveCount()` · `getByText()` · `toBeVisible()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

### PW-13.2 🟡 SVG Bar Chart Stats
**URL:** `https://sdetqa.vercel.app/autoplay` → SVG bar chart section
**Expected:**
- Bars count === labels count
- Print `Shortest bar: <label> (<height>)` and `Tallest bar: <label> (<height>)`
- Print the **average** bar height to 2 decimals
- Tallest height is `70` (you found this in Day13). Assert it **without** a manual loop: use `map` + `Math.max`

> 🧩 **Concepts involved:** SVG `rect` / `text` locators · `getAttribute()` · `count()` · `Number()` · `map()` · `reduce()` for the average · `toEqual()`
> 🆕 **New for you (look up only this):** `Math.max()` / `Math.min()` with spread · `toFixed(2)`

---

## Module 14: Frames (Day 14)

### PW-14.1 🟡 Nested Frames, Two Ways
**URL:** `https://the-internet.herokuapp.com/nested_frames`
**Expected:**
- Print the text of each frame: `LEFT`, `MIDDLE`, `RIGHT`, `BOTTOM`
- Do it **once** with `page.frame({ name })` and **once** with `frameLocator` / `contentFrame`
- Print `Total frames: <page.frames().length>` and explain the number in a comment

> 🧩 **Concepts involved:** `frameLocator()` / `contentFrame()` (Day14) · `innerText()` · `locator('body')`
> 🆕 **New for you (look up only this):** `page.frame({ name })` · `page.frames()`

### PW-14.2 🔴 Date Picker Inside an iframe (Boss of Modules 9 + 14)
**URL:** `https://jqueryui.com/datepicker/`
Reuse your `selectDate()` idea from PW-9.2, but the calendar lives **inside an iframe**.
**Input:** 20 August 2027
**Expected:** the input inside the frame has value `08/20/2027`.
⭐ Refactor `selectDate()` so it accepts either a `Page` **or** a `FrameLocator`. (Hint: look at the type both of them share for `.locator()`. A TypeScript union type will help.)

> 🧩 **Concepts involved:** `frameLocator()` / `contentFrame()` · Your `selectDate()` helper (PW-9.2) · `toHaveValue()` · Union types (TS-1.5)
> 🆕 **New for you (look up only this):** typing a parameter as `Page | FrameLocator`

---

## 🏆 Capstone: BrowserStack Demo E2E + Page Object Model

**URL:** `https://www.bstackdemo.com/`

### Part A: Write the flow as a plain test first
| Step | Input | Expected |
|---|---|---|
| 1. Sign in | user `demouser`, password `testingisfun99` (these are **react-select** hidden dropdowns, see PW-5.2) | Username `demouser` is shown in the header |
| 2. Sort | `Lowest to highest` | prices ascending (as numbers) |
| 3. Add to cart | the **3 cheapest** products | cart badge shows `3` |
| 4. Verify cart | | cart subtotal === sum of the 3 prices you read in step 2 |
| 5. Checkout | first name, last name, address, state, postal code from a JSON file | `Your Order has been successfully placed.` |
| 6. Negative | user `locked_user` | error `Your account has been locked.` |

> 🧩 **Concepts involved:** Hidden (react-select) dropdowns (PW-5.2) · `selectOption()` · `map(Number)` · `sort` comparator · `slice(0, 3)` · `reduce()` · `click()` in a loop · `toHaveText()` · `fill()` · JSON test data (PW-11.5)
> 🆕 **New for you (look up only this):** none, everything here is from your files

### Part B: Refactor into Page Objects (TypeScript Modules 6 & 7 pay off here)
```
tests/Practice/pages/
 ├── LoginPage.ts      → login(user, pass)
 ├── ProductsPage.ts   → sortBy(label), getPrices(): Promise<number[]>, addCheapest(n)
 ├── CartPage.ts       → getSubtotal(): Promise<number>, checkout()
 └── CheckoutPage.ts   → fillDetails(data), getConfirmation(): Promise<string>
tests/Practice/Capstone.spec.ts
```
**Expected:** `Capstone.spec.ts` reads like plain English. **No locators** inside the spec file, only page-object method calls and assertions.

> 🧩 **Concepts involved:** `class` · `constructor` · `Page` / `Locator` types · `export` / `import` modules (TS-7.4) · `async` methods returning `Promise<number>`
> 🆕 **New for you (look up only this):** the *Page Object Model* design pattern

### Part C ⭐ Framework Polish
- Set `baseURL` in `playwright.config.ts` and use `page.goto("/")`
- Turn on `screenshot: "only-on-failure"` and `trace: "retain-on-failure"`
- Break one assertion on purpose, open the HTML report, then open the **trace** and find the exact failing step
- 🗣️ Explain in 4 lines how your framework is structured. This is a **managerial-round** answer, so practise saying it out loud.

> 🧩 **Concepts involved:** `playwright.config.ts` (already in your repo) · HTML report (`reporter: 'html'`)
> 🆕 **New for you (look up only this):** `baseURL` · `screenshot` / `trace` options · the Trace Viewer

---

## 🗣️ Interview Corner: answer these before you call yourself done
1. Locator vs ElementHandle: why does Playwright recommend locators?
2. What is auto-waiting, and which actions and assertions have it?
3. `toHaveText` vs `toContainText` vs `innerText()` + `toBe`: when do you use each?
4. How do you handle a flaky test? (Don't just say "add retries".)
5. `fullyParallel: true` is in your config. What does it do, and what breaks if two tests share the same test user?
6. Frames vs Shadow DOM: how does Playwright handle each?
7. How would you run only the tests tagged `@smoke`? (Look up test tags and `--grep`.)

---

> When you get stuck, paste your code with the Challenge ID. We'll debug it together, one step at a time. 💪
