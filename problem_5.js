//Source: URI Judge (1005)
//Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point. Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. Don’t forget the space before and after the equal sign.

//Input
//The input file contains 2 floating points' values with one digit after the decimal point.

let a = prompt('type the value of a')
let b = prompt('type the value of b')
let AVG = (parseFloat(a) * 3.5 + parseFloat(b) * 7.5) / (3.5 + 7.5)
console.log(`MEDIA = ${AVG}\n`)
