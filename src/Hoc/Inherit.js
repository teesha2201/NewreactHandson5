import React from "react";
 
function Inherit (props)
{
    console.log()
    return(
        <>
        <div style={{backgroundColor:"lightcyan" ,border:"14px groove skyblue" , width:"300px" ,height:"200px"}}>
            <h4>Higher Order Component</h4>
            {<props.compopass/>}
           
        </div>
        <div style={{backgroundColor:"lightgray" ,border:"14px groove skyblue" , width:"300px" ,height:"200px" ,marginTop:"12px"}}>
            <h4>Higher Order Component</h4>
            {<props.compopass/>}
           
        </div>

        <div style={{backgroundColor:"lightpink" ,border:"14px groove skyblue" , width:"300px" ,height:"200px" ,marginTop:"12px"}}>
            <h4>Higher Order Component</h4>
            {<props.compopass/>}
           
        </div>
        
        </>
    )
}
export default Inherit