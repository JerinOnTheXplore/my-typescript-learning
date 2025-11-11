// union
// either one type / another

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User Dashboard";
    } else {
        return "guest dashboard";
    }
};

// getDashboard("guest") evabe likhle ..Argument of type '"guest"' is not assignable to parameter of type 'UserRole'...eta dibe...//error dey karon "guest" UserRole union er modhdhe nai
getDashboard("admin");


//intersection
//combine kore multiple types k
type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;// type define korte gele amra ekta & use korbo

const MikiCat: EmployeeManager = {
    id: "123",
  name: "MikiTheCuteBilli",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
}
// ekhane ami jodi designation na dei tahole error dibe karon karon object ta 2 ta type er combination...
//Intersection (&) mane holo combine multiple types into one, jekhane sobgulo type er property rakhte hobe..
