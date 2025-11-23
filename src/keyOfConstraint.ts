// keyof : type operator

// keyof holo typeScript er ekta type operator ja kono object type er sob keys (property names) k union type hishebe dey

type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle1 = "bike" | "car" | "cng";
type Myvehicle2 = keyof RichPeoplesVehicle

// const myVehicle: Myvehicle2 = "ship";// eta dekhay Type '"ship"' is not assignable to type 'keyof RichPeoplesVehicle'

// object access...dot vs bracket notation
type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

 const user: User = { id: 222, name: "gadha", address: { city: "ctg" } };


const myId = user["id"];
const myName = user["name"];
const address = user["address"];

// Generic function //

// const getPropertyFromObj = <x>(obj:x,key: keyof X)=>{
//     return obj[key];
// }
// const result1 = getPropertyFromObj(user, "emni");//compile time error dey