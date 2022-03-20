import Cards from "./Cards";
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

function Footer(props){
    const {numTotal, answered, icons, rigthAnswers} = props;
    if(numTotal === 0||answered === 0){
        return (
            <footer>
                <p>{answered}/{numTotal} CONCLUÍDOS</p>
            </footer>
        )
    } else if(answered < numTotal){
        return(
            <footer>
                <p>{answered}/{numTotal} CONCLUÍDOS</p>
                <p>{icons.map(icon => renderIcon(icon))}</p>
            </footer>
        )
    } else{
        if(rigthAnswers < numTotal){
            return(
            <footer>
                <p className="title-message"><img src="./img/sad.png" alt="sad face"/><strong>PUTZ!</strong> </p>
                <p className="message">Ainda faltaram alguns... Mas não desanime!</p>
                <p>{icons.map(icon => renderIcon(icon))}</p>
            </footer>
            )
        } else{
            return(
                <footer>
                    <p className="title-message"><img src="./img/party.png" alt="happy face"/> <strong> PARABÉNS!</strong></p>
                    <p className="message">Você não esqueceu de nenhum flashcard!</p>
                    <p>{icons.map(icon => renderIcon(icon))}</p>
                </footer>
                )
        }
    }
}

function renderIcon(icon){
    if(icon === 'close-circle') return <ion-icon class='icon wrong' name={icon}></ion-icon>
    else if(icon === 'help-circle') return <ion-icon class='icon almost' name={icon}></ion-icon>
    else if(icon === 'checkmark-circle') return <ion-icon class='icon zap' name={icon}></ion-icon>
}

export default TelaDeck;