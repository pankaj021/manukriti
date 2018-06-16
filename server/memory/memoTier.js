var {
    rootCell,
    createANewCell,
    activateMemoryCells
} = require('./memoOperations');
var {setAction} = require('../actions/setAction')

function checkInMemoTier(input, callback){
    activateMemoryCells((rootCell)=>{
        if(input && rootCell.length){
            input.length === 1 ? handleSingleCharInput() : 
            searchOrUpdate(rootCell[input.toLowerCase().charCodeAt(0) - 97], input)
            setTimeout(function() {
                console.log('the result=>>>>>>', JSON.stringify(rootCell));
            }, 1000);
        }
        else{
            callback({
                status: false,
                msg: input ? 'Input not valid!!!' : 'Internal Data not available!!!'
            })
        }
    })
}

function handleSingleCharInput() {
    console.log("single letter input found!!!")
}

function searchOrUpdate(root, input) {
    var inputLen = input.length, i;
    for (i = 1; i < inputLen && root.link; i++, root = root.link){
        console.log("root.alph[input[i]]====",root.alph[input[i]])
        if(!root.alph[input[i]]) root.alph[input[i]] = null;
    }
    if(i < inputLen){
        console.log(input, " NOT Found....");
        createANewSubPath(root, input, i, inputLen)
    }
    else{
        console.log(input, " Found....")
        console.log("Action : ",root[input[i-1]])
    }
}

function createANewSubPath(root, input, index, inputLen) {
    if(!root.alph[input[index]]) root.alph[input[index]] = null;
    for(var i = index+1 ; i < inputLen; i++){
        root.link = createANewCell(input[i]);
        root = root.link;
    }
    console.log('temp =>>>>>>', root);
    root.alph[input[inputLen - 1]] = setAction()
}

checkInMemoTier("asdffgfgfglkdgnfz")