function getRandomArray(length, min, max){
    let arr = [];
    for (let i = 0; i < length; i++){
        let randomArray = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomArray);
    }  
    return arr;
}
const result = getRandomArray(10, 1, 20);
console.log(result);


//----------------------------------------------------------------

function getAverage(...numbers){
    const sum = numbers.reduce((total, number) => {
        return total + number;
    },0);
    return sum / numbers.length
}
console.log(getAverage(5, 69, 51, 2, 44, 6, 3, 2, 100, 78, 5));

//----------------------------------------------------------------


function filterEvenNumbers(...numbers){
    const filterNumbers = numbers.filter(number => number % 2 !== 0)
    return filterNumbers;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//----------------------------------------------------------------


function getDividedByFive(...numbers){
    const dividedByFive = numbers.filter((number) => {
        return number % 5 == 0; 
    })
    return dividedByFive
}

console.log(getDividedByFive(1, 5, 55 ,33, 45, 15, 30, 12, 44))

//----------------------------------------------------------------

function replaceBadWords(string){
    const badWords = ['fuck', 'shit', 'ass']
    const words = string.split(" ")

    for (let i = 0; i < words.length; i++){

        for (let j = 0; j < badWords.length; j++){
            if (words[i].includes(badWords[j])){
                words[i] = words[i].replace(badWords[j], '*'.repeat(words[i].length) )
            }
        }
    }

    return words.join(' ')
}

console.log(replaceBadWords('Are you fuck ing kidding my ass ?'))


//----------------------------------------------------------------

function divideByThree(string) {
    const syllables = [];
    const dividedWord = string.split('');

    for (let i = 0; i < dividedWord.length; i += 3){
        const syllable = dividedWord.slice(i, i + 3).join('');
        syllables.push(syllable);
    }
    return syllables
}

console.log(divideByThree('live'))










