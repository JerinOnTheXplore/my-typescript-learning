//Type Assertion
// type assertion mane holo TypeScript j type dhore nichche seta override kore nije manually type declare kora...
// let anything: any;// any er mane holo sob kichur jaygay boshte pare..

// anything = "MikiTheCuteBilli";

// const kgToGmConverter = (
//     input: string | number
// ): string | number | undefined => {
//     if(typeof input === "number"){
//         return input*1000;
//     } else if (typeof input === "string") {
//         const [value] = input.split(" ");
//         return `Converted output is: ${Number(value) * 1000}`;
//     }
// };
// ekhane return type mixed...kokhono number ..kokhono string
// tai jokhon return value use korbo tokhon amra janate pari j eta konta hobe

// const result1 = kgToGmConverter(2) as number;
// console.log({result1})//{ result1: 2000 }

// const result2 = kgToGmConverter("2 kg") as string;
// // console.log(result2);Converted output is: 2000

// type CustomError = {
//     message: string;
// };

// try {
    
// } catch (err){
//     console.log((err as CustomError).message);
// }

//ekhane typeScript janena err kemon type er hobe..
// tai manually bolsi etar type CustomError
// tokhon .message property access kora jabe without any error

// Realistic Example: Currency Converter (Taka → Paisa / Dollar → Cents)

let anyValue : any;
anyValue = "Transaction Data";

const currencyConverter = (input: string | number):string|number|undefined => {
    if(typeof input === "number"){
        //example 1 dollar = 100 cents
        return input*100;
    } else if (typeof input === "string") {
        const [value,currency] = input.split(" ");
        if(currency === "USD"){
            return `Converted output is: ${Number(value)*100} cents`
        } else if (currency === "BDT"){
            return `Converted output is: ${Number(value)*100} paisa`;
        }else {
            return "Unsupported Currency";
        }
    }
};

// const result1 = currencyConverter(5) as number;//number theke cent hoy
// console.log({result1}); //{ result1: 500 }

const result2 = currencyConverter("5 USD") as string;//string theke cents hoy
console.log(result2);//Converted output is: 500 cents
// Converted output is: 1000 paisa

const result3 = currencyConverter("10 BDT") as string; //string theke paisa 
console.log(result3);// Converted output is: 1000 paisa

const splitInput = "5 USD";
const [value, currency] = splitInput.split(" ");
console.log(splitInput);// value = "5" ; currency = "USD"
// mane holo split(" ")
// string take jekhane space ache sekhan theke alada kore ekta array banay
// mane array er first er ta jabe value te..2nd ta currency te...