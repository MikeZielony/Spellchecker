import {Spellchecker} from "./Services/Spellchecker";
import {Reader} from "./Utils/Reader";

let wordInput: any = document.querySelector('#word');
let proposeWordsBox: any = document.querySelector("#propose-words");
let input: any = document.querySelector('input');

input.addEventListener('change', () => {
    console.log(Reader.readFile(input.files));
});


wordInput.addEventListener('keyup', () => checkWord());
let fileReader: FileReader = new FileReader();

function checkWord() {
    // let spellchecker: any = new Spellchecker();
    setTimeout(function () {
        wordInput.value = wordInput.value.toUpperCase();
        // let results: string[] = spellchecker.putLetterBetween(wordInput.value)
        // proposeWordsBox.innerHtml = results.join("<br>")
    }, 3000);
}