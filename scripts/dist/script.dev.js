"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nums = [1, 2, 3];
var newNums = nums.map(function (n) {
  return n + 1;
});
console.log(newNums);
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var even = num.filter(function (n) {
  return n > 5;
});
console.log(even);
var boxs = [{
  weight: 2,
  label: "легкая"
}, {
  weight: 5,
  label: "средняя"
}, {
  weight: 12,
  label: "тяжелая"
}, {
  weight: 15,
  label: "оче6нь тяжелая"
}];
var heavyBox = boxs.find(function (box) {
  return box.weight > 10;
});
console.log(heavyBox);
var innerPlanets = ["Меркурий", "Венера", "Земля", "Марс"];
var outerPlanets = ["Юпитер", "Сатурн", "Уран", "Нептун"];
var planets = innerPlanets.concat(outerPlanets);
console.log(planets);
var words = ["Я", "люблю", "JS"];
var sentons = words.join(" ");
console.log(sentons);
var toys = ["Шар", "Зыездочка", "Коокольчик"];
var list = toys.join(", ");
console.log(list);
var toysList = "Шар, Зыездочка, Коокольчик";
var toyss = toysList.split(", ");
console.log(toyss);
var toyys = ["Шар", "Зыездочка", "Коокольчик"];
toyys.forEach(function (toy, i) {
  console.log(i, toy);
});
var Toys = [{
  name: "Большой красный шар в белый горошек",
  count: 2,
  year: 2010,
  shape: "шар",
  color: ["красный", "белый"],
  favorite: false
}, {
  name: "прозрачный шар с красной ленточкой",
  count: 2,
  year: 2020,
  shape: "шар",
  color: ["прозрачный"],
  favorite: true
}, {
  name: "белстящая зеленая шишечка",
  count: 2,
  year: 2010,
  shape: "шишка",
  color: ["заелный"],
  favorite: false
}, {
  name: "синий шар со снежинками",
  count: 4,
  year: 2019,
  shape: "шар",
  color: ["синий", "белый"],
  favorite: true
}, {
  name: "золотой колокольчик с ленточкой",
  count: 4,
  year: 2017,
  shape: "колокольчик",
  color: ["золотой"],
  favorite: false
}];
Toys.forEach(function (toy) {
  console.log(toy.name + " - форма: " + toy.shape + ", количество: " + toy.count);
});
var updaytToys = Toys.map(function (toy) {
  return _objectSpread({}, toy, {
    count: toy.count + 1
  });
});
console.log(updaytToys);
var toyStore = {
  list: ["RedBall", "BlueBall", "GreenBall"],
  getComputedStyle: function getComputedStyle(index) {
    return this.list[index];
  }
};
var tree = {
  type: "snowy",
  backgraund: "livivn_room",
  garland: "multin",
  toys: [{
    id: 1,
    x: 120,
    y: 240,
    type: "RedBall"
  }, {
    id: 2,
    x: 150,
    y: 300,
    type: "GreenBall"
  }]
};
var us = {
  name: "Аня",
  age: 16
};
Object.seal(us);
us.name = "Вика";
us.age = 17;
delete us.name;
console.log(us); // let  original ={a: 1, b: 2};
// let copy =Object.assign({}, original);
// copy.a =99;
// console.log(original.a);
// let  original ={a: 1, b: 2};
// let copy = {...original}
// copy.b =99;
// console.log(copy.b);
//# sourceMappingURL=script.dev.js.map
