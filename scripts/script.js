let nums=[1,2,3];
let newNums =nums.map(n=>n+1);
console.log(newNums);

let num=[1,2,3,4,5,6,7,8,9];
let even =num.filter(n=>n>5);
console.log(even);

let boxs=[
    {weight: 2, label:"легкая"},
    {weight: 5, label:"средняя"},
    {weight: 12, label:"тяжелая"}, 
    {weight: 15, label:"оче6нь тяжелая"}
];
let heavyBox=boxs.find(box=>box.weight>10);
console.log(heavyBox);

let innerPlanets = ["Меркурий","Венера","Земля","Марс"];
let outerPlanets = ["Юпитер","Сатурн","Уран","Нептун"];
let planets = innerPlanets.concat(outerPlanets);
console.log(planets);

let words =["Я","люблю","JS"];
let sentons = words.join(" ");
console.log(sentons);

let toys =["Шар","Зыездочка","Коокольчик"];
let list = toys.join(", ");
console.log(list);

let toysList ="Шар, Зыездочка, Коокольчик";
let toyss = toysList.split(", ");
console.log(toyss);

let toyys =["Шар","Зыездочка","Коокольчик"];
toyys.forEach((toy,i) => {
    console.log(i,toy);
});

let Toys=[
    {
        name:"Большой красный шар в белый горошек",
        count:2,
        year:2010,
        shape:"шар",
        color: ["красный","белый"],
        favorite:false
    },
    {
        name:"прозрачный шар с красной ленточкой",
        count:2,
        year:2020,
        shape:"шар",
        color: ["прозрачный"],
        favorite:true
    },
    {
        name:"белстящая зеленая шишечка",
        count:2,
        year:2010,
        shape:"шишка",
        color: ["заелный"],
        favorite:false
    },
    {
        name:"синий шар со снежинками",
        count:4,
        year:2019,
        shape:"шар",
        color: ["синий","белый"],
        favorite:true
    },
    {
        name:"золотой колокольчик с ленточкой",
        count:4,
        year:2017,
        shape:"колокольчик",
        color: ["золотой"],
        favorite:false
    },
]

Toys.forEach(toy=>
    {
        console.log(
            toy.name +
            " - форма: "+
            toy.shape +
            ", количество: "+
            toy.count    
        );
    });

let updaytToys = Toys.map(toy=>{
    return{
        ...toy,
        count: toy.count+1
    };
});
console.log(updaytToys);

let toyStore =
{
    list: ["RedBall","BlueBall","GreenBall"],
    getComputedStyle(index)
    {
        return this.list[index];
    }
}

let tree ={
    type:"snowy",
    backgraund:"livivn_room",
    garland:"multin",
    toys:[
        {id: 1, x: 120, y: 240, type:"RedBall"},
        {id: 2, x: 150, y: 300, type:"GreenBall"}
    ]
}

let us = {name: "Аня", age: 16};

Object.seal(us);
us.name ="Вика";
us.age = 17;
delete us.name;
console.log(us);


// let  original ={a: 1, b: 2};
// let copy =Object.assign({}, original);
// copy.a =99;
// console.log(original.a);

// let  original ={a: 1, b: 2};
// let copy = {...original}
// copy.b =99;
// console.log(copy.b); 


