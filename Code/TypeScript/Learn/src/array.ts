interface User2 {
  firstName: string;
  lastName: string;
  age: number;

}


function filterUser(user: User2[]) {
  let ans = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].age >= 18)
      ans.push(user[i]);
  }
  return ans;
}

const findUser = filterUser([
  {
    firstName: "Prithwi",
    lastName: "Kumar",
    age: 22
  }, {
    firstName: "Harkirat",
    lastName: "Singh",
    age: 12
  }
])

console.log(findUser);
