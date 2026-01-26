
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
addBtn.addEventListener("click", function () {
  alert("Hi! You entered: " + nameInput.value + " for $" + amtInput.value);
  nameInput.value = "";
  amtInput.value = "";
});