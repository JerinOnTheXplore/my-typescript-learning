//object destructuring
// array destructuring

   /*Object destructuring */
const user = {
    id: 123,
    name: {
        firstName: "Miki",
        middleName: "theCute",
        lastName: "Billi",
    },
    gender: "male",
    favouriteColor: "oor kono favourite color nai",
};
// const myFavouriteColor = user.favouriteColor;
// console.log(myFavouriteColor);
// const myMiddleName = user.name.middleName;.....jodi amader aro deeply nested object thakto tahole evabe dot dot diye ber kora effective na.....

// evabe korbo
// const { favouriteColor } = user ;
// console.log(favouriteColor);// oor kono favourite color nai

// const { favouriteColor:myFavouriteColor } = user ;
// console.log(myFavouriteColor);// myFavouriteColor ei namei ekhane chintese
// etake bole name alias kora
// output : oor kono favourite color nai

//destructuring korar khetre type use korbona...karon name alias hoye jabe...
// jemon; 
// const { favouriteColor:string } = user ; X eta kora jabena !!..tai amra explicitly ekhane type define korte parbona..

//ekhon jodi middle name ber korte chai taile kivabe distructure korbo ??
//  const { favouriteColor , name: {middleName}} = user;
//  console.log(middleName);// theCute

//* ekhon jodi etake nameAlias diye kori */

const {favouriteColor, name: {middleName: myMiddleName}} = user;
console.log(myMiddleName);//ekhon sobai myMiddleName diye chinbe..

  /*array destructuring */

  const friends = ["karim", "Rahim", "Mahim"];

//   const myBestFriend = friends[1];
//   console.log(myBestFriend);//Rahim

//destructuring korle

// const [A, myBestFriend , C] = friends;
// console.log(myBestFriend);//Rahim

// ekhane A,C use hochche na tai A,C baad diye korte pari...etake bole skipping

  const [ ,myBestFriend, ] = friends;
  console.log(myBestFriend);

