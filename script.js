// Monthly budget planner

//global variables
let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let groceriesExpense = 0;
let transportExpense = 0;
let entertainExpense = 0;
let miscExpense = 0;
let saving = 0;
let remainingBudget = 0;

//function for Salary
function addSalary() {
    let salaryInput = document.getElementById('salaryInput'); //getting from the HTML
    let salary = Number(salaryInput.value); //convert it into a Number data
    console.log(salary);

    if(salary > 0) {
        totalIncome = salary; 
        updateSummary(); //this is a function that we have to create
        salaryInput.value = '';
    }

}

//function for Rent
function addRent() {
    let rentInput = document.getElementById('rentInput');
    let rent = Number(rentInput.value);
    console.log(rent);

    if (rent > 0) {
        rentExpense = rent;
        updateSummary()
        rentInput.value = '';
    }
}

//function for Utilities
function addUtilities() {
    let UtilitiesInput = document.getElementById('utilitiesInput');
    let Utilities = Number(UtilitiesInput.value);
    console.log(Utilities);

    if (Utilities > 0) {
        utilitiesExpense = Utilities;
        updateSummary()
        UtilitiesInput.value = '';
    }
}

//function for Groceries
function addGroceries() {
    let groceriesInput = document.getElementById('groceriesInput');
    let groceries = Number(groceriesInput.value);
    console.log(groceries);

    if (groceries > 0) {
        groceriesExpense = groceries;
        updateSummary()
        groceriesInput.value = '';
    }
}

//function for Transportation
function addTransport(){
    let transportInput = document.getElementById('transportInput');
    let transport = Number(transportInput.value);
    console.log(transport);

    if (transport > 0) {
        transportExpense = transport;
        updateSummary()
        transportInput.value = '';
    }
}

//function for Entertainment
function addEntertainment() {
    let EntertainInput = document.getElementById('entertainmentInput');
    let entertain = Number(EntertainInput.value);
    console.log(entertain);

    if (entertain > 0) {
        entertainExpense = entertain;
        updateSummary()
        EntertainInput.value = '';
    }
}

//function for Miscellaneous
function addMisc() {
    let miscInput = document.getElementById('miscInput');
    let misc = Number(miscInput.value);
    console.log(misc);

    if (misc > 0) {
        miscExpense = misc;
        updateSummary()
        miscInput.value = '';
    }
}

//function for Savings
function setSavingsGoal() {
    let amount = document.getElementById('savingsInput');
    let value = Number(amount.value);
    console.log(value);

    if (value > 0){
        saving = value;
        updateSummary()
        amount.value = '';
    }
}

function calculateActualSavings() {
    if( calculateRemainingBudget()>= saving ) {
        return saving;
    } else{

        return calculateRemainingBudget();
    }  
}

function calculateTotalExpense() {
    return rentExpense + utilitiesExpense + groceriesExpense + transportExpense + entertainExpense + miscExpense;
}

function calculateRemainingBudget() {
    let remainingBudget = totalIncome - (rentExpense + utilitiesExpense + groceriesExpense + transportExpense + entertainExpense + miscExpense);
    return remainingBudget;
}


function updateSummary () {
     /* innerHTML and textContent are quite the same. the value is writing back into the HTML file. What's the difference? */

    //updating Savings
    document.getElementById('savingsGoal').innerHTML = saving;

    //updating the actual savings
    document.getElementById('actualSavings').innerHTML = calculateActualSavings();

    //updating the Monthly Summary
    document.getElementById('totalIncome').innerHTML = totalIncome; 

    //update Monthly Housing Expenses
    document.getElementById('housingExpenses').innerHTML = rentExpense + utilitiesExpense;

    //update Monthly living Expenses
    document.getElementById('livingExpenses').innerHTML = groceriesExpense + transportExpense;

    //update Monthly other Expenses
    document.getElementById('otherExpenses').innerHTML = entertainExpense + miscExpense;

    //update Monthly total Expenses
    document.getElementById('totalExpenses').innerHTML = calculateTotalExpense();

    //update Monthly remaining Expenses
    document.getElementById ('remainingBudget').innerHTML = calculateRemainingBudget();

    //updating the yearly summary
    document.getElementById('yearlyIncome').innerHTML = totalIncome * 12;

    //updating the yearly expenses
    document.getElementById('yearlyExpenses').innerHTML = calculateTotalExpense() * 12;

    yearlySavings = yearlyIncome-yearlyExpenses
    console.log(yearlySavings);
    //update potential yearly savings
    document.getElementById('yearlySavings').innerHTMl = calculateActualSavings() * 12;
}