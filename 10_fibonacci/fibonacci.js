const fibonacci = function(n) {
    let num = Number(n);
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS"
    }
    let first = 1;
    let second = 0;
    for (let i=2; i<=num; i++) {
        let current = second + first;
        second = first;
        first = current;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
