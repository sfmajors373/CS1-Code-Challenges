/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  const shared = new Set;
  const sharedArr = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && !(str2[j] in shared)) {
        shared.add(str2[j]);
      }
    }
  }
  shared.forEach(c => sharedArr.push(c));
  return sharedArr.join('');
}

console.log(commonCharacters('acexivou', 'aegihobu'));
console.log(commonCharacters('aacexivou', 'aegiahobu'));
