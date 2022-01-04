import React, { useState } from 'react';
import ArrayizerOutput from "./arrayizer_output";
import ArrayizerSelector from "./arrayizer_select";

function Arrayizer() {

    /* STATES */
    const [values, setValues] = useState ("Banana \nApple \nMuffins");
    const [transformedText, setTransformedText] = useState("");
    const [chosenLanguage, setChosenLanguage] = useState("javascript");
    const [arrayName, setArrayName] = useState("array");
    const [removeSymbol, setRemoveSymbol] = useState(false);
    const separator = " ";

    /* UTILITY FOR ARRAY */
    function arrayToJavascript(){
        let result = "var "+arrayName+" = [";
        result = arrayConcatenate(result);
        result = result.concat("];");
        return result;
    }

    function arrayToPython(){
        let result = arrayName+" = [";
        result = arrayConcatenate(result);
        result = result.concat("]");
        return result;
    }

    function makeAllChecksOnString(){
        let string = values;
        if(removeSymbol){
            string = string.replaceAll(",", " ");
            string = string.replaceAll(";", " ");
            string = string.replaceAll("-", " ");
        }
        string = string.replaceAll(/(\r\n|\n|\r)/gm, " ");
        string = string.replace(/ +(?= )/g,"");
        return string;
    }

    function arrayConcatenate(stringResult){
        let stringToArray = makeAllChecksOnString();
        let array = stringToArray.split(separator);
        array.forEach(function(element, idx, array){
            if(idx !== array.length - 1){
                stringResult = stringResult.concat("'"+element+"'"+",")
            } else {
                stringResult = stringResult.concat("'"+element+"'")
            }
        });
        stringResult = stringResult.replaceAll(/(\r\n|\n|\r)/gm, "");
        return stringResult;
    }

    /* EVENT HANDLING */
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
        event.preventDefault();
        let result = "";
        switch(chosenLanguage){
            case "python":
                result = arrayToPython();
                break;
            default:
                result = arrayToJavascript();
                break;
        }
        setTransformedText(result);
    }

    const handleToggleSymbol = (event) => {
        if(removeSymbol){
            setRemoveSymbol(false);
        } else {
            setRemoveSymbol(true);
        }
    }

    return (
        <div className={"arrayizer"}>
            <h1>List to Array</h1>
            <form>
                <label>
                    Elements to transform into Array:
                    <br/>
                    <textarea
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
            <br/>
            <input type="checkbox" id="removeExtra" name="remmoveExtra" value="removeExtra" onChange={handleToggleSymbol}/>
            <label htmlFor="removeExtra"> Check to remove all extra symbols (e.g. "-"). Use also for CSV format (e.g. "string1,string2,string3")</label>
            <ArrayizerSelector handleChange={handleLanguageChange}/>
            <button onClick={handleClick}>
                Transform into {chosenLanguage} array!
            </button>
            <ArrayizerOutput text_to_array={transformedText}/>
        </div>
    );
}

export default Arrayizer;