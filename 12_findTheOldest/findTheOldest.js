function getAge(person) {
    return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        return getAge(oldestPerson) < getAge(currentPerson) ? 
               currentPerson : oldestPerson;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
