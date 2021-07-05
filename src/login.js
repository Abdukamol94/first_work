import React from 'react'
import './login.css'
import Sign from './sign'
import App from './App'
import logo from './35-45.jpg'


class Login extends React.Component{

render(){

    return(

        <div className="container">
            <div className="cont" >

                <h3>Welcome Back</h3>
                <h4>Login back into your account</h4>
                <div className="main" >

                    <div className="main-in" >

                        <h5>Log In</h5>
                       
                        
                        <input type='text' placeholder="E-mail"></input>
                        <input type='text' placeholder="Password"></input>
                        <h2>Forgot Password?</h2>
                        <button  onClick={this.props.onchange} >Login</button>

                    </div>



                </div>
                <img src={logo} ></img>
                
                <div className="bottom" >

                <h6>Don't have on account yet? </h6>
                <a> Join Now </a>

                </div>
            

            </div>
            
            
            
            
            
         </div>

    )
}
}

export default Login  ; 