// import ".../App.css"
import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator=()=>{
    const[input,setInput]=useState("");

    const handleClick=(value)=>{
        if(value==="C")
        {
            setInput("")
        }
        else if(value==="=")
        {
            try{
                setInput(eval(input.toString()))
            }
            catch{
                setInput("Invalid Input!")
            }
        }
        else{
            setInput(input+value)
        }
    }

    const buttons=["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","C","="];

    return(
        <div className="calculator">
            <Display value={input}/>
            <div className="buttons">
                {
                    buttons.map((btn,i)=>(
                        <Button key={i} label={btn} onClick={handleClick}></Button>
                    ))
                }
            </div>

        </div>
    )

}

export default Calculator;