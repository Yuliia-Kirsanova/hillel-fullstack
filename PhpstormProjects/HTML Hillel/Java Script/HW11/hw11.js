//1
let number = -5;
if (number >=0){
    console.log(true)
}
else {
    console.log(false)
}
//2
let text = "New text";
if (text === ""){
    console.log("Empty space")
}
else {
    console.log("Text is added")
}
//3
let x = 9, y = 4;
if (x%y===0&&x%2===0){
    console.log("X is both Even and Multiple of y")
}
else{
    console.log("X is Odd and Non-multiple of y")
}
//4
let a = 1;
while (a<=100){
    console.log(a);
    a++;
}
//5
for (let b = 1; b <= 10; b++){
    let result = b*5;
    console.log(result);
}
//6
for(let c = 1; c<=50; c++) {
    if (c%2===0){
        console.log(c);
    }
}
//7
for (let d = 1; d<=5; d++){
    let string = '';
    for (let f = 1; f<=d; f++){
        string += '*'
    }
    console.log(string)
}
//8
for (let n = 1; n <= 10; n++){
    for (let m= 1; m <= 10; m++){
        console.log(n*m);
    }
}
//9
for (let g = 1; g<=5; g++){
    let line = '';
    for (let h = 1; h<=g; h++){
        line +=g;
    }
    console.log(line)
}





