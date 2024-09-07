function duplicateCount(inputstring){
    let spell = inputstring.split("");
    const countword = {};
    spell.forEach(element => {
        countword[element] = (countword[element] || 0 ) +1;
    })


    for ( const [word,count] of Object.entries(countword)){
            if(count>1){
                const words = [word];
                return words;
            }
            else{
                return "no characters repeats more than once";
            }
        }
        }
let result = duplicateCount("abcbbbcd")
console.log(result);