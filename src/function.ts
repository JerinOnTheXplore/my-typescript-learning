//Function in typescript
// arrow function, normal function
     /* normal function */
function add(num1: number, num2: number): number{
    return num1 + num2;
}
console.log(add(5,8)); 



      /* arrow function */
const addArrow = (num1:number, num2:number): number => num1 + num2; 

console.log(addArrow(4,5));

    
     /* object method */
// object => function => method

const poorUser = {
    name: "jerin",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
}
//evabei object er modhde function declare korte hoy
poorUser.addBalance(1000000);


//loop er modhdhe function kivabe refine korte hoy??

//  const arr: number[] = [1, 4, 6];

//  const sqrArray = arr.map((elem:number): number => elem * elem);
//  console.log(sqrArray);// [ 1, 16, 36 ]


    /* array function */
const arr:number[] = [2,4,5];

const sqrArray = arr.map((elem:number): number => (elem*elem));

console.log(sqrArray);// [ 4, 16, 25 ] 

     //step by step :
/**
 * arr.map() ...ekta higher order function loop er moto kaj kore..
 *  eta array er protiti element ney...(elem)
 * tar por callback function apply hoy : (elem:number):number => elem *elem
 */
