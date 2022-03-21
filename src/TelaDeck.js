import Cards from "./Cards";
import Footer from "./Footer";
import {useState} from 'react';

function TelaDeck({start}){
    const [answered, setAnswered] = useState(0);
    const [numTotal, setNumTotal] = useState(0);
    const [rigthAnswers, setRigthAnswers] = useState(0);

    const [icons] = useState([]);    
    return start ? (
        <section className = 'telaDeck'>
            <Header />
            <Cards answered = {answered} setAnswered={setAnswered} setNumTotal={setNumTotal} icons ={icons} rigthAnswers={rigthAnswers} setRigthAnswers={setRigthAnswers}/>
            <Footer numTotal = {numTotal} answered = {answered} icons={icons} rigthAnswers={rigthAnswers}/>
        </section>
    ):(<></>);
}

function Header(){
    return(
        <header>
            <img src="./img/logo-pequeno.png" alt="ZapRecall Logo"/>
            <h1>ZapRecall</h1>
        </header>
    )
}


export default TelaDeck;