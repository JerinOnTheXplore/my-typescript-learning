// JS ............ TS
// string,number,boolean,undefined,null
// TS: never,unknown,void

let userName: string = "jerin123";
let userId : number;
// userId = '123' eta likhle.. Type 'string' is not assignable to type 'number'... eta dekhay

// userName.toFixed() eta likhle Property 'toFixed' does not exist on type 'string' eta dekhay..er mane String type er dataType er jonno toFixed available na..

// let isAdmin : boolean;

let isAdmin = false // ekhane amar data r value er upor depend kore data type define kore niyeche...etake bole  implicit
isAdmin = true

// jodi ami evabe define kore dei..
 // let isAdmin : boolean = false
 // etake explicitly type define kora bole..

//  let x = undefined ;// jokhom dataType define kortesina tokhon automatically any hoye jay..
 //ekhon etate jekono value assign korte parbo..

//  x= 5
//  x = "Five";

// kintu jokhon type define kore dibo..
  // let x : undefined = undefined ;
//   x=5;
//   x = 'Five'// eta korle cannot find name dekhay

// JavaScrpt e amra kono code vul hole runTime e giye bujhi..kintu TypeScript e code korar somy e bujhte pari


