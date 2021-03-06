// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(string) {
  const arr = [];
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[(i + 1)]) {
      counter++;
    } else {
      arr.push(string[i]);
      arr.push(counter);
      counter = 1;
    }
  }
  if (arr.concat('').length < string.length) {
    return arr.join('');
  }
  return string;
};



// ******************Tests***************
console.log(stringCompression('aabcccccaaa'));  //a2b1c5a3
console.log(stringCompression('abcd'));  //abcd
console.log(stringCompression('aAbBccccDDDD')); //aAbBccccDDDD
