let input: any = document.querySelector('input');

input.addEventListener('change', () => {
    let files = input.files;
    if(files.length == 0) return;
    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        // @ts-ignore
        const file = e.target.result;

        const lines = (<string> file).split(/\r\n|\n/);
        console.log(lines)
        // return lines;
    };

    // @ts-ignore
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

let wordInput: any = document.querySelector('#word');
let proposeWordsBox: any = document.querySelector("#propose-words");

wordInput.addEventListener('keyup', () => checkWord());

function checkWord() {
    setTimeout(function(){
        wordInput.value = wordInput.value.toUpperCase();
        // let results: string[] = Spellchecker.putLetterBetween(wordInput.value)
        proposeWordsBox.innerHtml = results.join("<br>")
    }, 3000);
}






