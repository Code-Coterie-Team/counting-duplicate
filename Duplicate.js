function duplicateCount(inputstring){
    let spell = inputstring.split("");
    const countword = {};
    spell.forEach(element => {
        countword[element] = (countword[element] || 0 ) +1;
    })

    const duplicate = [];
    for ( const [word,count] of Object.entries(countword)){
            if(count>1){
            duplicate.push(word);
            }
        }
        
    return duplicate.length > 0 ? duplicate : "no characters repeat more than once";
        }
let result = duplicateCount("")
console.log(result);