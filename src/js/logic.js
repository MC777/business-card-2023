import tax, { calculate, myFavouriteColor } from "./calculate.js";

//   calculate(1);

 const result = calculate(2);
 console.log(result)

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