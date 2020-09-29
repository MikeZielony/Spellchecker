"use strict";
exports.__esModule = true;
exports.HashTable = exports.CsvParser = void 0;
var fs = require("fs");
var CsvParser = /** @class */ (function () {
    function CsvParser() {
    }
    CsvParser.parseDataToArray = function () {
        return fs.readFileSync('../Resources/wordlist.txt')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map(function (e) { return e.trim(); });
    };
    return CsvParser;
}());
exports.CsvParser = CsvParser;
var HashTable = /** @class */ (function () {
    function HashTable(hasher) {
        this.hashedTable = [];
        this.data = CsvParser.parseDataToArray();
        this.hasher = hasher;
    }
    HashTable.prototype.setItem = function (key, value) {
        this.hashedTable[key] = value;
    };
    HashTable.prototype.convertToHashTable = function () {
        for (var i = 0; i < this.data.length; i++) {
            var hashedWord = this.hasher.hash(this.data[i]);
            this.setItem(hashedWord, this.data[i]);
        }
        console.log(this.hashedTable);
    };
    return HashTable;
}());
exports.HashTable = HashTable;
