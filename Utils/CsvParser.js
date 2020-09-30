"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = exports.CsvParser = void 0;
var fs = __importStar(require("fs"));
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
