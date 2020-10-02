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


wordInput.addEventListener('keyup', () =>{
    let proposeWordsBox: any = document.querySelector("#propose-words");
    proposeWordsBox.innerHTML = "";
    if(wordInput.value.length >= 3){
    checkWord()
}
});

function updateValue(word: string) {
    console.log(word);
    wordInput.value = word;
}

function checkWord() {
    setTimeout(function () {
        let results: string[] = spellchecker.all(wordInput.value);
        let proposeWordsBox: any = document.querySelector("#propose-words");

        results.forEach(word => {
            let li = document.createElement("li");
            li.innerText = word;
            li.addEventListener("click", () => updateValue(word));
            proposeWordsBox.appendChild(li);
        });

    }, 3000);
}
