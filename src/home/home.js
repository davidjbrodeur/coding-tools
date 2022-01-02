import '../styles/style.css';
import Header from "./header";
import Footer from "./footer";
import Arrayizer from "../t_Arrayizer/arrayizer";
import ScrumRandomizer from "../t_ScrumRandomizer/scrumRandomizer";
import ToolSelector from "./tool_selector";
import React, { useState } from 'react';
import ListCreator from "../t_htmlListCreator/htmlListCreator";

function Home() {

    const [current, setCurrent] = useState ("arrayizer");

    const selectionList = [
        {value: 'arrayizer', name: 'Text to Array'},
        {value: 'scrumRandomizer', name:'Scrum Meeting Randomizer'},
        {value: 'listCreator', name: 'HTML List Creator from String'},
    ];

    const handleToolChange = (event) => {
        setCurrent(event.target.value);
    }

    return (
        <div className="App">
            <Header/>
            <body>
                <br/>
                <br/>
                <ToolSelector selector={current} list={selectionList} handleChange={handleToolChange}/>
                <br/>
                { current === "arrayizer" ? <Arrayizer/> : null}
                { current === "scrumRandomizer" ? <ScrumRandomizer/> : null}
                { current === "listCreator" ? <ListCreator/> : null}
            </body>
            <Footer/>
        </div>
    );
}

export default Home;