function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}



const fullName = getFullName('Taras', 'Konoshenko');


console.log(fullName);


 
function min(...args) {
    let minValue;
    
    for (let i = 0; i < args.length; i++){
       if(minValue === undefined){
            minValue = args[i];
            continue; 
        }

       if (args[i] < minValue){
            minValue = args[i]
        }

    }
    
    return minValue;

}

console.log(min(1,2,-3,4,15,-8,70,9));






function min(...args) {
    return Math.min(...args)    
}

console.log(min(1,2,-3,4,15,-8,70,9));



function GetMaxDigit(number) {
    
    const numb = String(number).split('')
    
    let maxValue;
    
    for (let i = 0; i < numb.length; i++){
        if(maxValue === undefined) {
            maxValue = numb[i];
            continue;
        }

        if (numb[i] > maxValue){
            maxValue = numb[i];
        }
    }

    return Number(maxValue)
}

console.log(GetMaxDigit(123456799));





/////////////////////////////////////////////////////////

function countLetters (sentence, letter) {
    let counter = 0

    for(let i = 0; i < sentence.length; i++){
        if (sentence[i] === letter){
            counter++
        }
    }
    return counter
}

console.log(countLetters('Я лвлвьвьвтвуогао ашівщзаліа', 'в'));


//////////////////////////////////////////////////////////

function toUpperCase (sentence){
    let uppercase = String(sentence).toUpperCase('vlad');

    let senten = 'vlad';

    for (let i = 0; i < uppercase.length; i++){
        if (senten === undefined){
            senten = sentence[0];
            continue;
        } 
}
}

console.log(toUpperCase, senten)


///////////////////////////////////////////////////////////







