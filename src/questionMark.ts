//ternary operator example
//purpose: short form of if-else for quick decision making

function checkPass(mark: number){
    const result = mark >= 40 ? "pass":"fail";
    console.log(result);
}
checkPass(75);//pass
checkPass(34);//fail

// Nullish Coalescing Operator (??)

//purpose: fallback value dewa jokhon null/undefined hoy

const savedName = null;
const displayName = savedName ?? "Guest User";
console.log(displayName);
//ekhane jodi savedName null ba undefined hoy, tokhon e "Guest User" use hobe....

const savedName2 = "";//empty string
const displayName2 = savedName2?? "Guest User2";
console.log(displayName2);
//Output: "" (ekdom khali string ..Guest User na)
// ?? Nullish Coalescing Operator shudhu 2 ta obostha check kore;null and undefined
//ei 2tar baire jodi kichu thake jemon "",0,false
//tahole oguloke valid value dhora hoy

/* Optional Chaining (?.) */

 const student = {
    name: "Rafiq",
    details: {
        age: 22,
        address: {
            city: "Chattogram",
        },
    }
 };

 const postal = student.details?.address?.postalCode;
 console.log(postal);//postal code jehetu nei tai runtime e code crush korbena..Optional Chaining (?.) use korechi

 