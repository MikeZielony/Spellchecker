var words = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sika"];
var word = "sike";
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
console.log(isOneLetterError(word));
console.log(results);
