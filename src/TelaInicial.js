import React from "react";

function TelaInicial(){
    const [visibilidade, setVisibilidade] = React.useState(true);
    return(
        <>
        {visibilidade ? <section className = 'telaInicial'><img src='./img/logo.png'/><h1>ZapRecall</h1><button onClick = {() => setVisibilidade(false)}>Iniciar Recall</button></section> : <></>} 
        </>
    )
}

export default TelaInicial;

{/* <button onClick={() => setVisibilidade(false)}>iniciar Recall</button> */}