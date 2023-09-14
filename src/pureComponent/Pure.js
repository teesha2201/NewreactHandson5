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
                 <br></br>
                <p>In this example  first using state variable declaring keys i.e name, age,eligible of object and initialized as blank string  and passing from component and accepting using onClick event inside another Component in form of props so first time it will render because it will update from blank string to some input but after these it will not re-render whenever we click  on button validated because we are again try to update with same input . in such way it shows the example of PureComponent. </p>


                
            </div>
        )
    }
}


  export default Pure;
