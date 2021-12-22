"use strict";

class HashStorageFunc {// класс

    constructor() {
         this.hesh = {};  
    }
    addValue(key, value) { // публичный метод 
        if (!(key in this.hesh))
        this.hesh[key] = value;
    }
    getValue(key) {
        if (key in this.hesh) {
            return this.hesh[key];
        }
        console.log(key);
    }
    deleteValue(key) {
        if (key in this.hesh) {
            delete this.hesh[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.hesh);
    }
}

let drinkStorage = new HashStorageFunc();// создаем объект класса

function addDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        var alc = confirm('Напиток алкогольный?');
        var rec = prompt('Введите рецепт напитка');
        while (rec == "") {
            rec = prompt('Введите рецепт напитка');
        }
    }
    if (rec != null) {
        let alc_rec = {
            'Alcohol': (alc ? 'Да' : 'Нет'),
            'Reciepe': rec
        };
        drinkStorage.addValue(drink, alc_rec);// вызов метода addValue
    }
}

function getDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        let checkDrink = drinkStorage.getValue(drink);
        if (checkDrink) {
            alert(`
            напиток: ${drink}
            алкогольный: ${checkDrink["Alcohol"]}
            рецепт приготовления: ${checkDrink["Reciepe"]}`);
        } else {
            alert('Такого напитка не сущевствует')
        }
    }
}

function deleteDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        let checkDelete = drinkStorage.deleteValue(drink);
        if (checkDelete) {
            alert('Напиток удален')
        } else {
            alert('Такого напитка не существует')
        }
    }
}

function listOfDrink() {
    let arrayOfDrinks = drinkStorage.getKeys();
    if (arrayOfDrinks.length > 0) {
        alert(arrayOfDrinks);
    } else if (arrayOfDrinks.length == 0) {
        alert("Напитков нет");
    }
}