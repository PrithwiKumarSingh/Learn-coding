function chaiAur(Kind : string | number){
    if(typeof Kind == "string"){
        return `Making ${Kind} chai ...`;
    }
    return `Order ${Kind} chai ...`;
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Massage not found`;
}

function orderChai(size: "small" | "medium" | "large"){
    if(size == "small"){
        return `small cutting chai....`;
    }
    if(size == "medium" || "small"){
        return `make extra chai ...`;
    }
    return `chai order #${size}`;
}

class Kullad{
    serve(){
        return `Serving Kullad Chai ...`;
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Chai...`;
    }
}


function serve(chai : Kullad | Cutting){
    if(chai instanceof Kullad){
        return chai.serve();
    }
}


// we can create our own type 
type Order = {
    type : string
    sugar : number
}
