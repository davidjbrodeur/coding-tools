import React from "react";

function ArrayizerSelector(props){

    const selectionList = [
        {value: 'javascript', name: 'Javascript'},
        {value: 'python', name:'Python'},
    ];

    return (
        <form>
            Pick your targetted coding language:
            <select onChange={props.handleChange}>
                {selectionList.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                })}
            </select>
        </form>
    )
}
export default ArrayizerSelector;