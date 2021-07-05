import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Sign from './sign'
import React from 'react'

class  App extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      key:true
    }

  }

  render(){
    const onchange=()=>{
      this.setState({key: !this.state.key})
    }

    return(
      <div>
        {
          this.state.key? <Login onchange={onchange}  />:<Sign  onchange={onchange}/>
        }
      </div>
    )

  }

  
  
}
  
export default App;
