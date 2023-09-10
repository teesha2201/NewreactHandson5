import React, { Component } from 'react'
import User from './User'


class Pure extends  Component 
{
    constructor()
    {
        super()
        this.state={
            name:"",
            age:"",
            eligible:""
        }
    }

    
    
    render(){

        return(
            <div>
                
                <User name={this.state.name} age={this.state.age} eligible={this.state.eligible}/>
                   
                <button onClick={()=>this.setState({name:"Teesha", age:"22" , eligible:"Yes"})}>Validated</button>
             

                
            </div>
        )
    }
}


  export default Pure;