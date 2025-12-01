"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// let nums=[1,2,3];
// let newNums =nums.map(n=>n+1);
// console.log(newNums);
// let num=[1,2,3,4,5,6,7,8,9];
// let even =num.filter(n=>n>5);
// console.log(even);
// let boxs=[
//     {weight: 2, label:"легкая"},
//     {weight: 5, label:"средняя"},
//     {weight: 12, label:"тяжелая"}, 
//     {weight: 15, label:"оче6нь тяжелая"}
// ];
// let heavyBox=boxs.find(box=>box.weight>10);
// console.log(heavyBox);
// let innerPlanets = ["Меркурий","Венера","Земля","Марс"];
// let outerPlanets = ["Юпитер","Сатурн","Уран","Нептун"];
// let planets = innerPlanets.concat(outerPlanets);
// console.log(planets);
// let words =["Я","люблю","JS"];
// let sentons = words.join(" ");
// console.log(sentons);
// let toys =["Шар","Зыездочка","Коокольчик"];
// let list = toys.join(", ");
// console.log(list);
// let toysList ="Шар, Зыездочка, Коокольчик";
// let toyss = toysList.split(", ");
// console.log(toyss);
// let toyys =["Шар","Зыездочка","Коокольчик"];
// toyys.forEach((toy,i) => {
//     console.log(i,toy);
// });
var Toys = [{
  name: "Большой красный шар, матовый",
  count: 5,
  year: 2010,
  shape: "шар",
  color: ["крвсный"],
  favorite: false,
  image: "./img/5294.png"
}, {
  name: "вытянутый красно-белый шар",
  count: 8,
  year: 2020,
  shape: "вытянутый шар",
  color: ["красный", "белый"],
  favorite: true,
  image: "./img/5295.png"
}, {
  name: "желтый шар с цветком",
  count: 12,
  year: 2010,
  shape: "шар",
  color: ["желтый"],
  favorite: false,
  image: "./img/5296.png"
}, {
  name: "зеленый шар с золотыми цветами",
  count: 6,
  year: 2019,
  shape: "шар",
  color: ["зеленый", "желтый"],
  favorite: true,
  image: "./img/5297.png"
}, {
  name: "красная шишочка",
  count: 5,
  year: 2017,
  shape: "шишка",
  color: ["красный"],
  favorite: false,
  image: "./img/5301.png"
}, {
  name: "Большой красный шар, глянцевый",
  count: 8,
  year: 2010,
  shape: "шар",
  color: ["крвсный"],
  favorite: false,
  image: "./img/5300.png"
}, {
  name: "прозрачный шар",
  count: 12,
  year: 2010,
  shape: "шар",
  color: ["прозрачный"],
  favorite: false,
  image: "./img/5299.png"
}, {
  name: "Большой красный шар, блестящий",
  count: 6,
  year: 2010,
  shape: "шар",
  color: ["крвсный"],
  favorite: false,
  image: "./img/5298.png"
}];
var toysGrid = document.querySelector(".toys-grid");
Toys.forEach(function (toy, index) {
  var toyBox = document.createElement("div");
  var img = document.createElement("img");
  img.src = toy.image;
  img.classList.add("toy");
  img.draggable = true;
  img.dataset.index = index;
  var countBox = document.createElement("div");
  countBox.textContent = toy.count;
  countBox.style.color = "white";
  countBox.style.textAlign = "center";
  countBox.style.fontSize = "14px";
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
}; // let  original ={a: 1, b: 2};
// let copy =Object.assign({}, original);
// copy.a =99;
// console.log(original.a);
// let  original ={a: 1, b: 2};
// let copy = {...original}
// copy.b =99;
// console.log(copy.b);
//# sourceMappingURL=script.dev.js.map
