// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants.Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops.Let’s get started!

let input = 'Hope is a dangerous thing for a woman like me to have...but i have'

const vowels = ['a', 'e', 'i', 'o', 'u']

const resultArray = []

for (let i = 0; i < input.length; i++) {
    for (let vowel = 0; vowel < vowels.length; vowel++) {
        if (input[i] === vowels[vowel]) {
            if (input[i] === 'e') {
                resultArray.push('ee');
            } else if (input[i] === 'u') {
                resultArray.push('uu')
            } else {
                resultArray.push(input[i])
            }
        }
    }
}

console.log(resultArray.join("").toUpperCase());