var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var words = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sika"];
var word = "iske";
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
            var Newword = word.replace(word.charAt(i), alfabhet.charAt(j));
            if (isWordinList(Newword) == true) {
                results.push(Newword);
            }
            console.log(word);
        }
    }
}
function isLettersreplaced(word) {
    for (var i = 0; i < word.length; i++) {
        var letter1 = word.charAt(i);
        var letter2 = word.charAt(i + 1);
        var z = "";
        var arra = void 0;
        arra = __spreadArrays(word);
        console.log(arra);
        z = letter1;
        letter1 = letter2;
        letter2 = z;
        console.log(word);
        // if(isWordinList(Newword) == true) {
        //    results.push(Newword);
        // }
    }
}
//console.log(isOneLetterError(word));
console.log(isLettersreplaced(word));
console.log(results);
