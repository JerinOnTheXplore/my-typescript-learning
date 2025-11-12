//Type Assertion
// type assertion mane holo TypeScript j type dhore nichche seta override kore nije manually type declare kora...
let anything: any;// any er mane holo sob kichur jaygay boshte pare..

anything = "MikiTheCuteBilli";

const kgToGmConverter = (
    input: string | number
): string | number | undefined => {
    if(typeof input === "number"){
        return input*1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }
};
// ekhane return type mixed...kokhono number ..kokhono string
// tai jokhon return value use korbo tokhon amra janate pari j eta konta hobe

// const result1 = kgToGmConverter(2) as number;
// console.log({result1})//{ result1: 2000 }

const result2 = kgToGmConverter("2 kg") as string;
// console.log(result2);Converted output is: 2000

type CustomError = {
    message: string;
};

try {
    
} catch (err){
    console.log((err as CustomError).message);
}

//ekhane typeScript janena err kemon type er hobe..
// tai manually bolsi etar type CustomError
// tokhon .message property access kora jabe without any error

