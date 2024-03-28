const reverseString = function(string) {
    let strArray = string.split('');
    let reverseArray = strArray.reverse();
    let reversedStr = reverseArray.join('');
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
