// Non Primitive Types
// array, object

//1. Array
let bazarList: string[] = ["eggs", "milk", "sugar"];

// bazarList.push(true);// evabe likhle Argument of type 'boolean' is not assignable to parameter of type 'string' ..eta dekhabe..

//2. Union Typed Array
let mixArr: (string | number)[] = ["eggs",12,"milk",1]
let mixedArr: (string | number)[] = ["eggs", 12 , "milk" , 1 , "sugar" , 2];

// mixedArr.push(true);// eta jehetu explicit vabe define korsi tai ami ekhon boolean push korte parbona..Argument of type 'boolean' is not assignable to parameter of type 'string | number' eta dekhabe tahole...


///*3. TypeScript er ekta special type holo tuple *///

let coordinates : [number,number] = [20,30];//eta 2 element er ekta array ar etake number:number e define korte pari..
// let coordinates2 : [number,number] = [20,30,50];//evabe korle Source has 3 element(s) but target allows only 2 eta dekhay...karon amake allow kortese 2 ta ..but ami 3 ta nisi..

let couple: [string,string] = ["Husband","Wife"];// etai holo fixed length er ekta tuple

// 4. Tuple e alada type 

let JerinNameAndRoll: [string,number] = ['Jerin', 79];
// JerinNameAndRoll[0] = 79;// karon 0 tomo index e number nibena..

let destination: [string,string,number] = ['Dhaka', 'Chattogram', 3];// 3 element bishisto ekta tuple


///* Object , Literal & Optional Type *///

// reference type : object

//    const user: {
//     organization: string;
//     firstName: string;
//     middleName?: string;// optional type//optional type dewar karon middleName na dileo error ashbena
//     lastName: string;
//     isMarried: boolean;
//    } = {
//      organization:"Programming Hero",
//      firstName: "Jhankar",
//      lastName: "Mahbub",
//      isMarried:true,
//    };

//    user.organization= "Programming Hero Fire";
//    console.log(user);

   //jodi organization: "Programming Hero"; ekhane evabe dile value ta type hishebe dhorbe...tahole 
   // user.organization= "Programming Hero Fire"; eta dile ar assign kore parbena
   //** etake literal type bole */

   //abar evabe jodi kori

   const user: {
    readonly organization: string;//access modifier
    firstName: string;
    middleName?: string;// optional type//optional type dewar karon middleName na dileo error ashbena
    lastName: string;
    isMarried: boolean;
   } = {
     organization:"Programming Hero",
     firstName: "Jhankar",
     lastName: "Mahbub",
     isMarried:true,
   };

//    user.organization= "Programming Hero Fire";
//    console.log(user);
// tahole Cannot assign to 'organization' because it is a read-only property ...eta dekhabe...