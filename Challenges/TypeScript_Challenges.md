# 🧑‍🏫 TypeScript Challenge Workbook

> **Instructor:** Claude  **Student:** Vaishak
> **Built from:** `TypeScript/Day1` → `TypeScript/Day8` in your repo

---

## 📜 Rules of the Classroom

1. **This file has no solutions in it.** Each challenge gives you the **Input** and the **Expected Output**. Your job is to write the code that turns one into the other.
2. Put your solutions in a new folder: `TypeScript/Practice/` (one file per module, e.g. `Module1_Conditionals.ts`).
3. Run each file with `npx ts-node TypeScript/Practice/Module1_Conditionals.ts` (or `tsc` + `node`).
4. Your output must match the **Expected Output** exactly, including spaces, capital letters and punctuation. That's how real assertions work.
5. **Stuck?** Paste your code in the chat along with:
   - the **Challenge ID** (e.g. `TS-3.5`)
   - what you **expected** vs. what you **got** (or the error message)

   I won't give you the answer. I'll ask you questions and walk you through it one step at a time until you get there yourself.

### Difficulty legend
| Icon | Meaning |
|---|---|
| 🟢 | Warm-up: you should be able to do this in under 10 minutes |
| 🟡 | Practice: needs some thinking |
| 🔴 | Challenge: combines several concepts |
| ⭐ | Stretch goal: optional, but it's what interviewers ask next |

### Progress tracker
| Module | Topic | Your Day folder | Done |
|---|---|---|---|
| 1 | Types & Conditionals | Day1 | ☐ |
| 2 | Loops | Day2 | ☐ |
| 3 | Functions | Day3 | ☐ |
| 4 | Arrays & Tuples | Day4 | ☐ |
| 5 | Array Methods & Strings | Day5 | ☐ |
| 6 | Objects, Type Aliases & Classes | Day6 | ☐ |
| 7 | Inheritance, Interfaces & Modules | Day7 | ☐ |
| 8 | Data Structures & Regex | Day8 | ☐ |
| 9 | 🌉 Bridge: async / await (needed for Playwright) | (new) | ☐ |
| 🏆 | Boss Challenge: Test Report Generator | All | ☐ |

> Every challenge ends with **🧩 Concepts involved** (what you already learned in your Day folders) and **🆕 New for you** (the *only* thing you'd need to look up, if anything).
>
> None of these repeat your existing lab assignments. They're new problems on the same concepts, and most of them use QA/testing scenarios so you also practise talking about testing.

---

## Module 1: Types & Conditional Statements (Day 1)

### TS-1.1 🟢 Test Run Verdict
**Goal:** Decide whether a build can be released based on its pass rate.

**Rules**
- `passRate = (passed / total) * 100`
- `>= 90` → `PASS - Release ready`
- `>= 75` and `< 90` → `PASS - Needs review`
- `< 75` → `FAIL - Block release`
- `total === 0` → `No tests executed` (check this **first**. Why? Think about dividing by zero.)

| Input `(passed, total)` | Expected Output |
|---|---|
| `(45, 50)` | `Pass rate: 90% → PASS - Release ready` |
| `(30, 40)` | `Pass rate: 75% → PASS - Needs review` |
| `(10, 20)` | `Pass rate: 50% → FAIL - Block release` |
| `(0, 0)` | `No tests executed` |

✅ **Must use:** type annotations on every variable, `if / else if / else`, template literals.

> 🧩 **Concepts involved:** Variables & type annotations (`number`, `string`) · Arithmetic operators (`/`, `*`) · Comparison operators (`>=`, `<`, `===`) · Logical `&&` · `if / else if / else` · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-1.2 🟢 Bug Severity Lookup (switch)
**Goal:** Convert a severity code into an SLA message.

| Input | Expected Output |
|---|---|
| `"S1"` | `Critical - fix in 24h` |
| `"S2"` | `Major - fix in 3 days` |
| `"s3"` | `Minor - fix this sprint` |
| `"S4"` | `Trivial - backlog` |
| `"S9"` | `Unknown severity: S9` |

✅ **Must use:** `switch`, plus a `default` case.
⚠️ Notice `"s3"` is lowercase and it still has to work.

> 🧩 **Concepts involved:** `switch` / `case` / `default` / `break` · String method `toUpperCase()` (Day5) · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-1.3 🟡 Leap Year (nested if)
**Rule:** A year is a leap year if it's divisible by 4, **except** years divisible by 100, which are only leap years if they're also divisible by 400.

| Input | Expected Output |
|---|---|
| `2024` | `2024 is a leap year` |
| `1900` | `1900 is not a leap year` |
| `2000` | `2000 is a leap year` |
| `2026` | `2026 is not a leap year` |

✅ **Must use:** nested `if/else` (no `&&` or `||` allowed in version 1).
⭐ **Stretch:** Write version 2 as **one** condition using `&&` and `||`.

> 🧩 **Concepts involved:** Modulus operator `%` · Comparison `===` / `!==` · Nested `if / else` · Logical `&&` and `||` (stretch)
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-1.4 🟡 Login Validator
**Goal:** Return the correct login message. **The order of checks matters.**

Check in this order: empty username → empty password → locked account → correct credentials (`admin` / `admin123`) → otherwise invalid.

| Input `(username, password, isLocked)` | Expected Output |
|---|---|
| `("", "admin123", false)` | `Username is required` |
| `("admin", "", false)` | `Password is required` |
| `("admin", "admin123", true)` | `Account locked` |
| `("admin", "admin123", false)` | `Login successful` |
| `("admin", "wrong", false)` | `Invalid credentials` |

💡 Think like a tester: this table **is** a set of test cases. Which row is the "happy path"?

> 🧩 **Concepts involved:** `string` and `boolean` types · Empty-string check (`=== ""`) · `if / else if` ordering · Logical `&&`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-1.5 🟢 Type Explorer
**Goal:** Learn how TypeScript reacts to types.

**Input**
```
let empId: string | number = 101;
```
**Tasks & Expected Output**
1. Print `typeof empId` → `number`
2. Reassign `empId = "EMP-101"` and print `typeof empId` → `string`
3. Try `empId = true;` → it **must fail to compile**. Copy the exact error message from `tsc` into a comment in your file.
4. Declare `let anything: any = 5;` then reassign it to `"five"` and `false`. Print each value.

Expected output:
```
number
string
5
five
false
```
⭐ **Stretch:** In a comment, explain in **one line** why `any` is dangerous in a test framework.

> 🧩 **Concepts involved:** Union types (`string | number`) · `any` type · `typeof` operator · Reassigning variables · Reading `tsc` compile errors
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 2: Loops (Day 2)

### TS-2.1 🟢 Star Triangle
**Input:** `n = 4`
**Expected Output:**
```
*
**
***
****
```
✅ **Must use:** nested `for` loops. Build each line as a string, then print it.

> 🧩 **Concepts involved:** Nested `for` loops · String building with `+=` · `console.log`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.2 🟢 Countdown Pyramid
**Input:** `n = 4`
**Expected Output:**
```
4 3 2 1
4 3 2
4 3
4
```

> 🧩 **Concepts involved:** Nested `for` loops · Counting down with `--` · String building · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.3 🟢 FizzBuzz
**Input:** numbers `1` to `15`
**Rules:** multiple of 3 → `Fizz`, multiple of 5 → `Buzz`, multiple of both → `FizzBuzz`, else the number.
**Expected Output (one per line):**
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```
🤔 Before you code: which check must come **first**, and why?

> 🧩 **Concepts involved:** `for` loop · Modulus `%` · `if / else if` order · Logical `&&`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.4 🟡 Flaky Test Retry Simulator (do...while)
**Goal:** Simulate Playwright's `retries` setting.

**Input 1**
```
results = ["FAIL", "FAIL", "PASS", "FAIL"]
maxAttempts = 3
```
**Expected Output 1**
```
Attempt 1: FAIL
Attempt 2: FAIL
Attempt 3: PASS
Test passed after 3 attempts
```

**Input 2**
```
results = ["FAIL", "FAIL", "FAIL", "PASS"]
maxAttempts = 3
```
**Expected Output 2**
```
Attempt 1: FAIL
Attempt 2: FAIL
Attempt 3: FAIL
Test failed after 3 attempts
```
✅ **Must use:** `do...while`. The loop must stop when it gets a `PASS` **or** when it runs out of attempts.

> 🧩 **Concepts involved:** `do...while` loop · Array index access (`results[i]`) · Counter variables (`++`) · Logical `&&` / `||` in a loop condition · `if / else`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.5 🟡 Armstrong Numbers
An Armstrong number equals the sum of its digits, each raised to the power of the number of digits (e.g. `153 = 1³ + 5³ + 3³`).

**Input:** range `1` to `1000`
**Expected Output:**
```
1 2 3 4 5 6 7 8 9 153 370 371 407
```
✅ **Must use:** a `while` loop to pull the digits out with `%` and `Math.floor(/10)`. No converting to a string.

> 🧩 **Concepts involved:** Outer `for` + inner `while` loop · Modulus `%` · `Math.floor()` (Day2 lab) · Exponent operator `**` · Counting digits
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.6 🟢 Fibonacci
**Input:** `count = 10`
**Expected Output:** `0 1 1 2 3 5 8 13 21 34`

> 🧩 **Concepts involved:** `for` loop · Swapping values with a temp variable · String building
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-2.7 🟡 GCD & LCM
**Input:** `a = 12, b = 18`
**Expected Output:**
```
GCD of 12 and 18 is 6
LCM of 12 and 18 is 36
```
✅ **Must use:** a `while` loop for GCD (look up the "Euclidean algorithm" if you need to, but the **idea**, not the code). Then derive LCM from GCD.

> 🧩 **Concepts involved:** `while` loop · Modulus `%` · Arithmetic (`LCM = a × b ÷ GCD`)
> 🆕 **New for you (look up only this):** the *Euclidean algorithm*: a maths idea, not new syntax

---

### TS-2.8 🔴 Continue + Break Together
**Rules**
- Loop from `1` to `50`
- **Skip** multiples of 4 (`continue`)
- Add each remaining number to `sum` and print it
- **Stop** as soon as `sum > 100` (`break`)

**Expected Output**
```
1 2 3 5 6 7 9 10 11 13 14 15 17
Final sum: 113
```

> 🧩 **Concepts involved:** `for` loop · `continue` · `break` · Modulus `%` · Accumulator (`sum +=`) · Comparison `>`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 3: Functions (Day 3)

### TS-3.1 🟢 Test Case ID Builder (default parameter)
**Signature hint:** `buildTestId(module: string, id: number, env: string = "QA"): string`

| Input | Expected Output |
|---|---|
| `buildTestId("login", 1)` | `[QA] LOGIN-TC-001` |
| `buildTestId("cart", 27, "UAT")` | `[UAT] CART-TC-027` |
| `buildTestId("payment", 145, "PROD")` | `[PROD] PAYMENT-TC-145` |

💡 The number has to be padded to 3 digits. You can do it with `if/else`, or look up a string method that pads strings for you.

> 🧩 **Concepts involved:** Named function · Default parameter · Return type `string` · `toUpperCase()` · `if / else` for padding · Template literals
> 🆕 **New for you (look up only this):** `padStart()` (optional shortcut for the zero-padding)

---

### TS-3.2 🟢 Bug Formatter (optional parameter)
| Input | Expected Output |
|---|---|
| `formatBug("Login button not clickable")` | `Bug: Login button not clickable \| Assignee: Unassigned` |
| `formatBug("Cart total wrong", "Vaishak")` | `Bug: Cart total wrong \| Assignee: Vaishak` |

✅ Write it **twice**: once as a named function and once as an arrow function.

> 🧩 **Concepts involved:** Named function · Arrow function · Optional parameter `?` · `=== undefined` check · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-3.3 🟡 Average Response Time (rest parameter)
| Input | Expected Output |
|---|---|
| `averageResponseTime(120, 340, 95, 210)` | `191.25` |
| `averageResponseTime(500)` | `500` |
| `averageResponseTime()` | `0` |

⚠️ The third case is an edge case. What happens if you divide by `nums.length` when it's `0`?

> 🧩 **Concepts involved:** Rest parameter `...nums` · `for` loop (or `reduce`) · Array `.length` · Edge-case `if` · Return type `number`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-3.4 🟢 Email Checker (one-line arrow function)
Rule: valid if it contains `@` **and** ends with `.com`.

| Input | Expected Output |
|---|---|
| `"qa@test.com"` | `true` |
| `"qa.test.com"` | `false` |
| `"qa@test.in"` | `false` |

✅ The whole function must fit on **one line**.

> 🧩 **Concepts involved:** Single-line arrow function · String `includes()` and `endsWith()` · Logical `&&` · `boolean` return
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-3.5 🟡 Test Runner (callbacks)
**Goal:** Build a tiny test runner, like a mini Playwright.

**Signature hint:**
```
runTest(testName: string, testBody: () => boolean, onResult: (name: string, status: string) => void): void
```
`runTest` calls `testBody()`. If it returns `true`, the status is `PASSED`, otherwise `FAILED`. Then it passes both values to `onResult`.

**Input**
```
runTest("Login test",  () => 2 + 2 === 4, logger)
runTest("Cart test",   () => "abc".length === 5, logger)
```
**Expected Output**
```
✔ Login test: PASSED
✘ Cart test: FAILED
```
✅ Write the `logger` callback **once** and reuse it.

> 🧩 **Concepts involved:** Callback functions · Function type annotations (`(name: string) => void`) · Arrow functions · Ternary operator or `if / else` · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-3.6 🟡 Price Rule Engine (function as a parameter)
**Signature hint:** `applyRule(prices: number[], rule: (p: number) => number): number[]`
🚫 **Don't use** `.map()`. Write the loop yourself so you understand what `map` does under the hood.

**Input:** `prices = [200, 600, 1000]`

| Rule | Expected Output |
|---|---|
| 10% off everything | `[ 180, 540, 900 ]` |
| ₹50 off only if price > 500 | `[ 200, 550, 950 ]` |
| Add 18% GST | `[ 236, 708, 1180 ]` |

> 🧩 **Concepts involved:** Callback (a function passed as a parameter) · Arrays · `for` / `for...of` loop · `push()` · Arithmetic · Arrow functions
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-3.7 🔴 Locator Describer (function overloading)
Write **three overload signatures** and **one** implementation.

| Input | Expected Output |
|---|---|
| `describeLocator(5)` | `Element at index 5` |
| `describeLocator("#login")` | `Element by selector #login` |
| `describeLocator("li", 2)` | `Element li at position 2` |

🤔 After you're done: why can't the implementation signature be called directly from outside?

> 🧩 **Concepts involved:** Function overloading (overload signatures + one implementation) · Union types · Optional parameter · `typeof` check · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 4: Arrays & Tuples (Day 4)

### TS-4.1 🟢 Second Largest (no built-ins)
**Input:** `[45, 12, 98, 67, 98, 23]`
**Expected Output:** `Second largest: 67`
🚫 **Don't use** `sort()`, `Math.max()` or `reduce()`. One loop only.
⚠️ `98` appears twice, so the answer is **not** 98.

> 🧩 **Concepts involved:** Arrays · `for` / `for...of` loop · Comparison operators · Tracking two variables (largest, second largest) · `if / else if`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-4.2 🟡 Test Case Tuples
**Input**
```
let testCases: [string, string, boolean][] = [
  ["TC_01", "Login",    true],
  ["TC_02", "Logout",   false],
  ["TC_03", "Search",   true],
  ["TC_04", "Checkout", false]
];
```
**Expected Output**
```
TC_01 | Login | PASS
TC_02 | Logout | FAIL
TC_03 | Search | PASS
TC_04 | Checkout | FAIL
Passed: 2, Failed: 2
```
⭐ **Stretch:** Try to push `["TC_05", "Pay"]` (only 2 values). Note the compile error in a comment.

> 🧩 **Concepts involved:** Tuples · Array of tuples · `for...of` loop · Ternary or `if` · Counters · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-4.3 🟡 Merge Two Sorted Arrays
**Input:** `a = [1, 4, 7, 10]`, `b = [2, 3, 8, 12, 15]`
**Expected Output:** `[ 1, 2, 3, 4, 7, 8, 10, 12, 15 ]`
🚫 **Don't use** `concat()` + `sort()`. Use two index pointers.

> 🧩 **Concepts involved:** Arrays · `while` loop · Two index pointers · `push()` · Comparison · Logical `&&` / `||`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-4.4 🟢 Rotate an Array
**Input:** `[1, 2, 3, 4, 5]`, `k = 2`

| Task | Expected Output |
|---|---|
| Rotate **left** by k (use `shift` + `push`) | `[ 3, 4, 5, 1, 2 ]` |
| Rotate **right** by k (use `pop` + `unshift`) | `[ 4, 5, 1, 2, 3 ]` |

> 🧩 **Concepts involved:** `shift()` · `push()` · `pop()` · `unshift()` · `for` loop
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-4.5 🟡 Browser List Surgery (splice only)
**Input:** `browsers = ["chrome", "firefox", "safari", "edge"]`
**Steps (in this order):**
1. Replace `"safari"` with `"webkit"`
2. Insert `"opera"` right after `"chrome"`
3. Remove `"edge"`

**Expected Output (print after each step):**
```
[ 'chrome', 'firefox', 'webkit', 'edge' ]
[ 'chrome', 'opera', 'firefox', 'webkit', 'edge' ]
[ 'chrome', 'opera', 'firefox', 'webkit' ]
```
✅ Only `splice()` and `indexOf()`. No hard-coded index numbers like `2`.

> 🧩 **Concepts involved:** `splice()` for add / remove / replace · `indexOf()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-4.6 🟢 Find Missing Numbers
**Input:** `[1, 2, 4, 5, 6, 7, 9, 10]`, expected range `1..10`
**Expected Output:** `Missing: [ 3, 8 ]`

> 🧩 **Concepts involved:** `for` loop · `includes()` · `push()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## Module 5: Array Methods & Strings (Day 5)

### TS-5.1 🟡 API Response Time Analysis (method chaining)
**Input:** `times = [120, 450, 89, 1300, 760, 230, 2100]` (milliseconds), SLA = `500`

| Task | Method | Expected Output |
|---|---|---|
| Slow responses (> SLA) | `filter` | `[ 1300, 760, 2100 ]` |
| Convert slow ones to seconds text | `map` | `[ '1.3s', '0.76s', '2.1s' ]` |
| Total of slow ones | `reduce` | `4160` |
| All under 3000ms? | `every` | `true` |
| Any over 2000ms? | `some` | `true` |

⭐ **Stretch:** Do the first 3 rows in **one chained expression**.

> 🧩 **Concepts involved:** `filter()` · `map()` · `reduce()` · `every()` · `some()` · Arrow functions · Arithmetic (`/ 1000`) · Template literals
> 🆕 **New for you (look up only this):** *method chaining*: calling `.map()` directly on the result of `.filter()` (a technique, not new syntax)

---

### TS-5.2 🟡 Browser Frequency Counter
**Input:** `["chrome", "firefox", "chrome", "safari", "chrome", "firefox"]`
**Expected Output:** `chrome: 3, firefox: 2, safari: 1`
✅ Use `forEach`. Store counts in an object typed like `{ [key: string]: number }` (you used this shape in `Day8/ArrayProblem.ts`).

> 🧩 **Concepts involved:** `forEach()` · Object with an index signature `{ [key: string]: number }` (Day8) · `if / else` (does the key exist yet?) · `for...in` loop · `join()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-5.3 🟢 Reverse Each Word
**Input:** `"Playwright makes testing easy"`
**Expected Output:** `"thgirwyalP sekam gnitset ysae"`
💡 Think: string → array of words → reverse each → back to a string.

> 🧩 **Concepts involved:** `split()` · `map()` · `reverse()` (Day5 lab #18) · `join()` (used in your Day7 pagination spec) · Arrow functions
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-5.4 🟢 Vowel & Consonant Counter
**Input:** `"Automation Testing"`
**Expected Output:**
```
Vowels: 8
Consonants: 9
```
⚠️ Spaces are neither.

> 🧩 **Concepts involved:** `for...of` over a string's characters · `includes()` · `toLowerCase()` · `if / else` · Counters
> 🆕 **New for you (look up only this):** checking whether a character is a letter (compare it with `'a'` and `'z'`)

---

### TS-5.5 🟡 Title Case Cleaner
**Input:** `"   the QUICK brown fOX   "`
**Expected Output:** `"The Quick Brown Fox"`
✅ `trim`, `toLowerCase`, `split`, `charAt`, `toUpperCase`, `substring`.

> 🧩 **Concepts involved:** `trim()` · `toLowerCase()` · `split()` · `map()` · `charAt()` · `toUpperCase()` · `substring()` · `join()`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-5.6 🟡 Price Text → Numbers
You'll do this constantly in Playwright, because web pages give you **text**, not numbers.

**Input:** `["₹1,299", "₹499", "₹12,999"]`
**Expected Output:**
```
Numbers: [ 1299, 499, 12999 ]
Total: 14797
Highest: 12999
```
💡 `replace()` with a regular expression that removes everything that is **not** a digit.

> 🧩 **Concepts involved:** `replace()` with a regex such as `/[^0-9]/g` (you used this in Day5 Playwright `toPrice`) · `Number()` · `map()` · `reduce()`
> 🆕 **New for you (look up only this):** `Math.max()` with the spread operator `...`

---

### TS-5.7 🟢 Sentence Palindrome
| Input | Expected Output |
|---|---|
| `"Never odd or even"` | `true` |
| `"Playwright"` | `false` |

Ignore spaces and case.

> 🧩 **Concepts involved:** `toLowerCase()` · Removing spaces (`replace` or `split` + `join`) · Reversing a string · `===` comparison
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-5.8 🟡 Anagram Checker
| Input | Expected Output |
|---|---|
| `("listen", "silent")` | `true` |
| `("test", "taste")` | `false` |

> 🧩 **Concepts involved:** `toLowerCase()` · `split()` · `sort()` · `join()` · `===` comparison
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-5.9 🔴 The `sort()` Trap
**Input:** `[100, 25, 3, 1000]`
1. Call `.sort()` with no arguments and print the result. You will get `[ 100, 1000, 25, 3 ]`.
2. In a comment, explain **why** in your own words.
3. Fix it so the output is `[ 3, 25, 100, 1000 ]`.
4. Then sort it descending: `[ 1000, 100, 25, 3 ]`.

🎯 **Why this matters:** in `Day4/DropdownsValidation.spec.ts` you compared a dropdown with `[...list].sort()`. That works for text. It would **silently fail** for prices. You'll need this fix in Playwright challenge `PW-4.3`.

> 🧩 **Concepts involved:** `sort()` default behaviour · Spread copy `[...arr]` (Day4 Playwright)
> 🆕 **New for you (look up only this):** the `sort()` comparator function `(a, b) => a - b`

---

## Module 6: Objects, Type Aliases & Classes (Day 6)

### TS-6.1 🟡 Test Case Objects (type alias + union literals)
**Create:**
```
type TestCase = {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  status: "Pass" | "Fail" | "Skip";
};
```
**Input data:**
| id | title | priority | status |
|---|---|---|---|
| TC01 | Login | High | Pass |
| TC02 | Logout | Low | Pass |
| TC03 | Checkout | High | Fail |
| TC04 | Search | Medium | Fail |
| TC05 | Payment | High | Fail |
| TC06 | Profile | Medium | Skip |

**Expected Output**
```
High priority failures:
 - TC03: Checkout
 - TC05: Payment
Summary → Pass: 2, Fail: 3, Skip: 1
Pass rate (excluding skipped): 40%
```
⭐ **Stretch:** Try `priority: "Urgent"` on one object. What does the compiler say?

> 🧩 **Concepts involved:** `type` alias · String-literal union types · Array of objects · `filter()` · `map()` · `forEach()` / counters · Percentage arithmetic · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-6.2 🟢 Test User (intersection types)
```
type Person      = { name: string; email: string };
type Credentials = { username: string; password: string };
type TestUser    = Person & Credentials & { role: "admin" | "viewer" };
```
**Input:** `{ name: "Asha", email: "asha@test.com", username: "asha_qa", password: "Secret@1", role: "admin" }`
**Expected Output:** `Asha (asha@test.com) logs in as asha_qa with role admin`
🧪 Then try creating a `TestUser` **without** `password` and note the error.

> 🧩 **Concepts involved:** `type` alias · Intersection types `&` · Object literal · Function with a typed parameter · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-6.3 🔴 Bank Account (readonly, static, optional)
**Class requirements**
- `readonly accountNumber: string`
- `holder: string`
- `nickname?: string`
- `static bankName = "QA Bank"`
- `static totalAccounts = 0` (goes up by 1 every time an account is created)
- `deposit(amount)` / `withdraw(amount)` with validation

**Input sequence**
```
const acc = new BankAccount("ACC-1001", "Vaishak", 5000);
acc.deposit(2000);
acc.withdraw(10000);
acc.withdraw(1500);
acc.deposit(-100);
const acc2 = new BankAccount("ACC-1002", "Nivethaa", 8000, "Savings");
acc.printDetails();
acc2.printDetails();
console.log(`Total accounts: ${BankAccount.totalAccounts}`);
```
**Expected Output**
```
Deposited 2000. Balance: 7000
Insufficient funds. Balance: 7000
Withdrew 1500. Balance: 5500
Invalid amount
[QA Bank] ACC-1001 | Vaishak | Nickname: N/A | Balance: 5500
[QA Bank] ACC-1002 | Nivethaa | Nickname: Savings | Balance: 8000
Total accounts: 2
```
🧪 Try `acc.accountNumber = "X"` and note the error.
⭐ **Stretch:** Look up the `private` keyword and make `balance` private. Can you still do `acc.balance = 999999` from outside?

> 🧩 **Concepts involved:** `class` · `constructor` · `readonly` · `static` property · Optional property `?` · Methods & `this` · `if / else` validation · Template literals
> 🆕 **New for you (look up only this):** `private` access modifier (stretch only)

---

### TS-6.4 🟡 Browser Launcher (constructor + method overloading)
| Input | Expected Output |
|---|---|
| `new Browser().info()` | `chromium, headless: true` |
| `new Browser("firefox").info()` | `firefox, headless: true` |
| `new Browser("webkit", false).info()` | `webkit, headless: false` |
| `new Browser().launch()` | `Launching chromium` |
| `new Browser().launch("https://example.com")` | `Launching chromium at https://example.com` |

> 🧩 **Concepts involved:** Constructor overloading · Method overloading · Optional parameters · Default values · Class properties
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-6.5 🔴 Shopping Cart Class
**Methods:** `addItem(name, price, qty)`, `removeItem(name)`, `getTotal()`, `applyCoupon(code)`

**Input sequence**
```
cart.addItem("Mouse", 499, 2);
cart.addItem("Keyboard", 1299, 1);
cart.addItem("Monitor", 8999, 1);
console.log(cart.getTotal());
cart.removeItem("Keyboard");
console.log(cart.getTotal());
console.log(cart.applyCoupon("FREE100"));
console.log(cart.applyCoupon("SAVE10"));
```
**Expected Output**
```
11296
9997
Invalid coupon
8997.3
```
💡 Store items as an array of objects. Which array method fits `removeItem` best?
⚠️ If you see `8997.300000000001`, your logic is fine. That's a floating-point quirk. Your job is to round the result to 2 decimals so the output matches exactly.

> 🧩 **Concepts involved:** `class` · Array of objects as a class property · `push()` · `filter()` or `splice()` · `reduce()` · `if / else` or `switch` for the coupon
> 🆕 **New for you (look up only this):** rounding to 2 decimals with `toFixed(2)` + `Number()` · `findIndex()` (optional)

---

## Module 7: Inheritance, Interfaces & Modules (Day 7)

### TS-7.1 🟡 Employees (inheritance + super + override)
- `Employee(name, monthlySalary)`: `getAnnualSalary()` = monthly × 12, `describe()`
- `Manager extends Employee` adds `bonus`: overrides `getAnnualSalary()` and **must call `super.getAnnualSalary()`**
- `Intern extends Employee`: overrides `describe()` only

**Input**
```
const staff: Employee[] = [
  new Employee("Ravi", 50000),
  new Manager("Priya", 90000, 200000),
  new Intern("Arun", 15000)
];
```
Loop over `staff` and call `describe()`.

**Expected Output**
```
Ravi earns 600000 per year
Priya (Manager) earns 1280000 per year
Arun is an intern earning 180000 per year
```
🤔 The array is typed `Employee[]`, so why does Priya's line show her bonus? Write the answer as a comment. (The word you're looking for is *polymorphism*.)

> 🧩 **Concepts involved:** `class` · `extends` · `super()` in the constructor · `super.method()` · Method overriding · Polymorphism (`Employee[]`) · `for...of`
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-7.2 🟡 Shapes (interface + implements)
```
interface Shape { name: string; area(): number; perimeter(): number; }
```
Implement `Circle`, `Rectangle`, and `Square extends Rectangle`.

**Input:** `Circle(7)`, `Rectangle(4, 6)`, `Square(5)`
**Expected Output (sorted by area, ascending, 2 decimals):**
```
Rectangle → area: 24.00, perimeter: 20.00
Square → area: 25.00, perimeter: 20.00
Circle → area: 153.94, perimeter: 43.98
```

> 🧩 **Concepts involved:** `interface` · `implements` · Class `extends` class · `sort()` with comparator (from TS-5.9)
> 🆕 **New for you (look up only this):** `Math.PI` · `toFixed(2)`

---

### TS-7.3 🔴 Page Element Interfaces (interface extends + multiple implements)
```
interface Locatable { selector: string; }
interface Clickable extends Locatable { click(): string; }
interface Typeable  extends Locatable { type(text: string): string; }
```
Create `class TextBox implements Clickable, Typeable` and `class Button implements Clickable`.

| Input | Expected Output |
|---|---|
| `new TextBox("#username").click()` | `Clicked on #username` |
| `new TextBox("#username").type("admin")` | `Typed 'admin' into #username` |
| `new Button("#login").click()` | `Clicked on #login` |

🎯 This is exactly how Playwright's own `Locator` is designed. You're building a baby version.

> 🧩 **Concepts involved:** `interface` · Interface `extends` · Implementing multiple interfaces · `constructor` · Template literals
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-7.4 🔴 Multi-file Module Project
**Folder structure to create:**
```
TypeScript/Practice/Module7/
 ├── models/User.ts          → export interface User { email: string; password: string }
 ├── utils/validators.ts     → export isValidEmail(), export isStrongPassword()
 └── main.ts                 → imports both and runs the checks
```
**Strong password rule:** at least 8 characters, at least 1 digit, at least 1 uppercase letter.

**Input (inside main.ts)**
```
[
  { email: "asha@test.com", password: "Secret123" },
  { email: "bad-email",     password: "weak" },
  { email: "ravi@qa.com",   password: "alllowercase1" }
]
```
**Expected Output**
```
asha@test.com → email: valid, password: strong
bad-email → email: invalid, password: weak
ravi@qa.com → email: valid, password: weak
```
⭐ **Stretch:** Make `validators.ts` use **one default export** plus one named export. How does the `import` line change?

> 🧩 **Concepts involved:** Modules `export` / `import` · `interface` · Functions · `includes()` / `endsWith()` · Looping over a string's characters · `for...of`
> 🆕 **New for you (look up only this):** relative import paths across folders (`../models/User`) · `export default` (stretch)

---

## Module 8: Data Structures & Regex (Day 8)

### TS-8.1 🔴 Finish `MyArray`
Your `Day8/ArrayProblem.ts` only has `push`. Add `get(index)`, `pop()`, `delete(index)` and `print()`.

**Input**
```
const arr = new MyArray();
arr.push("a"); arr.push("b"); arr.push("c"); arr.push("d");
console.log(arr.pop());
console.log(arr.delete(1));
console.log(arr.get(1));
console.log(arr.length);
arr.print();
```
**Expected Output**
```
d
b
c
2
{ '0': 'a', '1': 'c' }
```
⚠️ After `delete(1)`, every item after index 1 must **shift left**, and the last key must be removed.

> 🧩 **Concepts involved:** `class` · Index-signature object (`{ [index: number]: any }`) · Tracking `length` · `for` loop to shift items left · Return values
> 🆕 **New for you (look up only this):** the `delete` operator (removes a key from an object)

---

### TS-8.2 🟢 Max + All Indexes
| Input | Expected Output |
|---|---|
| `findMax([100, 200, 300, 150])` | `2 is the index of 300` |
| `allIndexesOf([5, 3, 5, 1, 5], 5)` | `[ 0, 2, 4 ]` |

> 🧩 **Concepts involved:** `for` loop · Comparison · `push()` · Functions with return values
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

### TS-8.3 🟡 Regex for Testers
Your `Day7/Regular_Expression_explanation.pdf` covers the theory. Here's the practice.

| Task | Input | Expected Output |
|---|---|---|
| Valid Indian mobile (10 digits, starts with 6-9) | `"9876543210"` | `true` |
| | `"1234567890"` | `false` |
| | `"98765"` | `false` |
| Extract all numbers | `"Showing 1 to 10 of 57 entries"` | `[ 1, 10, 57 ]` (as **numbers**, not strings) |
| Extract order ID | `"Your order #ORD-48213 has been placed"` | `ORD-48213` |
| Extract a percentage | `"CPU: 37.5% used"` | `37.5` |

🎯 You'll reuse the "extract all numbers" one in Playwright challenge `PW-7.1`.

> 🧩 **Concepts involved:** Regular expressions from your Day7 PDF: character classes `[6-9]`, `\d`, quantifiers `{n}`, `+`, anchors `^` `$`, global flag `g` · `map(Number)`
> 🆕 **New for you (look up only this):** `regex.test()` · `string.match()` · reading the match result (`match[0]`) · `parseFloat()`

---

### TS-8.4 🔴 Stack + Balanced Brackets
Build `class Stack<T>` with `push`, `pop`, `peek`, `isEmpty`, then use it.

| Input | Expected Output |
|---|---|
| `"{[()]}"` | `true` |
| `"{[(])}"` | `false` |
| `"(("` | `false` |
| `""` | `true` |

💡 `<T>` is called a **generic**. Look it up. It's the reason you can write `Locator[]` or `Promise<string>`.

> 🧩 **Concepts involved:** `class` · Arrays `push()` / `pop()` · `for...of` over a string · `switch` or `if` · Stack idea (last in, first out)
> 🆕 **New for you (look up only this):** generics `<T>`

---

## Module 9 🌉 Bridge: async / await
> This isn't in your TypeScript folder yet, but **every single line of Playwright depends on it**. Do this module before starting Playwright. You'll see why when you reach the Bug Hunt.

### TS-9.1 🟢 Sleep
Write `sleep(ms: number): Promise<void>` using `setTimeout`.

**Input**
```
console.log("Start");
await sleep(1000);
console.log("After 1 second");
```
**Expected Output** (the 2nd line appears ~1s later)
```
Start
After 1 second
```

> 🧩 **Concepts involved:** `async` / `await` (you write it in every Playwright test) · `setTimeout` (Day12) · Arrow functions
> 🆕 **New for you (look up only this):** creating your own `new Promise((resolve) => ...)`

---

### TS-9.2 🟡 Fake API Call (resolve / reject + try/catch)
`fetchUser(id: number): Promise<string>` waits 1s, then:
- `id > 0` → resolves `"User <id>: Asha"`
- otherwise → rejects with `"Invalid user id"`

**Expected Output**
```
User 1: Asha
Error: Invalid user id
```

> 🧩 **Concepts involved:** `async` function · `await` · Template literals
> 🆕 **New for you (look up only this):** `new Promise((resolve, reject) => ...)` · `try / catch`

---

### TS-9.3 🔴 Sequential vs Parallel
Call `fetchUser(1)`, `fetchUser(2)` and `fetchUser(3)`:
1. one after another with `await` → print the time taken
2. all at once with `Promise.all` → print the time taken

**Expected Output (times will vary slightly)**
```
Sequential: ~3000ms
Parallel:   ~1000ms
```

> 🧩 **Concepts involved:** `await` in sequence · `Promise.all` (Day11 download/new-tab specs)
> 🆕 **New for you (look up only this):** `Date.now()` for measuring time

### TS-9.4 🔴 The Missing `await`
**Input:**
```
async function demo() {
  sleep(1000);
  console.log("Done");
}
```
1. Predict **in a comment** when "Done" prints. Then run it.
2. Fix it so "Done" prints after 1 second.
3. In one sentence: what would happen if you wrote `page.fill(...)` without `await` in a Playwright test?

> 🧩 **Concepts involved:** `async` / `await` · What happens when `await` is missing
> 🆕 **New for you (look up only this):** none, everything here is from your files

---

## 🏆 Boss Challenge: Test Report Generator
Combine everything: interface, class, array methods, strings, number formatting.

**Create**
```
interface TestResult {
  name: string;
  module: string;
  status: "passed" | "failed" | "skipped";
  durationMs: number;
  error?: string;
}
class TestSuite { addResult(), getSummary(), getFailed(), getSlowest(), printReport() }
```

**Input**
```
{ name: "Login with valid user",       module: "Auth",    status: "passed",  durationMs: 1200 }
{ name: "Login with invalid password", module: "Auth",    status: "passed",  durationMs: 950 }
{ name: "Add item to cart",            module: "Cart",    status: "failed",  durationMs: 3400, error: "Timeout 3000ms exceeded" }
{ name: "Remove item from cart",       module: "Cart",    status: "passed",  durationMs: 1800 }
{ name: "Checkout with UPI",           module: "Payment", status: "skipped", durationMs: 0 }
{ name: "Checkout with card",          module: "Payment", status: "failed",  durationMs: 5200, error: "Expected 'Order placed' but got 'Payment declined'" }
```

**Expected Output (exact)**
```
===== Test Report =====
Total: 6 | Passed: 3 | Failed: 2 | Skipped: 1
Pass rate: 60.00%
Total duration: 12.55s
Slowest test: Checkout with card (5.20s)

Failed tests:
 ✗ [Cart] Add item to cart → Timeout 3000ms exceeded
 ✗ [Payment] Checkout with card → Expected 'Order placed' but got 'Payment declined'

By module:
 Auth: 2/2 passed
 Cart: 1/2 passed
 Payment: 0/2 passed (1 skipped)
```
Rules:
- Pass rate excludes skipped tests: `passed / (total - skipped)`
- **No hard-coded numbers** in the report. Everything is calculated from the data.
- Module names must come from the data, not from a hard-coded list.

⭐ **Stretch:** Put `TestResult` and `TestSuite` in separate files and import them, like a real framework.

> 🧩 **Concepts involved:** `interface` · Optional property `?` · String-literal union · `class` with an array property · `filter()` · `reduce()` · `map()` · Finding a max · Object as a counter (TS-5.2) · `for...of` · Template literals
> 🆕 **New for you (look up only this):** nothing beyond earlier modules (`toFixed()` from TS-6.5 / 7.2)

---

> ✅ Finished all of these? Move on to **`Playwright_Challenges.md`**.
