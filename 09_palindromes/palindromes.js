const palindromes = function (string) {
    filteredLetters = string.split('')
                      .filter(char => char.match(/^[A-Za-z0-9]+$/))
                      .map(char => char.toLowerCase());
    filteredLettersBackwards = [...filteredLetters].reverse();

    return filteredLetters.join('') == filteredLettersBackwards.join('');
};

// Do not edit below this line
module.exports = palindromes;
