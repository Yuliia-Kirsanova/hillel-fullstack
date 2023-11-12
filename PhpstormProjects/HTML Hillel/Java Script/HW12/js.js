//Напишіть функцію, яка приймає масив чисел та повертає суму всіх елементів.
function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result;
}

let numbers = [1, 5, 7, 10, 10];
let totalSum = sumArray(numbers);
console.log(totalSum);

//2 Створіть об'єкт "користувач" з полями "ім'я", "вік" та "статус". Напишіть функцію, яка приймає цей об'єкт і повертає
//рядок у форматі "Ім'я: [ім'я], Вік: [вік], Статус: [статус]".

let me = {
    name: "Yuliia",
    age: 31,
    status: "Student"
}
function callMe (myInfo) {
    let a = myInfo.name, b= myInfo.age, c = myInfo.status;
    let result = a+" "+b+" "+c;
    return result
}
console.log(callMe(me));


//3 Напишіть функцію, яка приймає рядок і повертає новий рядок із перевернутим порядком символів.
function viceVersa (anyWord){
    let i = anyWord.split('');
    return (i);
}
let a = "Spring";
let b =viceVersa(a).reverse();
console.log(b);
//Створіть об'єкт"автомобіль" з полями "марка", "модель" та "рік випуску". Напишіть функцію, яка приймає цей об'єкт
// і виводить інформацію про автомобіль у консоль.

let anyVehicle= {
    brand: 'Subaru',
    model: 'Outback',
    year: 2022,
}
function myVehicle(x){
    console.log("This car is" + " " + x.brand +" "+x.model + " " + "of" + " " + x.year);
}
myVehicle(anyVehicle);

//Створіть просту гру "Вгадай число". Генеруйте випадкове число від 1 до 100, а потім пропонуйте користувачеві вгадати
// це число, підказуючи "більше" або "менше" до тих пір, поки користувач не вгадає число.
// Використовуйте  prompt для того, щоб запитати у коритсувача його варіант, та  alert для виведення підказок
// (більше, менше)

function randomNumber (min, max) {
    return Math.floor(Math.random() * max);
}
let getRandom = randomNumber(1,100);
console.log(getRandom)
let f = 1;
while (f <= 100){
    let enteredNumber = parseInt(prompt("Enter your number from 1 till 100"));
    if (enteredNumber===getRandom) {
        alert("You win")
        break
    }
    else if (enteredNumber>getRandom){
        alert("Try smaller number")
    }
    else if (enteredNumber<getRandom){
        alert("Try bigger number")
    }
    f++
    }



