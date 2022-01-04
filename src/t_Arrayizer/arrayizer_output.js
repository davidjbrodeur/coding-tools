import React from 'react';

function ArrayizerOutput(props) {

    const selectAllText = (e) => {
        e.target.select();
    };

    return (
        <div>
            <textarea
                id={"arrayizer_output_text"}
                value={props.text_to_array}
                onClick={selectAllText}/>
        </div>
    );
}

export default ArrayizerOutput;