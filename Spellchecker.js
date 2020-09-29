var words = ["lake", "lock", "lama", "lose", "luck"];
var word = "like";
var alfabhet = 'abcdefghijklmnopqrstuvwxyz';
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
            //  word.charAt(i) = alfabhet.charAt(j)
            // console.log(word)
            var letter = word.replace(word.charAt(i), alfabhet.charAt(j));
            return letter;
            console.log(letter);
        }
    }
}
console.log(isOneLetterError(word));
