import React from 'react';

function ScrumRandomizerInput(props) {

    return (
        <div className={"agile_randomizer_input"}>
            <h2>Enter a list of names separated by a new line and then click on the button to randomize it and start the timer.</h2>
            <form>
                <label>
                    Name to put into a randomized list:
                    <br/>
                    <textarea
                        id={"scrumRandomizer_input_text"}
                        value={props.textAreaString}
                        name={"text_to_array"}
                        onChange={props.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Max time for your whole meeting:
                </label>
                <input
                    id={"maxTime"}
                    value={props.maxTime}
                    name={"maxTime"}
                    onChange={props.handleMaxTimeChange}
                />
                <br/>
                <button onClick={props.handleClick}>
                    Start the Meeting!
                </button>
            </form>
        </div>
    );
}

export default ScrumRandomizerInput;
