import React from "react";

function Arrayizer_Selector(props){

    const selectionList = [
        {value: 'javascript', name: 'Javascript'},
    ];

    return (
        <form>
            Pick your targetted coding language:
            <select value={props.selector} onChange={props.handleChange}>
                {selectionList.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                })}
            </select>
        </form>
    )
}
export default Arrayizer_Selector;