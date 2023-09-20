import {React, useState} from "react";

export default function Form(){

    const [inputs, setInputs] = useState({
        topText: "",
        bottomText: ""
    })

    function handleChange(e){
        console.log(e)
        const {name, value} = e.target 
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [name]: value,
            }
        })

    }

    console.log(inputs)
    return(
        <div>
            <input 
            placeholder="topText" 
            name="topText" 
            value={inputs.topText} 
            onChange={handleChange}
            />

            <input 
            placeholder="bottomText"  
            name="bottomText" 
            value={inputs.bottomText} 
            onChange={handleChange}
            />
            <button> Submit </button>

            <p>{inputs.topText}</p>
            <p>{inputs.bottomText}</p>
        </div>
    )
}