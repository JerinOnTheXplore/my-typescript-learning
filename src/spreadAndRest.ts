   /* Rest & Spread Operator */
 
 
          /* Array example */
 const friends = ["Rahim", "Karim"];
 const schoolFriends = ["pintu","chintu","bulbul"];
 const collegeFriends = ["Mr. Smart", "Mr very very smart"];

 
  // spread diye ek sathe korchi..
 friends.push(...schoolFriends);//etar mane holo puro array na giye vitorer value gulo eke eke push hochche..
 console.log(friends); //[ 'Rahim', 'Karim', 'pintu', 'chintu', 'bulbul' ]
 friends.push(...collegeFriends);
 console.log(friends);
// [
//   'Rahim',
//   'Karim',
//   'pintu',
//   'chintu',
//   'bulbul',
//   'Mr. Smart',
//   'Mr very very smart'
// ]
 

   /* Object example */
const user = { name: "Mezba", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = {...user, ...otherInfo};
console.log(userInfo);

// spread(...user) mane userObject er key value gulo copy kore new object e ana ..

 // userInfo er vitore user and othr info 2 tai merge hoye geche

// rest operator (...)

// rest operator parameter hishebe onek value eksathe array te collect kore

 // ekhane ...friends holo rest parameter
 // etate joto string pathano hok friends er array te joma hobe..tahole function er vitore 
//  friends = ["pintu", "cinthu", "bulbul", "chulbul", "mezba"];..emon hoy..
// tarpor forEach loop kore sobar jonno message dichche

 const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) =>
        console.log(`Send Invitation to ${friend}`)
    );
 }

 sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");
// Send Invitation to pintu
// Send Invitation to cinthu
// Send Invitation to bulbul
// Send Invitation to chulbul
// Send Invitation to mezba

/* Practical examples */
// example 1
const user1 = {name:  "Jerin", age: 22 };
const updated = {...user1,age:23};
console.log(updated);// { name: 'Jerin', age: 23 } ........shallow copy ...(React e useState e mostly eta use hoy)

// example2
 function sum(...nums: number[]) {
   return nums.reduce((acc,n) => acc + n, 0);
 }
 sum(1,2,3,4); //10

 //example3
 /*
What will be the output of this code?

Hello, Jerin!
Hello, Rifa!
Hello, Anika!
 */

function greet (msg:string, ...names:string[]){
   names.forEach(name => console.log(`${name}!`))
   
}

greet("Hello", "Jerin", "Rifa", "Anika")


