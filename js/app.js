'use strict';
console.log('app.js connected');

//declare our globals at the top.
const globalVariable1 = 'hello';
const globalVariable2 = [0,1,2,];
const myForm = document.getElementById('my-form');


//create an instance of PersonConstructor and save it to a varable
const bud = new PersonConstructor('Bud', 'Squirrel', 'Macintosh');


function PersonConstructor(first, nickName, last){
this.firstName = first;
this.nickName = nickName;
this.last = last;

}