const data = {
    "firstname" : "Prithwi",
    "lastname" : "Kushwaha",
    "age" : 21,
    "gender" : "male",
    "email" : "prithwi.kushwaha@example.com"
}

const key = Object.keys(data).includes("firstname");
const value = Object.values(data).every();
console.log(key);
console.log(value);