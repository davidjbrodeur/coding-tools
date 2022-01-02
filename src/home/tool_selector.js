import React from "react";

function ToolSelector(props){

    return (
        <form>
            Pick your IT/Coding tool:
            <select onChange={props.handleChange}>
                {props.list.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                })}
            </select>
        </form>
    )
}
export default ToolSelector;
