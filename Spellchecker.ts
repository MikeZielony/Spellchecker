const words: string[] = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sike"];
let word: string = "lakeloek";
const alfabhet: string = 'abcdefghijklmnopqrstuvwxyz';
let results: string[] = [];


function isWordinList(word: string) {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true
        }
    }
}


function isOneLetterError(word: string) {
    for (let i: number = 0; i < word.length; i++) {
        for (let j: number = 0; j < alfabhet.length; j++) {
            let newWord: string = word.replace(word.charAt(i), alfabhet.charAt(j));
            if (isWordinList(newWord) == true) {
                results.push(newWord);

            }
            console.log(word);
        }
    }
}

function isLettersreplaced(word: string) {
    for (let i: number = 0; i < word.length - 1; i++) {
        let arra: string[] = word.split("");
        [arra[i], arra[i + 1]] = [arra[i + 1], arra[i]];
        let newWord = '';
        for (let i: number = 0; i < arra.length; i++) {
            newWord += arra[i];
            if (isWordinList(newWord) == true) {
                results.push(newWord);
            }
        }
        console.log(newWord);
    }
}

function separateWords(word: string) {
    let newWord = '';
    // for (let i: number = 0; i < word.length - 1; i++) {
    //     newWord += word.charAt(i);
    //     console.log(newWord);
    //     if (isWordinList(newWord) == true) {
    //         results.push(newWord);
    //     }
    //     console.log(newWord);
    // }
    let i: number = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        console.log(newWord);
        let newString = word.substring(i + 1, word.length);
        if ((isWordinList(newWord) == true) && (isWordinList(newString) == true)) {
            results.push(newWord);
            // let newString = word.substring(i+1,word.length);
            results.push(newString);
        }
        console.log(results);
        i += 1;
    }

}

function findWordsFromList(word: string) {
    let newWord = '';
    // for (let i: number = 0; i < word.length - 1; i++) {
    //     newWord += word.charAt(i);
    //     console.log(newWord);
    //     if (isWordinList(newWord) == true) {
    //         results.push(newWord);
    //     }
    //     console.log(newWord);
    // }
    let i: number = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        // console.log(newWord);
        if (isWordinList(newWord) == true) {
            results.push(newWord);
            let newString = word.substring(i + 1, word.length);
            if (isWordinList(newString) == true) {
                results.push(newString);
            }
        }
        console.log(results);
        i += 1;
    }

}

//console.log(isOneLetterError(word));
//   console.log(findWordsFromList(word));
//    console.log(results);

//console.log(isOneLetterError(word));
//    console.log(results);

// function putLetterBetween(word: string) {
//     for (let i: number = 0; i < word.length; i++) {
//         let arra: string[] = word.split("");
//         let newWord = '';
//         for (let j: number = 0; j < arra.length; j++) {
//             for(j=0; j<alfabhet.length;j++){
//                 arra.insert(i+1,alfabhet[j]);
//             }
//             if (isWordinList(newWord) == true) {
//                 results.push(newWord);
//             }
//         }
//         console.log(arra);
//     }

function putLetterBetween(word: string) {
    let index: number = 0;
    let new_word: string = "";
    for (let j: number = 0; j < word.length * 2 + 1; j++) {
        if (j % 2 === 0) {
            new_word += alfabhet[index];
            continue;
        }
        new_word += word[index];
        index++
    }
    console.log(new_word)

}

putLetterBetween("kajak");
