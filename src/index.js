import React from "react";
import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";

function App(){
    return (
        <>
        <TelaInicial />
        {/* <TelaDeck /> */}
        </>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root)