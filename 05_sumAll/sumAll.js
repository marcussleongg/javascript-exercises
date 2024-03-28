const sumAll = function(start, end) {
    let sum = 0;
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR'
    } else if (start<0 || end<0) {
        return 'ERROR'
    } else if (start > end) {
        for (let add=end; add<=start; add++) {
            sum += add;
        }
    } else {
        for (let add=start; add<=end; add++) {
            sum += add;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
