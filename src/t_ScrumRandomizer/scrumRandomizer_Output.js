import React from "react";
import ScrumRandomizerCountdown from "./scrumRandomizer_countdown";

function ScrumRandomizerOutput(props){

    return (
        <div className={"scrum_randomizer_output"}>
            <ScrumRandomizerCountdown maxTime={props.maxTime}/>
            <ul>
                {props.list.map(name => <li key={name}> <h2> {name} </h2>  </li>)}
            </ul>
        </div>
    )
}
export default ScrumRandomizerOutput;
/*

Create a two columns thing. One with name, one with an icon to indicate where you "should" be at (i.e. active talker). Time is the maxTime value divided by number of people.

Also add something to go to the next person.

*/
