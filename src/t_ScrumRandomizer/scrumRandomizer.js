import React, { useState } from 'react';
import ScrumRandomizerInput from "./scrumRandomizer_Input";
import ScrumRandomizerOutput from "./scrumRandomizer_Output";

function ScrumRandomizer() {

    const [toggle, setToggle] = useState(true);
    const [transformedList, setTransformedList] = useState([""]);
    const [maxTime, setMaxTime] = useState(15);
    const [textAreaString, setTextAreaString] = useState ("Eve \nAlice \nBob");

    const handleMaxTimeChange = (event) => {
        event.preventDefault();
        if(isNaN(parseInt(event.target.value))){
            setMaxTime(15);
            return;
        }
        setMaxTime(event.target.value);
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        setTextAreaString(event.target.value);
    }

    function randomizeArray(array){
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    const handleClick = (event) => {
        let array = turnStringIntoArray(textAreaString);
        let randomizedArray = randomizeArray(array);
        setTransformedList(randomizedArray);
        setToggle(false);
    }

    function turnStringIntoArray(string){
        string = string.replaceAll(",", " ");
        string = string.replaceAll(/(\r\n|\n|\r)/gm, " ");
        string = string.replace(/ +(?= )/g,"");
        return string.split(" ");
    }

    const reset = (event) => {
        setToggle(true);
    }

    return (
        <div className={"agile_randomizer"}>
            <h1>Agile/Scrum Meeting Randomizer</h1>
            {toggle ? <ScrumRandomizerInput
                maxTime={maxTime}
                list={transformedList}
                textAreaString={textAreaString}
                handleMaxTimeChange={handleMaxTimeChange}
                handleInputChange={handleInputChange}
                handleClick={handleClick} />
                : null}
            {!toggle ? <ScrumRandomizerOutput maxTime={maxTime} list={transformedList} /> : null}
            {!toggle ? <button onClick={reset}>Restart the meeting!</button>: null}
        </div>
    );
}

export default ScrumRandomizer;