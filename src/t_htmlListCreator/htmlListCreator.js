import React, { useState } from 'react';
import ListCreatorOutput from "./listCreator_output";

function ListCreator() {

    /* STATES */
    const [values, setValues] = useState ("Banana \nApple \nMuffins");
    const [transformedText, setTransformedText] = useState("");
    const [removeSymbol, setRemoveSymbol] = useState(false);
    const separator = " ";

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

    function arrayConcatenate(){
        let stringToArray = makeAllChecksOnString();
        let array = stringToArray.split(separator);
        let stringResult = "<ul>\n";
        array.forEach(function(element, idx, array){
            stringResult = stringResult +"\t &OPENli key=list_element_"+idx+ "&CLOSE" + element + "&OPEN/li&CLOSE \n";
        });
        return stringResult;
    }

    const handleInputChange = (event) => {
        setValues(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        let result = arrayConcatenate();
        result = result + "</ul>";
        result = result.replaceAll("&OPEN", "<");
        result = result.replaceAll("&CLOSE", ">");
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
        <div className={"listCreator"}>
            <h1>List to HTML List</h1>
            <form>
                <label>
                    Elements to transform into a list:
                    <br/>
                    <textarea
                        id={"listCreator_input_text"}
                        value={values}
                        name={"text_to_array"}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
            </form>
            <br/>
            <input type="checkbox" id="removeExtra" name="remmoveExtra" value="removeExtra" onChange={handleToggleSymbol}/>
            <label htmlFor="removeExtra"> Check to remove all extra symbols (e.g. "-"). Use also for CSV format (e.g. "string1,string2,string3")</label>
            <br/>
            <button onClick={handleClick}>
                Transform into an HTML list!
            </button>
            <ListCreatorOutput text_to_array={transformedText}/>
        </div>
    );
}

export default ListCreator;