// boolean
let isDone: boolean = false;

if (isDone)
    console.log('true');
else
    console.log('false');

// any
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
