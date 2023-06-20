

const apple = 15.678; 
const carrot = 123.965;
const cabbage = 90.2345;


console.log('Apple =',apple);

console.log("Carrot =",carrot);

console.log(`Cabbage =`,cabbage);

// console.log(Math.round(apple),Math.round(carrot),Math.round(cabbage));

const number = [apple, carrot, cabbage];

console.log("Max number:", Math.max(...number), "Min number", Math.min(...number));

const generalPrice = apple + carrot + cabbage;
console.log("General price:", generalPrice);

console.log("Price without a trace:", "\nApple:", Math.round(apple), "\nCarrot:",Math.round(carrot), "\nCabbage:",Math.round(cabbage));
const generalPricceWithoutTrace = Math.round(apple) + Math.round(carrot) + Math.round(cabbage);
console.log("General price without trace:", generalPricceWithoutTrace);

const priceRoundedToHundret = Math.round(generalPricceWithoutTrace/100)*100; 

console.log("Price rounded to hundrets:", priceRoundedToHundret);

let wholeSum = Math.floor(generalPrice);
console.log(wholeSum);
let bool = (wholeSum%2)==0 ? true : false;
console.log('Boolean',bool);

const bayerPays = 500 
const theRest = bayerPays - generalPricceWithoutTrace;

console.log('The rest when bayer is paying 500:', theRest);

const avaragePrice = Math.floor((generalPrice / 3) * 100) / 100;
console.log('Price with two decimal places:', avaragePrice);



const randomDiscount = (Math.random() * 50).toFixed(0);
console.log('Random discount:', randomDiscount);

const customerDiscount = (generalPrice - generalPrice * randomDiscount / 50).toFixed(2);
console.log('Customer discount:', customerDiscount, 'hrn');

const priceWithDiscount = generalPrice - customerDiscount;
const priceWithDiscountWithoutTrace = Math.floor((priceWithDiscount / 3) * 100) / 100;
console.log('Price with discount:', priceWithDiscountWithoutTrace);

const profit = (generalPrice / 2 - (generalPrice * randomDiscount / 50)).toFixed(2);
console.log('Profit:', profit);
 


const allCalculations = `General price: ${generalPrice}, Max number: ${Math.max(...number)}, Min number: ${Math.min(...number)},

General price without trace: ${generalPricceWithoutTrace}, Price rounded to hundrets: ${priceRoundedToHundret}, Boolean: ${bool},

The rest when bayer is paying 500: ${theRest}, Price with two decimal places: ${avaragePrice}, Random discount: ${randomDiscount},

Customer discount: ${customerDiscount}hrn, Price with discount: ${priceWithDiscountWithoutTrace}, Profit: ${profit}`;

console.log(allCalculations)