import './SignUp.css'
import Login from './Login'
import { useState } from 'react'


function SignUp({switchToLogin}){
    const [showPass, setShowPass] = useState(true);

    return (
        <>
        <div className="card">
            <h1>Signup</h1>
           <input type="email" placeholder='Email' />
            <input type={showPass?"password":"text"} placeholder='Create Password' />
            <div className='input-icon'>
                <input id='eyePass' type={showPass? "password": "text"} placeholder='Confirm Password' />
                <img onClick={()=>{
                    if(showPass)
                        setShowPass(false);
                    else 
                        setShowPass(true);
                }} id='inputIcon' style={{"height":"20px"}} src={showPass?"https://www.svgrepo.com/show/532493/eye.svg":"https://www.svgrepo.com/show/532465/eye-slash.svg"} alt="" />
            </div>
            
            <button type='submit'>Signup</button>
            <p>Already have an account? <a onClick={switchToLogin} href="#">Login</a></p>
            <div id='direct-login'>
                <a target='_blank' href="https://facebook.com">
                    <button id='facebook'>Login with Facebook 
                    <img src="https://www.svgrepo.com/show/506477/facebook.svg" alt="" />
                </button>
                </a>

                <a target="_blank" href="https://google.com">
                        <button id='google'>Login with Google 
                    <img src="   https://cdn-icons-png.flaticon.com/512/281/281764.png " alt="" />
                </button>
                </a>
            </div>
        </div>

        </>
    )
}


export default SignUp;