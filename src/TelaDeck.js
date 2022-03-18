import Cards from "./Cards";

function TelaDeck({button}){
    console.log(button);

    return button ? (<></>) : (<section className = 'telaDeck'><Header /><Cards /><Footer /></section>);
}

function Header(){
    return(
        <header>
            <img src="./img/logo-pequeno.png"/>
            <h1>ZapRecall</h1>
        </header>
    )
}

function Footer(){
    return(
        <footer>
            0/4 CONCLUÍDOS
        </footer>
    )
}

export default TelaDeck;