// eita holo typeAlias
//Type alias mane holo kono complex ba reusable type structure k ekta nam diye define kora, jate barbar na likhe shudhu namta use kora jay.


type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contactNo: string;
    address: {
        division: string;
        city: string;
    };
};
// eta diye reusable object bluePrint hoy..jotojon user e thakuk sobar structure e same thakbe...ete consistency thake..
const user1:User = {
    id:123,
    name: {
        firstName: "Mr",
        lastName: "X",
    },
    gender: "male",
    contactNo: "01556",
    address: {
        division: "Chattogram",
        city: "Chattogram",
    },
};

const user2:User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};
console.log(user2);

type IsAdmin = true;
const isAdmin : IsAdmin = true;

type Name = string;
const myName: Name = "Me.X";
//jokhon kono specific meaning dite chai..tokhon primitive er jonno o alias use kora hoy

// 

//function

type AddFunc = (num1: number, num2: number) => number ;

const add:AddFunc = (num1,num2) => num1+num2;

// advantages: reusability ,readability, maintainability,consistency...