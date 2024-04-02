const palindromes = function (str) {
    let newStr = str.toLowerCase().replaceAll(/\W/g, '');
    let newStrRev = newStr.split('').reverse().join('');
    return newStr == newStrRev;
};

// Do not edit below this line
module.exports = palindromes;
