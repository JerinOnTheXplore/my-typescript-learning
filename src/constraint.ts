// constraint : strict rules deya

type Student = {id:number; name:string; dateOfBirth: string; class: string};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
}
//ekhane ki holo??

/*
  1. T extends Stuent mane j object ami pass korbo setar vitor obossoi Student type er property thkate hobe..orthat id, name, dateOfBirth, class egulo na thakle typeScript error dibe...
  ...ami chaile aro property dite pari..karon student er requirement fulfil holei hobe

  etai Generics with Constraints
*/

const student1 = {
  id: 123,
  name: "Goruu",
  hasPen: true,
};// ekhane dateOfBirth,class missing ..tai student1 dile error hobe

const student2 = {
  id: 321,
  name: "Chagol",
  hasCar: true,
  isMarried: true,
};
// ekhaneo dateOfBirth,class missing ..tai student2 dile ekhaneo error dibe

const student3 = {
  id: 444,
  name: "valluk",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: "1",
};

//eikhane student er sob required property ache...id, name, dateOfBirth, class...er sathe extra property hasWatch o ache..setao allowed

// Generics + extends etar mane holo must inclue fileds gulo r sathe notun prperty o dewa jabe

const result = addStudentToCourse(student3);
console.log(result);

/*real life example */

type Patient = {
  name: string;
  age: number;
}
// kintu ekta patient er extra property thakte pare bloodGroup, disease, admitted, consultant ..etc
//ami chai mandatory info chara kew jeno add na hote pare

const addToHospital = <T extends Patient> (info: T) => ({
    hospital: "United Hospital",
    ...info,
});