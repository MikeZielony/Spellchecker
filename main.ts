import {Spellchecker} from "./Services/Spellchecker";
// import {Reader} from "./Utils/Reader";

let wordInput: any = document.querySelector('#word');
let input: any = document.querySelector('input');
let spellchecker: Spellchecker;
let wordList: string[] =[];

function readFile(file: File, onLoadCallback: any) {
        let reader = new FileReader();
        reader.onload = onLoadCallback;
        reader.readAsText(file);
}

input.addEventListener('change', function(e: any) {
    readFile(input.files[0], function(e: any) {
        const file = e.target.result;
        wordList = file.split(/\r\n|\n/);
        spellchecker = new Spellchecker(wordList);
})});

wordInput.addEventListener('keyup', () => checkWord());

function checkWord() {
    setTimeout(function () {
        // wordInput.value = wordInput.value.toUpperCase();
        let results: string[] = spellchecker.putLetterBetween(wordInput.value);
        console.log(results);
        let proposeWordsBox: any = document.querySelector("#propose-words");
        console.log(proposeWordsBox);
        let resultHtml = "";
        results.forEach(word => {
            resultHtml += `<li>${word}</li>`;
        });
        proposeWordsBox.innerHtml = resultHtml;

    }, 3000);
}
