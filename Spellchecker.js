var words = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sike"];
var word = "lukc";
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
//console.log(isOneLetterError(word));
console.log(isLettersreplaced(word));
console.log(results);
