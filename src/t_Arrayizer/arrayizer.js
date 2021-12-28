import React, { useState } from 'react';
import "./arrayizer.css";
import Arrayizer_Output from "./arrayizer_output";
import Arrayizer_Selector from "./arrayizer_select";

function Arrayizer(props) {

    const [values, setValues] = useState ("Banana Apple Muffins");
    const [transformedText, setTransformedText] = useState("");
    const [chosenLanguage, setChosenLanguage] = useState("javascript");
    const [arrayName, setArrayName] = useState("array");

    const handleArrayNameChange = (event) => {
        setArrayName(event.target.value);
    }

    const handleLanguageChange = (event) => {
        setChosenLanguage(event.target.value);
    }

    const handleInputChange = (event) => {
        setValues(event.target.value);
    }

    const handleClick = (event) => {
        var result = "var "+arrayName+" = [";
        var array = values.split(" ");
        array.forEach(function(element, idx, array){
            if(idx != array.length - 1){
                result = result.concat("'"+element+"'"+",")
            } else {
                result = result.concat("'"+element+"'")
            }
        });
        result = result.concat("];");
        setTransformedText(result);
    }

    return (
        <div className={"arrayizer"}>
            <form>
                <label>
                    Elements to transform into Array:
                    <br/>
                    <input
                        id={"arrayizer_input_text"}
                        value={values}
                        name={"text_to_array"}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
            </form>
            <label>
                Write the name of your array:
            </label>
            <input
                id={"arrayizer_array_name"}
                value={arrayName}
                name={"array_name"}
                onChange={handleArrayNameChange}
            />
            <Arrayizer_Selector handleChange={handleLanguageChange}/>
            <button onClick={handleClick}>
                Transform into {chosenLanguage} array!
            </button>
            <Arrayizer_Output text_to_array={transformedText}/>
        </div>
    );
}

export default Arrayizer;