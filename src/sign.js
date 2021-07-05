import React from 'react'
import './sign.css'



class Sign extends React.Component{

render(){

    return(

        <div className="container">
            <div className="cont" >

                <h3>Welcome </h3>
                <h4>SignUp into your account</h4>
                <div className="main" >

                    <div className="main-in" >

                        <h5>Sign Up</h5>
                       
                        
                        <input type='text' placeholder="Full Name"></input>
                        <input type='email' placeholder="E-mail"></input>
                        <input type='password' placeholder="Password"></input>
                       
                        <button  onClick={this.props.onchange} >Sign Up</button>

                    </div>



                </div>
                <div className="image"></div>
                
                <div className="bottom" >

                <h6>Already have an accaunt? </h6>
                <a> Join In </a>

                </div>
            

            </div>
            
            
            
            
            
         </div>

    )
}
}

export default Sign;