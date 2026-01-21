import { useState } from "react";
import '../App.css';

const Counter=()=>{
    const [value,setValue]=useState(0)
    return(
        <div className="counter">
            <h1>Counter app</h1>
            <span>{value}</span>
            <div style={{gap:"5px", margin:"4px"}}>
                <button onClick={()=>setValue((prev)=>prev+1)}>Increment</button>
                <button disabled={value==0} onClick={()=>setValue((prev)=>prev-1)}>Decrement</button>
            </div>
        </div>
    
    )
}

export default Counter;