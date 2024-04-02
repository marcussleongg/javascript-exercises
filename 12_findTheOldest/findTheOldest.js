const findTheOldest = function(arr) {
    let CURRENTYEAR = new Date().getFullYear();
    let ageArr = arr.map((person) => {if (person.yearOfDeath == undefined) {
        return CURRENTYEAR - person.yearOfBirth;
        } return person.yearOfDeath - person.yearOfBirth;});
    let oldestIndex = 0;
    let oldest = ageArr[0];
    for (let age of ageArr) {
        if (age > oldest) {
            oldest = age;
            oldestIndex = ageArr.indexOf(age);
        }
    }
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
