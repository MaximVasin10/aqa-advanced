function stringManipulations(str1, str2) {
  if (str1.length === 0 || str2.length === 0)
    return "one of parameters is empty.";

  if (str1.length === str2.length) {
    return "Parameters have the same length.";
  } else if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

console.log(stringManipulations("short1", "loooong2"));
console.log(stringManipulations("loooong1", "short2"));
console.log(stringManipulations("same", "same"));
console.log(stringManipulations("", "same"));
