import React, {useState, useRef, useEffect} from 'react'

function Auth() {

    const [account, setAccount] = useState(true)

    const GoogleSignIn = (x)=>{
        return(
                <div className="google_container">
                    <h3>Sign {x} with Google</h3>
                </div>
            
        )
    }

    const SignIn = ()=>{
        return(
            <div className='form_container'>
                <h2> Sign In</h2>
                <form className="login_container">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                </form>
                <button className="login_btn"> Sign In</button>
            
                <div className="no_account">
                    <p> I don't have an account <span className="create_account" onClick={()=> setAccount(false)}>Sign Up</span> </p>
                </div>

                { GoogleSignIn("in") }
            </div>
        )
    }

    const SignUp = ()=>{
        return(
            <div className='form_container'>
                <h2> Sign Up</h2>
                <form className="login_container">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                </form>
                <button className="login_btn"> Sign up</button>
            
                <div className="no_account">
                    <p> I have an account already,  <span className="create_account" onClick={()=> setAccount(true)}>Sign in</span> </p>
                </div>
                { GoogleSignIn("up") }
            </div>
        )
    }


  return (
    <div className='auth_page'>

    { account ? <SignIn /> : <SignUp/>}
    </div>
  )
}

export default Auth