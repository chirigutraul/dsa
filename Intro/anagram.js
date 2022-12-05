// given two strings, write a function to determine
// if the second string is an anagram of the first.

// cinema -> iceman

function validAnagram(string1, string2){
  if(string1.length !== string2.length) return 'String length is not equal. They are not anagrams.';

  const letterFrequencyS1 = {}
  const letterFrequencyS2 = {}

  for(let i=0; i<string1.length; i++){
    letterFrequencyS1[string1[i]] = (letterFrequencyS1[string1[i]] || 0) + 1;
    letterFrequencyS2[string2[i]] = (letterFrequencyS2[string2[i]] || 0) + 1;
  }

  for(let key in letterFrequencyS1) {
    if(!letterFrequencyS2[key]) return `String 2 doesnt contain letter ${key}. Not anagrams.`;
    if(letterFrequencyS1[key] !== letterFrequencyS2[key]) 
    return `The number of occurences of ${key} is not the same. Not anagrams.`;
  }

  return "The strings are anagrams";
}



console.log(validAnagram('test', 'ttas'))