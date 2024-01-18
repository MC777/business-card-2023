import tax, { calculate, myFavouriteColor } from "./calculate.js";
import differenceInDays from "date-fns";

  calculate(1);

 const result2 = calculate(2);
 console.log(result2)

console.log(myFavouriteColor)

console.log(tax)

console.log('logika w js')
if ('AAA' != 'AAA') {
    console.log('the same !!!')
}

const myButton = document.querySelector('.card__button__js')
// console.log(myButton)
const clickFunction = () => {
    
}

myButton.addEventListener('click', (e) => {
const name = document.querySelector('.card__name');
name.innerHTML = "KLIK KLIK"})
alert('before');

try {
    const result = differenceInDays(
        new Date(2020, 5, 1),
        new Date(2020, 2, 1)
      )
} catch(e) {
    console.log(e);
}

alert('OK');
console.log(result)
console.log('the same !!!')