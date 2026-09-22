# TypeScript Learning Journey 📘

A day-by-day collection of TypeScript exercises and concept demos, written while learning TypeScript from the ground up. Each `Day` folder captures the concepts covered that day, along with hands-on lab assignments to reinforce the topic.

## 📂 Folder Structure

| Day | Topics Covered | Files |
|---|---|---|
| **Day 1** | Basics — variables, types, conditional statements | `FirstProgram.ts`, `LabAssignmentsConditionalStatements.ts` |
| **Day 2** | Looping statements (`for`, `while`, `do...while`) | `LabAssignmentsLoopingStatements.ts` |
| **Day 3** | Functions — named & anonymous functions, arrow functions, optional/default/rest parameters, callback functions, function overloading | `NamedFunction.ts`, `AnonymousFunction.ts`, `CallBackAndOverloadingFunction.ts`, `LabAssignmentsFunctions.ts` |
| **Day 4** | Arrays & Tuples — typed arrays, array literals in functions, tuples with single/multiple/array values | `Arrays.ts`, `ArrayMethods.ts` |
| **Day 5** | Array & String methods — `push`, `pop`, `splice`, `slice`, `map`, `filter`, `reduce`, `forEach`, string manipulation methods | `ArrayMethods2.ts`, `Strings.ts`, `LabAssignmentsArraysAndStrings.ts` |
| **Day 6** | Objects & Classes — object types, `type` aliases, intersection types, classes, constructors, method/constructor overloading, `readonly`, `static`, and optional properties | `Objects.ts`, `MethodAndConstructorOverloading.ts`, `OptionalStaticReadOnlyProperty.ts` |
| **Day 7** | OOP concepts — inheritance, interfaces (including `extends`), and modules (`import`/`export`) | `Inheritence.ts`, `Interface.ts`, `Modules.ts`, `Main.ts` |

## 🧠 Concepts Covered

- **Basics**: type annotations, conditional logic, loops
- **Functions**: named/anonymous/arrow functions, optional & default parameters, rest parameters, callbacks, overloading
- **Arrays & Tuples**: typed arrays, array methods, fixed-length tuples
- **Strings**: common string manipulation methods
- **Objects & Type Aliases**: object typing, `type` aliases, intersection types
- **Classes**: constructors, `readonly`/`static`/optional properties, method & constructor overloading
- **OOP**: inheritance (`extends`, `super`), interfaces (`implements`, interface extension), modules (`import`/`export`)

## ▶️ How to Run

Each file is a standalone TypeScript program. To run any file:

```bash
# Install TypeScript globally (once)
npm install -g typescript

# Compile a file to JavaScript
tsc Day1/FirstProgram.ts

# Run the compiled JavaScript
node Day1/FirstProgram.js
```

Or run directly with [`ts-node`](https://www.npmjs.com/package/ts-node) without a separate compile step:

```bash
npm install -g ts-node
ts-node Day1/FirstProgram.ts
```

## 🎯 Purpose

This repository is part of my personal TypeScript learning practice, organized day-wise to track progress from the basics through object-oriented concepts.

## 🛠️ Tech Stack

- TypeScript

---

*Feel free to explore the code — feedback and suggestions are always welcome!*
