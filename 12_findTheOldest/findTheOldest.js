const findTheOldest = function(person) {
    return person.reduce((oldest, currentPerson) => {

        let currentAge = 0;
        let oldestAge = 0;

        currentAge = calculateAge(currentPerson);
        oldestAge = calculateAge(oldest);

        return currentAge > oldestAge ? currentPerson : oldest;
    }, person[0]);
};

function calculateAge(person) {
    if (person.yearOfDeath === undefined) {
        const d = new Date();
        let currentYear = d.getFullYear();
        return currentYear - person.yearOfBirth;
    }
    else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
