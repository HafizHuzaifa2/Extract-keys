let obj1 = [{
        id: 909,
        name: "Bilal",

    },
    {
        id: 910,
        name: "Hamza",

    },
    {
        id: 913,
        name: "Ahmed",

    },
    {
        id: 911,
        name: "Shariz",

    },
    {
        id: 922,
        name: "Fahad",

    },
    {
        id: 912,
        name: "Qasim",

    },
];



let MapKey = obj1.map(function(a) {
    if (a.name) {
        return a.name
    }


})
let MapKey1 = obj1.map(function(y) {

    if (y.id) {
        return y.id
    }


})
console.log(MapKey)
console.log(MapKey1)




// let filterKey = obj1.find(function(a) {
//     if (a.name) {
//         return a.name
//     }


// })
// let filterKey1 = obj1.find(function(y) {

//     if (y.id) {
//         return y.id
//     }


// })
// let findKey = obj1.filter(function(a) {
//     if (a.name) {
//         return a.name
//     }


// })
// let findKey1 = obj1.filter(function(y) {

//     if (y.id) {
//         return y.id
//     }


// })
// console.log(filterKey)
// console.log(filterKey1)
// console.log(findKey)
// console.log(findKey1)