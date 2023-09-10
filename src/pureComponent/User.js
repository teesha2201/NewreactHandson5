import React, { PureComponent }  from "react";
 
class User extends  PureComponent
{
    render()
    {
        console.log("check Re-rendering from User Component: " ,this.props.name ,this.props.age , this.props.eligible)
        return(
          <div>
             
                <h1>-:Eligible for Vote:-</h1> 
                <h4>User:{this.props.name}</h4>
                <h4>User's Age:{this.props.age}</h4>
                <h4>User's Eligible:{this.props.eligible}</h4>
            </div>
        )
    }
}
export default User