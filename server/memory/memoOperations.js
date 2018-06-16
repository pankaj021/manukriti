const fs = require('fs');
const MEMO_DATA_PATH = __dirname + '/data/memoData.json';
const INITIAL_MEMO_PATH = __dirname + '/data/initialMemo.json';
var {MemoCell} = require('./MemoCell')
var rootCell = null

function createANewCell(char) {
    console.log("char=>>>>>",char)
    var newCell = MemoCell();
    newCell.alph[char] = null;
    return newCell;
}

function readingFile(filepath, callback){
    fs.readFile(filepath, 'utf8', (err, data)=>{
        if(err) console.error(err);
        callback(data)
    })
}

function initializeData(callback) {
    readingFile(INITIAL_MEMO_PATH, (data)=>{
        rootCell = JSON.parse(data)
        callback(rootCell)        
        fs.writeFile(MEMO_DATA_PATH, data, 'utf8', (err)=>{
            if(err) console.error(err);
        })
    })
}

function activateMemoryCells(callback) {
    readingFile(MEMO_DATA_PATH, (data)=>{
        if(!data) initializeData(callback)
        else {
            rootCell = JSON.parse(data)
            callback(rootCell)                                
        }
    })
}

module.exports = {
    rootCell,
    activateMemoryCells,
    createANewCell
}