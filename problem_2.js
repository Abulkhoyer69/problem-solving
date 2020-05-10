//Source: URI Judge (1002)
//The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159:

//Calculate the area using the formula given in the problem description.

//Input
//The input contains a value of floating point (double precision), that is the variable R.

let R = prompt("put the value of R")
parseFloat(R)
let pie = 3.14159
let A = pie * R * R;
console.log(`A = ${A}\n`)