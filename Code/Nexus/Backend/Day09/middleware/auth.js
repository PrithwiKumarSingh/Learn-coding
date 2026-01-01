const auth = (req,res,next)=>{
  // authentication karna padega ki admin hi ho
  // dummy code of Authentication
  
  const token = "ABCDEF";
  const Access = token === "ABCDEF" ?1:0;
  if(!Access)
    res.status(403).send("No Permission");
  next();
}

module.exports = {auth};
