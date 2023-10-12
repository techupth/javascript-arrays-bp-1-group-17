// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1]["name"];
let alexHobbies= "Watching basketball";
employees[1]["hobbies"].push(alexHobbies) ; 
let alexAndJamesAge= employees[0]["age"] + employees[1]["age"];
const updateEmployees = employees;
updateEmployees[2] = {
  name: "Alicia" ,
  age: 29 , 
  hobbies: ["Shopping","Reading novels"]
};
updateEmployees[3] = {
  name: "Kody" ,
  age: 19 , 
  hobbies: ["Computer games","Wakeboard"]
};
console.log(updateEmployees);
delete updateEmployees[3];
console.log(updateEmployees);