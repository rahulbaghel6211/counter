import { useState } from 'react';

function Counter(props){

    const[counter,setCount]=useState(10);
    const handleChange=(value)=>{
        setCount(counter+value);
    }
    const double=()=>{
        setCount(counter+2);
    }
    return(
        <div className="counter">
            <h3>Counter{Counter%2===0 ? <h1 className="even">{counter}</h1>:<h1 className="odd">{counter}</h1>}</h3>

            <button className="btn" onClick={()=>handleChange(1)}>add 1</button>
            
            <button className="btn" onClick={()=>handleChange(-1)}>sub 1</button>
            
            <button className="btn" onClick={double}>double</button>

            <h3 style={counter%2===0?{color:"green"}:{color:"red"}}>Number is {counter%2===0 ? "even":"odd"}</h3>
        </div>
    
        )
}

export { Counter };