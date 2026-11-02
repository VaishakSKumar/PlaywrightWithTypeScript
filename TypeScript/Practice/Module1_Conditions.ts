/*
TS-1.1 🟢 Test Run Verdict
Goal: Decide whether a build can be released based on its pass rate.

Rules
passRate = (passed / total) * 100
>= 90 → PASS - Release ready
>= 75 and < 90 → PASS - Needs review
< 75 → FAIL - Block release
total === 0 → No tests executed (check this first. Why? Think about dividing by zero.)

Input (passed, total)	Expected Output
(45, 50)	Pass rate: 90% → PASS - Release ready
(30, 40)	Pass rate: 75% → PASS - Needs review
(10, 20)	Pass rate: 50% → FAIL - Block release
(0, 0)	No tests executed

✅ Must use: type annotations on every variable, if / else if / else, template literals.

🧩 Concepts involved: Variables & type annotations (number, string)
 · Arithmetic operators (/, *) · 
 Comparison operators (>=, <, ===) ·
  Logical && · if / else if / else · 
  Template literals 🆕 New for you (look up only this): none,
   everything here is from your files

*/

const passed:number=45;
const total:number=50;
const passRate:number = (passed / total) * 100
if (passRate>=90) {
   console.log("PASS - Release ready");   
} else if(passRate>= 75 && passRate< 90){
   console.log("PASS - Needs review");
} else if(passRate< 75){
   console.log("FAIL - Block release");   
} else if(total===0){
   console.log("No tests executed");   
}else{
   console.log("Invalid tests");   
}