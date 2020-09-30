import * as fs from "fs"

export interface StringHasher {
    hash(s:string):number;
}

export class CsvParser {

    static parseDataToArray() {
        return fs.readFileSync('Resources/wordlist.txt')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map((e: string) => e.trim());
    }
}
 export class HashTable {
        hashedTable: Array<string>;
        data: Array<string>;
        hasher: StringHasher;

        constructor(hasher: StringHasher) {
            this.hashedTable = [];
            this.data = CsvParser.parseDataToArray();
            this.hasher = hasher;
        }
        public setItem(key: number, value: string) {
            this.hashedTable[key] = value;
        }


        public convertToHashTable() {
            for (let i = 0; i < this.data.length; i++) {
                const hashedWord = this.hasher.hash(this.data[i]);
                this.setItem(hashedWord, this.data[i]);
            }
            console.log(this.hashedTable);
        }
    }


