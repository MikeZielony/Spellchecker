var words = ["lake", "lock", "lama", "lose", "luck", "like"];
var word = "sike";
var alfabhet = 'abcdefghijklmnopqrstuvwxyz';
var results = [];
function isWordinList(word) {
    for (var i = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true;
        }
        return false;
    }
}
function isOneLetterError(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < alfabhet.length; j++) {
            word = word.replace(word.charAt(i), alfabhet.charAt(j));
            if (isWordinList(word) == true) {
                results.push(word);
            }
            return word;
            console.log(word);
        }
    }
}
console.log(isOneLetterError(word));
console.log(results);
