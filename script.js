//Ex1
/*
let objj = { downvotes: 23, upvotes: 33 };
function getVoteCount(obj) {
  return obj.upvotes - obj.downvotes;
}
console.log(getVoteCount(objj));
//Ex2
function determineLever(array1) {
  if (
    array1[0].toLowerCase() == "e" &&
    array1[1].toLowerCase() == "f" &&
    array1[2].toLowerCase() == "l"
  )
    return "first class lever";
  else if (
    array1[0].toLowerCase() == "e" &&
    array1[1].toLowerCase() == "l" &&
    array1[2].toLowerCase() == "f"
  )
    return "second class lever";
  else if (
    array1[0].toLowerCase() == "f" &&
    array1[1].toLowerCase() == "e" &&
    array1[2].toLowerCase() == "l"
  )
    return "third class lever";
  else return "none";
}
console.log(determineLever(["e", "h", "l"]));
console.log(determineLever(["F", "e", "L"]));
//Ex3
function fiftyThirdyTwinty(ati) {
  const obj = {
    Needs: 0,
    Wants: 0,
    saving: 0,
  };
  obj["Needs"] = 0.5 * ati;
  obj["Wants"] = 0.3 * ati;
  obj["saving"] = 0.2 * ati;
  return obj;
}
console.log(fiftyThirdyTwinty(10000));
//Ex4
function sortDrinkByPrice(arrayDrinks) {
  const newarr = arrayDrinks.map((x) => x.price);
  newarr = newarr.sort();
}

const drinks = [
  { name1: "lime", price: 10 },
  { name1: "kola", price: 5 },
  { name1: "soda", price: 50 },
];
let arrPrice = [];
for (let item in drinks) {
  arrPrice.push(drinks[item]["price"]);
}
console.log(arrPrice);


//Ex5
function calculateDifferncec(obje, limit) {
  const arr = Object.values(obje);
  let sum = arr.reduce((a, b) => a + b);
  return sum - limit;
}
const obje = { skate: 10, painting: 20 };
console.log(calculateDifferncec(obje, 19));
//Ex6
function generation(num, ch) {
  let genration1;
  const obj = {
    female: [
      "me!",
      "daugther,",
      "grandDaughter",
      "great grandDauther",
      "mother",
      "grandMother",
      "great grandmother",
    ],
    man: [
      "me!",
      "son,",
      "grandson",
      "great grandson",
      "great grandfather",
      "grandfather",
      "father",
    ],
  };
  if (ch === "f") generation1 = obj["female"].slice(num, num + 1);
  else generation1 = obj["man"].slice(num, num + 1);
  return generation1;
}
console.log(generation(2, "f"));
console.log(generation(-3, "m"));

//Ex7
let cars = [
  { car: "volvo", active: false },
  { car: "fiat", active: false },
  { car: "kia", active: true },
  { car: "subero", active: false },
];
function dropWhile(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["active"] === false) arr.shift();
  }
  return arr;
}
dropWhile(cars).forEach((element) => {
  console.log(element);
});

//Ex8
function getTotalPrice(obj) {
  let sum = 0;
  for (let item in obj) {
    sum += obj[item]["quintity"] * obj[item]["price"];
  }
  console.log(sum);
  return sum;
}
const obj = [
  { product: "milk", quintity: 2, price: 3 },
  { product: "egg", quintity: 3, price: 1 },
];
getTotalPrice(obj);
*/
//Ex9
var obj = { a: [{ b: { c: 3 } }] };

/*
//Ex10
function soultion(arr, k) {
  let newArr = [];
  arr.length === k || k === 0
    ? (newArr = arr)
    : (newArr = arr.splice(arr.length - k, k + 1).concat(arr));
  return newArr;
}
console.log(soultion([3, 8, 9, 7, 6], 3));
console.log(soultion([1, 2, 3, 4], 4));
console.log(soultion([0, 0, 0], 1));
//Ex11
function frog(x, y, d) {
  return Math.ceil((y - x) / d);
}

console.log(frog(10, 85, 30));
//Ex12
function val(arr) {
  arr = arr.sort();
  console.log(arr);
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) count++;
  }
  return count + arr[0];
}
console.log(val([2, 3, 5, 1]));
console.log(val([23, 25, 22]));
*/
