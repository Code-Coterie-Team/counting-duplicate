function duplicateCount(inputstring){
    let spell = inputstring.split("");
    const countword = {};
    spell.forEach(element => {
        countword[element] = (countword[element] || 0) + 1;
    })
return countword
}
let result = duplicateCount("fgbgdfbldfkbnadgfbjafg")
console.log(result);