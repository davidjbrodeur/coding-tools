import React from 'react';

function ListCreatorOutput(props) {

    const selectAllText = (e) => {
        e.target.select();
    };

    return (
        <div>
            <textarea
                id={"listCreator_output_text"}
                value={props.text_to_array}
                onClick={selectAllText}
                />
        </div>
    );
}

export default ListCreatorOutput;