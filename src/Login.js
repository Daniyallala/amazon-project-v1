import React, {useState} from 'react';
import './Login.css';
import { Link,useHistory} from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                // it successfully user signin with Email and Password
              if(auth){
                history.push('/')
              }
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                // it successfully created a new user with Email and Password
              if(auth){
                history.push('/')
              }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to = "/">
        <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt=""/>
        </Link>
        <div className='login--container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
            </form>
            <p>
                By continuing, you agree to Amazon's conditions of Use and Privacy Notice, our Cookies Notice and our Intreset-Based Ads Notice.
            </p>
            <button type='submit' onClick={register} className='login--registerButton'>create your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login