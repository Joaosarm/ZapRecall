import React from "react";
import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";
import TelaDeck from "./TelaDeck";

function App(){
    const [start,setStart] = React.useState(false);
    
    return (
        <>
        <TelaInicial setStart = {setStart}/>
        <TelaDeck start = {start}/>
        </>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root)