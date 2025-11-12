//nullable, unknown, void, never...ei 4 ti type Script e type safety ar error handling e help kore

    
      /* Nullable Type */

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }  else {
        console.log("From DB : All User");
    }
};

getUser(null); // From DB : All User
// getUser("jerin");//From DB: jerin

// input:string | null mane ei function er parameter 2 rokom hote pare..
// TypeScript default vabe dhore ney ami null dibona..tai ami jodi dite chai tahole explicitly bolte hobe null..
// ekhane if(input) jodi truthy hoy tahole console e user dekhabe...
// na hole "All-User" dekhabe..
// use: jokhon API theke data nibi ar jodi na jani j seta ashbe kina


     /* Unknown type */

const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    } else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice)* 0.1);
    }  else {
        console.log("Wrong Input");
    }
};

// discountCalculator(100);//10 ..jodi number hoy tahole 10% discount ber hochche..
discountCalculator(null);//Wrong Input

           /*Never type */

const throwError = (msg: string): never => {
    throw new Error(msg);
}
// never mane ei function kokhonoi return korbena
// eta hoyto error chure dey or infinite loop chalay
//typeScript jane ei function theke porer kono code e poichanou somvob na..

// Use: jokhon function theke return korar kono meaning nei..jemon error throw kora or programme crash korano


      /* Void type */

function logMessage(msg:string): void {
    console.log(msg);
}

console.log("Ami ajke Statistics er Chi-Square er math sob sesh korbo... na korle amar nam Jerin na!")//Output: Ami ajke Statistics er Chi-Square er math sob sesh korbo... na korle amar nam Jerin na !!!