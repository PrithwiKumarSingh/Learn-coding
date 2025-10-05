import { useState } from 'react'
import './SignUp'
function Login({switchToSignUp}){
        const [showPass, setShowPass] = useState(true);

    return (
        <>
            <div className="card">
            <h1>Login</h1>
            <input type="email" placeholder='Email' />
            <div className='input-icon'>
                <input type={showPass? "password": "text"} placeholder='Password' />
                <img id='inputIcon' onClick={()=> {
                    if(showPass){
                        setShowPass(false);
                    }else setShowPass(true);
                }} style={{"height":"20px"}} src={showPass?"https://www.svgrepo.com/show/532493/eye.svg":"https://www.svgrepo.com/show/532465/eye-slash.svg"} alt="" />
            </div>
            
            <button type='submit'>Login</button>
            <p>Already have an account? <a onClick={()=>switchToSignUp()} href="#">Signup</a></p>

            <div id='direct-login'>
                <button id='facebook'>Login with Facebook 
                    <img src="https://www.svgrepo.com/show/506477/facebook.svg" alt="" />
                </button>
                <button id='google'>Login with Google
                    <img src="   https://cdn-icons-png.flaticon.com/512/281/281764.png " alt="" />
                </button>
            </div>
        </div>
        </>
    )
}

export default Login