let subs : number | string = 10; // union 

let apiRequestStatus : 'pending' | 'error' | 'success' = 'pending';
apiRequestStatus = 'pending';

let airlineSeats : 'aisle' | 'window' | 'middle' = 'window';
airlineSeats = 'middle';

const orders = ["23", "24", "25", "28"];
let currentorder : string | undefined;

for(let order of orders){
    if(order === "28"){
        currentorder = order;
    }
}

console.log(typeof(Number(currentorder)));