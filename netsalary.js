// Get inputs from the user: Basic salary and Benefits
let basicSalary = parseFloat(prompt("Enter basic salary: "));
let totalBenefits = parseFloat(prompt("Enter benefits: "));

// Calculate gross salary
let grossSalary = basicSalary + totalBenefits;

// Calculate taxes
let payee = 0;
if (grossSalary <= 24000) {
  payee = 0;
} else if (grossSalary <= 40180) {
  payee = (grossSalary - 24000) * 0.1;
} else {
  payee = 1618 + (grossSalary - 40180) * 0.25;
}

// Calculate NHIF deductions
let nhif = 0;
if (grossSalary <= 5999) {
  nhif = 150;
} else if (grossSalary <= 7999) {
  nhif = 300;
} else if (grossSalary <= 11999) {
  nhif = 400;
} else if (grossSalary <= 14999) {
  nhif = 500;
} else if (grossSalary <= 19999) {
  nhif = 600;
} else if (grossSalary <= 24999) {
  nhif = 750;
} else if (grossSalary <= 29999) {
  nhif = 850;
} else if (grossSalary <= 34999) {
  nhif = 900;
} else if (grossSalary <= 39999) {
  nhif = 950;
} else {
  nhif = 1000;
}

// Calculate NSSF deductions
let nssf = Math.min(0.06 * basicSalary, 2160);

// Calculate net salary
let netSalary = grossSalary - payee - nhif - nssf;

// Print results
console.log("Gross Salary:", grossSalary);
console.log("PAYEE (Tax):", payee);
console.log("NHIF Deductions:", nhif);
console.log("NSSF Deductions:", nssf);
console.log("Net Salary:", netSalary);
