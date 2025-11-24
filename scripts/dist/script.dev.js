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
  color: ["кразолотой"],
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
//# sourceMappingURL=script.dev.js.map
