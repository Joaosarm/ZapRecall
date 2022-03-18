import React from "react";

function TelaInicial({setButton}){
    const [visibility, setVisibility] = React.useState(true);

    function changeScreen(){
        setVisibility(false);
        setButton(false);
    }

    return(
        <>
        {visibility ? <section className = 'telaInicial'><img src='./img/logo.png'/><h1>ZapRecall</h1><button onClick = {changeScreen}>Iniciar Recall</button></section> : <></>} 
        </>
    )
}

export default TelaInicial;