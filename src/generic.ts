// generic in typeScripts

// generic holo dinamically generalize kora..

// abar evabeo dite pari..
// type GenericArray<value> = Array<value>;

// const friends : string[]=["Mr. X", "Mr. Y", "Mr. Z"];
// const friends : GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[]= [4,7,11];
// const rollNumbers: GenericArray<number>=[4,7,11];

// const isEligibleList: boolean[]=[true,false,true];
// const isEligibleList: GenericArray<boolean> = [true,false,true];
// type User = { name: string; age: number };
// const userList: GenericArray<object> = [
//     {
//         name: "Mr. X",
//         age: 22,
//     },
//     {
//         name: "Mr. Y",
//         age: 25,
//     },
// ];


// const isEligibleList: GenericArray = [true,false,true];

// const sqrFunc = (value: number) =>{
//     return value*value ;
// };
// sqrFunc(5);

// type Coordinates = [string,string];
// const coordinates : Coordinates = ['20','30']
// type Coordinates = [number,number];

// const coordinates: Coordinates = [20,30];

// dinamically generic er madhdhome type define kora

// type Coordinates <X,Y> = [X,Y];

// const coordinates:Coordinates<string,string>= ['20','30'];




//23.11.2025//

//1. generic type ki?
//...ekta type k dynamic / flexible kora..jate same structure e amar dorkar onujayi string, number, boolean, object sob use kora jay...
// etai typescript e generics er core idea


/*generic array banano */
//normal way

// const friends: string[]=["Mr. X", "Mr. Y"];

//generic way
// type GenericArray<T> = Array<T>;
// const friends: GenericArray<string> = ["Mr. X", "Mr. Y"];
//ekhane array r vitorer type ami dynamic vabe set korte pari
/**
 GenericArray<string>

 GenericArray<number>

 GenericArray<boolean>

 GenericArray<object>
 */

/*Generic diye object array handle */
/*
 ami jokhon ekta array niye kaj korchi..ei array te ki thakbe ? string? number? object? kisui age theke clear na

 ...ekhetre generic amake ekta pattern or flexibility dey
 Generic= type ta pore pathabo..structure age thik kore rakhbo
*/

//object array er example
// type GenericArray<T> = Array<T>
// type User = { name: string; age: number };

// const userList: GenericArray<User> = [
//     { name: "Mr. X", age: 22 },
//     { name: "Mr. Y", age: 25 },
// ]
/*
1. array structure fixed ekhane
2. vitorer element (object) er type pore define korbo jeta amr control e
3. ekhane T = User set korle array r prottek element obossoi User type hobe:
 
name string

age number
*/
// userList.push({name: "A", age: "twenty"})//error dibe...karon Generic howay array er element type enforce kore

//Generic keno useful??

// const products: GenericArray<{ title: string; price: number }> = [
//     { title: "Laptop", price: 900 },
//     { title: "Phone", price: 600 },
// ];
// const scores: GenericArray<number> = [10, 20, 30];
//same structure ar onek type

/*Generic chara normal function example */

// const sqrFunc = (value: number) => value * value;

//1. eitay Function parameter ta strict type

//value number mane ei function ta shudhui number input nite parbe

// sqrFunc(5);//ok
// sqrFunc("5");//not ok..error dibe

//2. Return type automatically infer

//mane typescript automatically bujhe fele value*value => number tai return type dite hoyna
//jodi amar emon dorkar hoy ???
/*
 string value handle korbe?

 object value handle korbe?

 array value handle korbe?

 ...ejonnoi generic lageb
....R normal function limited hoye jay

//so without generics,functions are limited to a specific type
*/

/*tuple concept + generic tuple */

//tuple holo fixed length array
//jekhane element songkha fixed thake..element type position onujayi fixed thkae

//  type Coordinates = [string, string];//index:0=>string;index:1=>string

//so only this is valid
// ["20", "30"]; 
//["20", "30", "40"]..eita invalid

//fixed type tuple er boro problem ki??
//...ektu vinno type dorkar hole notun notun banate hoy
//barbar lekhar dorkar hoy

//ejonnoi Generic tuple dorkar

/* Generic Tuple .. Dynamic Types */
// type Coordinates<X, Y> = [X, Y];

// const coordinates: Coordinates<string, string> = ["20", "30"];

//1. Tuple structure fixed
// Two elements
// Fixed order
// Fixed length

//2.  kintu element type amar control e
/*
   Coordinates<number, number>
   Coordinates<string, number>
   Coordinates<boolean, string>
   Coordinates<User, Address>
ja ichcha korte pari
*/

///aro example

/*example 1 : Mixed type tuple*/

// const locationData: Coordinates<string, number> = ["Latitude", 22.5];

/*example 2 : Tuple with object types*/

type Coordinates<X, Y> = [X, Y]
type User = {name: string};
type Product = {title: string};

const mixed : Coordinates<User,Product>=[
    {name: "Jerin"},
    {title: "Useless"}
];

/// Normal function (without generic)///

// Specific type handle kore

// Flexible na

// TypeScript auto infer kore

// Generics chara function limited

///Tuple Concept///

// Fixed length array

// Position-based typing

// khub strict

///Generic tuple ///

 //  Same tuple structure use kora jay

 // kintu vitorer type dynamically pass kora jay

 // Code reuse hoy

 // Flexible + type-safe

 // Huge powerful in real-world (React, Redux, APIs)