const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];



function getPairs(students){
    const pairs = [];
    const femaleStudents = students.filter(student => student.endsWith('а') || student.endsWith('я'));
    const maleStudents = students.filter(student => student.endsWith('ндр') || student.endsWith('ор') || student.endsWith('й'));
    const minPairsCount = Math.min(maleStudents.length, femaleStudents.length);
    
    for (let i = 0; i < minPairsCount; i++){
        pairs.push([maleStudents[i], femaleStudents[i]])
    }
    return pairs;
}
const pairs = getPairs(students);
console.log(getPairs(students));



function matchWithThemes(pairs, themes){
    const pairWithThemes = [];
    for (let i = 0; i < pairs.length; i++){
        pairWithThemes.push([pairs[i].join(' і '), themes[i]])
    }
    return pairWithThemes;
}

const pairsWithThemes = matchWithThemes(pairs, themes);
console.log(pairsWithThemes);
//console.log(matchWithThemes(getPairs(students), themes));



 function matchWithMarks(students ,marks){
     const pairWithMarks = [];
    
     for (let i = 0; i < students.length; i++){
         pairWithMarks.push([students[i], marks[i]]);
     }
     return pairWithMarks;
 } 
 const pairWithMarks = matchWithMarks(students, marks);
 console.log(matchWithMarks(students, marks));
 //console.log( matchWithThemes(getPairs(students), themes),  matchWithMarks(students, marks));

 


 function matchWithProjectMarks(pairWithThemes){
    const projectMarks = [];
    for (let i = 0; i < pairWithThemes.length; i++) {
        const randomMark = Math.floor(Math.random() * 5) + 1;
        projectMarks.push([...pairWithThemes[i], randomMark]);
      }
      return projectMarks;
 }
 const projectMarks = matchWithProjectMarks(pairsWithThemes);
 console.log(projectMarks);