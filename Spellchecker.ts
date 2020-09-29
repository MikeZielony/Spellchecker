const words: string[] = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sika"];
let word: string = "iske";
const alfabhet: string = 'abcdefghijklmnopqrstuvwxyz';
let results: string[] = [];


function isWordinList (word: string) {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true
        }
    }
}
function isOneLetterError (word: string) {
    for(let i:number=0; i<word.length;i++) {
        for(let j:number=0; j<alfabhet.length; j++){
           let  Newword: string = word.replace(word.charAt(i),alfabhet.charAt(j));
            if(isWordinList(Newword) == true) {
                results.push(Newword)

            }
            console.log(word);
        }
    }
}
function isLettersreplaced (word:string) {
    for(let i:number=0; i<word.length;i++) {
        let arra: string[];
        arra = [...word];
        console.log(arra);

        console.log(word);
       // if(isWordinList(Newword) == true) {
        //    results.push(Newword);

       // }
    }

}

//console.log(isOneLetterError(word));
console.log(isLettersreplaced(word));
console.log(results);

