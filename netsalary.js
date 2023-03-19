//prompt user to enter salary and benefits.
const basicSalary = prompt("enter basic salary:");
const benefits = prompt("enter employee's benefits:");

// groos calcualtes basic salary and benefits
let gross = basicSalary + benefits;

// This is a function that calculates the NHIF deductions.
function NhifDeduction(gross){
    let nhif = 0;
    if(gross <= 5999){
        nhif = 150
    }
    else if(gross >= 6000 && gross <= 7999){
        nhif = 300;
    }
    else if(gross >= 8000 && gross <= 11999){
        nhif = 400;
    }
    else if(gross >= 12000 && gross <= 14999){
        nhif = 500;
    }
    else if(gross >= 15000 && gross <= 19999){
        nhif = 600;
    }
    else if(gross >= 20000 && gross <= 24999){
        nhif = 750;
    }
    else if(gross >= 25000 && gross <= 29999){
        nhif = 850;
    }
    else if(gross >= 30000 && gross <= 34999){
        nhif = 900;
    }
    else if(gross >= 35000 && gross <= 39999){
        nhif = 950;
    }
    else if(gross >= 40000 && gross <= 44999){
        nhif = 1000;
    }
    else if(gross >= 45000 && gross <= 49999){
        nhif =  1100;
    }
    else if(gross >= 50000 && gross <= 59999){
        nhif = 1200;
    }
    else if(gross >= 60000 && gross <= 69999){
        nhif = 1300;
    }
    else if(gross >= 70000 && gross <= 79999){
        nhif = 1400;
    }
    else if(gross >= 80000 && gross <= 89999){
        nhif = 1500;
    }
    else if(gross >= 90000 && gross <= 99999){
        nhif =  1600;
    }
    else{
        nhif = 1700;
    }
    return nhif;

}

// This is a function that calculates for the NSSF deductions.
function NssfDeduction(gross){
    nssf = (5/100) * gross;

}
// function calcPAYE calculates PAYE for an employee
function calcPAYE(gross){
    nhif = calcNhifDeduction(gross);
    nssf = calcNssfDeduction(gross);
    taxablePay = gross - (nhif + nssf);

    if (taxablePay <= 24000){ 
        paye = (10/100) * taxablePay;
    } else if (taxablePay >= 24001 && taxablePay <= 32333 ){
        paye = (25/100) * taxablePay;
    } else {
        paye = (30/100) * taxablePay;
    }
    return paye;

}
// This function calculates the net salary.
function calcNetSalary(gross){
nhif = NhifDeduction(gross);
nssf = NssfDeduction(gross);
deductions = nhif + nssf;
paye = calcPAYE(gross);
 netSalary = gross - (paye + nhif + nssf);
 return netsalary
}

//outputs the gross salary, PAYE NHIF and NSSF deductions.
console.log(`Your gross salary is ${gross}, your Paye is ${calcPAYE(gross)} your NHIF deducations are ${calcNhifDeduction(gross)} your NSSF deductions are ${calcNssfDeduction(gross)} thus making your net salary ${calcNetSalary(gross)}.`);
