function naiveStringSearch(fullWord, strMatch) {
    let matches = 0; 

    for (let i = 0; i < fullWord.length; i++) {
        for (let j = 0; j < strMatch.length; j++) {
            if (fullWord[i+j] !== strMatch[j]) {
                console.log('BREAK');
                const breakInfo = {
                    i, 
                    j, 
                    'fullWordLetter': fullWord[i+j],
                    'strMatchLetter': strMatch[j]
                }
                console.log("BREAK:", breakInfo)
                break;
            }
            if (j == strMatch.length - 1) {
                const matchInformation = {
                    i, 
                    j, 
                    'fullWordLetter': fullWord[i+j],
                    'strMatchLetter': strMatch[j]
                }
                console.log("FOUND A MATCH", matchInformation)
                matches++;             
            }
        }
        
    }

    return matches;

}


// test to see if it works 

const result = naiveStringSearch('information', 'or');
console.log('Total Matches: ', result);