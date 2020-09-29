const words: string[] = ["lake", "lock", "lama", "lose", "luck", "like"];
let word: string = "sike";
const alfabhet: string = 'abcdefghijklmnopqrstuvwxyz';
let results: string[] = [];


function isWordinList (word) {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true;
        }
        return false
    }
}
function isOneLetterError (word) {
    for(let i:number=0; i<word.length;i++) {
        for(let j:number=0; j<alfabhet.length; j++){
            word = word.replace(word.charAt(i),alfabhet.charAt(j));
            if(isWordinList(word) == true) {
                results.push(word)

            }
            return word;
            console.log(word);
        }
    }
}


console.log(isOneLetterError(word));
console.log(results);