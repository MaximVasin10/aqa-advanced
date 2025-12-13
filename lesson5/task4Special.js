function isAllInUpperCase(value) {
  let isUpperCase = true;

  if (typeof value !== "string") {
    console.log(value + " -> Wrong data (not a string)\n");
    return;
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] != value[i].toUpperCase()) {
      isUpperCase = false;
      break;
    }
  }

  if (isUpperCase) {
    console.log(value + " -> True");
  } else {
    console.log(value + " -> False");
  }
}

let str = "R";
let str2 = "r";
let str3 = "ROw";
let str4 = "SUPERDUPERSHOW";
let str5 = "low";
let str6 = 56;

isAllInUpperCase(str);
isAllInUpperCase(str2);
isAllInUpperCase(str3);
isAllInUpperCase(str4);
isAllInUpperCase(str5);
isAllInUpperCase(str6);
