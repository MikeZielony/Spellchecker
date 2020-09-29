const words: string[] = ["lake", "lock", "lama", "lose", "luck"];
let word: string = "like";
const alfabhet: string = 'abcdefghijklmnopqrstuvwxyz';


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
             word.charAt(i) = alfabhet.charAt(j)
            console.log(word)
        }
    }
}



console.log(isOneLetterError(word));