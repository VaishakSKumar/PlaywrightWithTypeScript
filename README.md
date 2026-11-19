# Playwright with TypeScript 🎭

A day-by-day learning repository covering two tracks:

1. **TypeScript fundamentals**: language basics through object-oriented programming.
2. **Playwright test automation**: UI test automation with `@playwright/test`, from locators to data-driven tests.

Each `DayN` folder holds the concepts and lab assignments for that session. Many lab folders also include the original test-case document as a PDF.

---

## 📂 Project Structure

```
PlaywrightWithTypeScript/
├── TypeScript/            # TypeScript language exercises (Day1 – Day8)
├── Playwright/            # Playwright test project
│   ├── tests/             # Test specs, organised by day (Day1 – Day16)
│   ├── playwright.config.ts
│   ├── tsconfig.json
│   └── package.json       # @playwright/test, @types/node
├── Download/              # Test data & generated files (downloads, storage state, JSON/CSV/XLSX data)
├── package.json           # Shared data-parsing libs: csv-parse, xlsx
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [TypeScript](https://www.typescriptlang.org/) | Language |
| [Playwright Test](https://playwright.dev/) `^1.63` | Browser automation & test runner |
| Node.js | Runtime |
| [csv-parse](https://www.npmjs.com/package/csv-parse) | Reading CSV test data |
| [xlsx](https://www.npmjs.com/package/xlsx) | Reading Excel test data |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- Git

### Installation

```bash
git clone <repo-url>
cd PlaywrightWithTypeScript

# Root dependencies (csv-parse, xlsx) used by the data-driven tests
npm install

# Playwright project dependencies
cd Playwright
npm install
npx playwright install      # download browser binaries
cd ..
```

---

## ▶️ Running Playwright Tests

> **Important:** run tests from the **repository root**. Several specs use paths relative to the root, such as `./Download/...` and `Playwright/tests/Day11/testdata/...`.

```bash
# Run all tests
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts

# Run one day's tests
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts Day12

# Run a single spec file
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts Day16/parameter4_CSV.spec.ts

# Run in headed mode / UI mode
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts --headed
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts --ui

# List tests without running them
npx --prefix Playwright playwright test -c Playwright/playwright.config.ts --list

# Open the last HTML report
npx --prefix Playwright playwright show-report
```

### Configuration highlights (`Playwright/playwright.config.ts`)
- `testDir: ./tests`
- `fullyParallel: true`
- Browser project: **Chromium** (Desktop Chrome)
- Reporter: **HTML**
- Trace: `on-first-retry`
- On CI: `retries: 2`, `workers: 1`, `forbidOnly` enabled

---

## 🎭 Playwright Track: Day-wise Topics

| Day | Topic | Spec files | Practice site(s) |
|---|---|---|---|
| **Day 1** | First test, page title/assertions, Playwright locators (`getByRole`, `getByText`, `getByLabel`, …) | `myFirstTest.spec.ts`, `locatorsPlaywright.spec.ts` | demowebshop.tricentis.com, sdetqa.vercel.app |
| **Day 2** | Locator filters (`filter`, `hasText`, `has`), `data-testid` | `FiltersAssignment.spec.ts` | sdetqa.vercel.app/filters_practice |
| **Day 3** | Form data-entry validation: inputs, radio buttons, checkboxes, submit | `Datavalidation.spec.ts` | sdetqa.vercel.app |
| **Day 4** | Dropdowns (single, multi-select, sorted) and product sorting lab | `DropdownsValidation.spec.ts`, `Lab_BrowserStack.spec.ts` | sdetqa.vercel.app, bstackdemo.com |
| **Day 5** | Auto-suggest dropdowns, Bootstrap/hidden dropdowns, static web tables | `LabExerciseAutomatingAutoSuggestDropdownInFlipkart.spec.ts`, `TC_Bootstrap_Hidden_Dropdown_OrangeHRM.spec.ts`, `TestScenarios_Static_Web_Table.spec.ts` | flipkart.com, OrangeHRM demo, sdetqa.vercel.app |
| **Day 6** | Web table with CRUD validation | `WebTable_With_CRUD_Validation.spec.ts` | sdetqa.vercel.app |
| **Day 7** | Dynamic web tables, pagination tables | `DynamicWebTablesTestCases.spec.ts`, `PageNationWebTables.spec.ts` | sdetqa.vercel.app, datatables.net |
| **Day 8** | End-to-end flight booking lab | `Lab_Flight_Booking.spec.ts` | (see spec) |
| **Day 9** | Date pickers (navigation, select, date range), dummy ticket booking | `TC_SdetqaDatePicker.spec.ts`, `Lab_Book_A_Dummy_Flight_Ticket.spec.ts` | sdetqa.vercel.app, dummyticket.com |
| **Day 10** | JavaScript dialogs (alert, confirm, prompt), Booking.com date picker | `HandleDialog.spec.ts`, `TC_Bookingcom_Date_Picker.spec.ts` | sdetqa.vercel.app, booking.com |
| **Day 11** | File download & PDF open, new tabs/windows, single & multiple file upload | `FileDownload.spec.ts`, `NewTabNewWindowFileUpload.spec.ts` | sdetqa.vercel.app |
| **Day 12** | Mouse actions (click, right-click, hover, double-click), keyboard actions, drag & drop, range slider, scrolling & infinite scroll | `MouseActions.spec.ts`, `KeyboardActions.spec.ts`, `Lab_Assignment_Drag_And_Drop.spec.ts`, `Lab_Automate_A_Price_Range_Slider.spec.ts`, `Scrolling_Page.spec.ts`, `Scroll_Infinite_Page.spec.ts`, `SelectScrollInfinite.spec.ts` | sdetqa.vercel.app, guru99, gotranscript.com, worldometers.info, booksbykilo.in |
| **Day 13** | SVG elements and Shadow DOM | `SVG_ShadowDOM.spec.ts` | sdetqa.vercel.app |
| **Day 14** | Frames and nested iframes (inputs, radio, checkbox, embedded Google Form) | `Lab_Assignement_Handling_Frames.spec.ts` | ui.vision/demo/webtest/frames |
| **Day 15** | Cookies, local storage and session storage; saving and re-using `storageState` | `Cookies_Storage.spec.ts`, `local_storage.spec.ts`, `Local_Cookie_Storage.spec.ts`, `session_storage.spec.ts`, `Session_Storage_Save.spec.ts` | sdetqa.vercel.app/login_app |
| **Day 16** | Parameterised / data-driven tests from arrays, JSON, CSV and Excel; FD calculator lab | `parameter1.spec.ts` … `parameter5_XLSX.spec.ts`, `Lab_Assignment_Parameter_Test_FD_Calculator.spec.ts` | demowebshop.tricentis.com, sdetqa.vercel.app/fd-calculator |

`tests/example.spec.ts` is the default sample generated by `npm init playwright`.

---

## 📊 Test Data (`Download/`)

| File | Used by | Purpose |
|---|---|---|
| `json_data.json` | `Day16/parameter3_JSON.spec.ts` | Login credentials (JSON) |
| `data.csv` | `Day16/parameter4_CSV.spec.ts` | Login credentials (CSV) |
| `data.xlsx` | `Day16/parameter5_XLSX.spec.ts` | Login credentials (Excel) |
| `FD-jsonData.json`, `FD-Calculator-CSV.csv`, `FD-Calculator-XLSX.xlsx` | `Day16/Lab_Assignment_Parameter_Test_FD_Calculator.spec.ts` | FD calculator inputs/expected values |
| `cookiesFile.json` | `Day15/Cookies_Storage.spec.ts` | Saved cookies (generated) |
| `admin_data.json`, `user_data.json` | `Day15/local_storage.spec.ts` → `Local_Cookie_Storage.spec.ts` | Saved `storageState` (generated) |
| `sessiondata.json` | `Day15/session_storage.spec.ts` → `Session_Storage_Save.spec.ts` | Saved session storage (generated) |
| `sample.txt` | `Day11/FileDownload.spec.ts` | Downloaded file (generated) |

Upload fixtures for Day 11 and Day 13 are in `Playwright/tests/Day11/testdata/`.

### Notes on Day 15 (storage state)
- `local_storage.spec.ts` and `session_storage.spec.ts` are **helper scripts**. They launch a browser, log in, and write the state files above. Run them **before** the specs that consume those files.
- `Cookies_Storage.spec.ts` and `Local_Cookie_Storage.spec.ts` run in **serial** mode (`test.describe.configure({ mode: "serial" })`).

### ⚠️ Known caveat
`Day11/NewTabNewWindowFileUpload.spec.ts` uses **absolute Windows paths** (`C:/Users/.../testdata/...`) for file uploads. Update these paths (or switch to `path.join(__dirname, "testdata", ...)`) when running on another machine.

---

## 📘 TypeScript Track: Day-wise Topics

| Day | Topics Covered | Files |
|---|---|---|
| **Day 1** | Basics: variables, types, conditional statements | `FirstProgram.ts`, `LabAssignmentsConditionalStatements.ts` |
| **Day 2** | Looping statements (`for`, `while`, `do...while`) | `LabAssignmentsLoopingStatements.ts` |
| **Day 3** | Functions: named, anonymous and arrow; optional/default/rest parameters; callbacks; overloading | `NamedFunction.ts`, `AnonymousFunction.ts`, `CallBackAndOverloadingFunction.ts`, `LabAssignmentsFunctions.ts` |
| **Day 4** | Arrays & tuples | `Arrays.ts`, `ArrayMethods.ts` |
| **Day 5** | Array methods (`push`, `pop`, `splice`, `slice`, `map`, `filter`, `reduce`, `forEach`) and string methods | `ArrayMethods2.ts`, `Strings.ts`, `LabAssignmentsArraysAndStrings.ts` |
| **Day 6** | Objects, `type` aliases, intersection types, classes, constructors, method/constructor overloading, `readonly`/`static`/optional properties | `Objects.ts`, `MethodAndConstructorOverloading.ts`, `OptionalStaticReadOnlyProperty.ts` |
| **Day 7** | OOP: inheritance, interfaces, modules (`import`/`export`) | `Inheritence.ts`, `Interface.ts`, `Modules.ts`, `Main.ts` |
| **Day 8** | Problem solving: custom array class, finding a minimum, regular expressions | `ArrayProblem.ts`, `RegularExpression.ts` |

### Running a TypeScript file

```bash
# Option 1: compile then run
npm install -g typescript
tsc TypeScript/Day1/FirstProgram.ts
node TypeScript/Day1/FirstProgram.js

# Option 2: run directly
npx tsx TypeScript/Day1/FirstProgram.ts
```

---

## 🧠 Key Skills Demonstrated

- Writing robust locators (role, text, label, test-id, CSS/XPath, filters, chaining)
- Assertions with `expect` (visibility, text, count, values, attributes)
- Handling dropdowns, auto-suggestions, date pickers, tables (static, dynamic, paginated, CRUD)
- Dialogs, popups, new tabs/windows, file upload/download
- Mouse & keyboard interactions, drag & drop, sliders, scrolling and infinite scroll
- SVG, Shadow DOM and nested iframes
- Authentication re-use with cookies, local storage, session storage and `storageState`
- Data-driven testing from inline arrays, JSON, CSV and Excel
- Test organisation with `test.describe`, `beforeEach` and serial mode

---

## 🎯 Purpose

This is a personal learning repository. It tracks my progress, organised by day, from TypeScript basics to hands-on Playwright UI automation.

*Feedback and suggestions are always welcome!*
