import React, { useState } from 'react';

function Arrayizer_Output(props) {

    return (
        <div>
            <textarea
                id={"arrayizer_output_text"}
                value={props.text_to_array}/>
        </div>
    );
}

export default Arrayizer_Output;