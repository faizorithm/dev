
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
const addBtn = document.getElementById("addBtn");
const nameInput= document.getElementById("nameInput");
const amtInput = document.getElementById("amtInput");
const typeInput = document.getElementById("typeInput");
let income = 0;
let expense = 0;

addBtn.addEventListener("click", function () {

const amount= Number(amtInput.value);
const type = typeInput.value;
if(!amount) return;
if(type === "expense"){
    expense += amount;
}else{
    income += amount;
}
const balance = income-expense;
document.getElementById("incomeTotal").textContent = "$" + income;
document.getElementById("expenseTotal").textContent = "$" + expense;
document.getElementById("balanceTotal").textContent = "$" + balance;
nameInput.value = "";
amtInput.value = "";
});
const balance = income-expense;
document.getElementById("incomeTotal").textContent = "$" + income;
document.getElementById("expenseTotal").textContent = "$" + expense;
document.getElementById("balanceTotal").textContent = "$" + balance;
nameInput.value = "";
amtInput.value = "";
});
