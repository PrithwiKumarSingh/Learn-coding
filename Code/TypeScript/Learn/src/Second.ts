interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: "Prithwi" | "Ram";
  age: number;
  address: Address; // passing interface as type
}

interface Office {
  address: Address;
}

// using property of interface element 
const user: User = {
  name: "Prithwi",
  age: 22,
  address: {
    city: "Dehradun",
    country: "Uttrakhand",
    pincode: 434
  }
}

function IsLegal(user: User): boolean {
  if (user.age >= 18)
    return true;
  else
    return false;
}

const result = IsLegal(user);
console.log(result);


