function shortLongShort(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}

console.log(shortLongShort("loooong", "short"));
console.log(shortLongShort(" ", "short"));
