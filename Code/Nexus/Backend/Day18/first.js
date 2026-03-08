const bcrypt  = require('bcrypt');

const password = "Prithwi@123";

async function Hashing(){
    // console.time("hash");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const Hash = "$2b$10$IlnOkB1TZqMjBLU9T3PCG.gdRisUIjZs1tV9OACCPouGTSyHXeIky"
    // console.timeEnd("hash"); 

    const ans = await bcrypt.compare("Prithwi@123",Hash);
    console.log(ans);

    console.log(salt);
    console.log(hash);
}


Hashing();