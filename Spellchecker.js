"use strict";
var words = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sike"];
var word = "lakeloek";
var alfabhet = 'abcdefghijklmnopqrstuvwxyz';
var results = [];
function isWordinList(word) {
    for (var i = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true;
        }
    }
}
function isOneLetterError(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < alfabhet.length; j++) {
            var newWord = word.replace(word.charAt(i), alfabhet.charAt(j));
            if (isWordinList(newWord) == true) {
                results.push(newWord);
            }
            console.log(word);
        }
    }
}
function isLettersreplaced(word) {
    var _a;
    for (var i = 0; i < word.length - 1; i++) {
        var arra = word.split("");
        _a = [arra[i + 1], arra[i]], arra[i] = _a[0], arra[i + 1] = _a[1];
        var newWord = '';
        for (var i_1 = 0; i_1 < arra.length; i_1++) {
            newWord += arra[i_1];
            if (isWordinList(newWord) == true) {
                results.push(newWord);
            }
        }
        console.log(newWord);
    }
}
function separateWords(word) {
    var newWord = '';
    // for (let i: number = 0; i < word.length - 1; i++) {
    //     newWord += word.charAt(i);
    //     console.log(newWord);
    //     if (isWordinList(newWord) == true) {
    //         results.push(newWord);
    //     }
    //     console.log(newWord);
    // }
    var i = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        console.log(newWord);
        var newString = word.substring(i + 1, word.length);
        if ((isWordinList(newWord) == true) && (isWordinList(newString) == true)) {
            results.push(newWord);
            // let newString = word.substring(i+1,word.length);
            results.push(newString);
        }
        console.log(results);
        i += 1;
    }
}
function findWordsFromList(word) {
    var newWord = '';
    // for (let i: number = 0; i < word.length - 1; i++) {
    //     newWord += word.charAt(i);
    //     console.log(newWord);
    //     if (isWordinList(newWord) == true) {
    //         results.push(newWord);
    //     }
    //     console.log(newWord);
    // }
    var i = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        // console.log(newWord);
        if (isWordinList(newWord) == true) {
            results.push(newWord);
            var newString = word.substring(i + 1, word.length);
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
function putLetterBetween(word) {
    // for (let i: number = 0; i < word.length; i++) {
    //     for (let j: number = 0; j < alfabhet.length; j++) {
    //         console.log(word);
    //         // console.log(word[i].slice(0,i)+alfabhet[j]+word[i].slice(i));
    //         console.log(alfabhet[i]);
    //     }
    // }
    var index = 0;
    var new_word = "";
    for (var j = 0; j < word.length * 2 + 1; j++) {
        if (j % 2 === 0) {
            new_word += alfabhet[index];
            continue;
        }
        new_word += word[index];
        index++;
    }
    console.log(new_word);
}
putLetterBetween("kajak");
