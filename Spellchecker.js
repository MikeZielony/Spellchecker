"use strict";
exports.__esModule = true;
var CsvParser_1 = require("./Utils/CsvParser");
var words = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sike"];
var word = "lakelock";
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
console.log(findWordsFromList(word));
console.log(results);
// //console.log(isOneLetterError(word));
// console.log(separateWords(word));
// console.log(results);
console.log(CsvParser_1.CsvParser.parseDataToArray());
