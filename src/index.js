import React from "react";
import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";
import TelaDeck from "./TelaDeck";

function App(){
    const [button,setButton] = React.useState(true);
    
    return (
        <>
        <TelaInicial setButton = {setButton}/>
        <TelaDeck button = {button}/>
        </>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root)