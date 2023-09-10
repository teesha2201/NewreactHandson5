import React ,{useState} from  'react'

function HighOrderCompo()
{
    const [data1, setData1]= useState(12)
    const [data2,setData2] = useState(1)
    
    const Addition =()=>{
        setData1(data1+12 )
        setData2(data2+1) 
    }
   
    return(
        <>
            <p>Table of 12 :<br></br>12 * {data2}= {data1} <br></br>
            </p>
            <button onClick={Addition }>Table of 12</button>
        </>
    )
}

export default HighOrderCompo