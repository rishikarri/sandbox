function naiveStringSearch(fullWord, strMatch) {
    let matches = 0; 

    for (let i = 0; i < fullWord.length; i++) {
        for (let j = 0; j < strMatch.length; j++) {
            if (fullWord[i+j] !== strMatch[j]) break;
            if (j == strMatch.length - 1) matches++;             
        }
        
    }

    return matches;

}


// test to see if it works 

const result = naiveStringSearch('I like to drink coffee a few days a week. I like to drink tea on the other days.', 'f');
console.log('Total Matches: ', result);