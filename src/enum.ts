// typescript e enum holo emon ekti structure jekhane ami fixed kichu constant value eksathe store korte pari..
// jemon user er role agei fixed.."Admin", "Editor", "Viewer"
//jodi eguloke normal string hishebe use kori..
// type UserRoles = "Admin" | "Editor" | "Viewer";
//enum use korle :
/*
  Structure centralized thake
 IntelliSense autocomplete kaj kore
 vul string likhe bug howar chance kome
 Type + value same jaygay thake
*/

// enum example

 enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
//ekhaner 3 ta role e hard coded string literal...ekhon jekhanei role lagbe shudhu enum dibo

// UserRoles.Admin
// UserRoles.Editor
// UserRoles.Viewer

/* canEdit() function ti ki kaj korche?? */

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } 
   return false;
};
//call korar somoy
const isEditPermissable = canEdit(UserRoles.Admin);//true
console.log(isEditPermissable);
console.log(canEdit(UserRoles.Admin));  // true
console.log(canEdit(UserRoles.Editor)); // true
console.log(canEdit(UserRoles.Viewer)); // false

