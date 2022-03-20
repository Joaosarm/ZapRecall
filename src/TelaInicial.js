import React from "react";

function TelaInicial({setStart}){
    const [visibility, setVisibility] = React.useState(true);

    function changeScreen(){
        setVisibility(false);
        setStart(true);
    }

    return(
        <>
        {visibility ?( 
        <section className = 'telaInicial'>
            <img src='./img/logo.png' alt="ZapRecall Logo"/>
            <h1>ZapRecall</h1>
            <button onClick = {changeScreen}>Iniciar Recall</button>
        </section> 
        ):(
        <></>
        )} 
        </>
    )
}

export default TelaInicial;