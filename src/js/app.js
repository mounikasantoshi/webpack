require("../css/style.css");


let $=require('./people.js');

let people=require('jquery');

people.each($, function(key, value){
    people('body').append('<h1>'+$[key].name+'</h1>');
});

console.log($[0].name);
