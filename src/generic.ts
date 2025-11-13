// generic in typeScripts

// generic holo dinamically generalize kora..

// abar evabeo dite pari..
type GenericArray<value> = Array<value>;

// const friends : string[]=["Mr. X", "Mr. Y", "Mr. Z"];
const friends : GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[]= [4,7,11];
const rollNumbers: GenericArray<number>=[4,7,11];

// const isEligibleList: boolean[]=[true,false,true];
const isEligibleList: GenericArray<boolean> = [true,false,true];
type User = { name: string; age: number };
const userList: GenericArray<object> = [
    {
        name: "Mr. X",
        age: 22,
    },
    {
        name: "Mr. Y",
        age: 25,
    },
];


// const isEligibleList: GenericArray = [true,false,true];

const sqrFunc = (value: number) =>{
    return value*value ;
};
sqrFunc(5);

// type Coordinates = [string,string];
// const coordinates : Coordinates = ['20','30']
// type Coordinates = [number,number];

// const coordinates: Coordinates = [20,30];

// dinamically generic er madhdhome type define kora

type Coordinates <X,Y> = [X,Y];

const coordinates:Coordinates<string,string>= ['20','30'];