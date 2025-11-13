//Type Interface..eta type alias er motoi

// array or function er khetre type Alias use korbo
// object er khetre interface use korbo

type User = {
   name: string;
   age: number; 
};
interface IUser {
    name: string;
    age: number;
}

//** User holo type alias, IUser holo interface
//** 2 tai same object shape describe kore..name r age

/*Role combine kori */

type Role = {
    role: "admin"|"User";
};
type UserWithRole = User & Role;//intersection
// UserWithRole = User + Role
// TypeAlias makes it easy to merge User and Role with &

// interface

interface IUserWithRole extends IUser {
    role: "admin" | "user";
}// interface arekta interface k extend kore

// User & Role er motoi same ..kintu ekhane extends keyword use kore...

const user1: IUserWithRole = {
    name: "Mr. X",
    age: 100,
    role: "admin",
};

const user2: IUser = {
    name: "Mr. Y",
    age: 102,
}

// Function Types

type Add = (num1: number, num2:number) => number ;

interface IAdd {
    (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;

// type alias Add function type store korte pare..
// Interface IAdd function signature describe kore...
// jodi class later e implement korte chai..tahole interface useful....

//arrays / index signatures

type Friends = string[];
interface IFriends {
    [index: number]: string;
}
const friends : IFriends = ["A","B","C"];

// Friends holo simple array type
// IFriends holo index signature interface ..

