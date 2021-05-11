function generateArrayRandomNumbers(length){
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * (length));
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

module.exports = generateArrayRandomNumbers;