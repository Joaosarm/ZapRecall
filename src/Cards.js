import React from "react";
const cards = [
    { Question: 'O que é JSX?', Answer: 'Uma extensão de linguagem do JavaScript'},
    { Question: 'O React é __', Answer: 'Uma biblioteca JavaScript para construção de interfaces'},
    { Question: 'Componentes devem iniciar com __', Answer: 'Letra maiúscula'},
    { Question: 'Podemos colocar __ dentro do JSX', Answer: 'Expressões'},
    { Question: 'O ReactDOM nos ajuda __', Answer: 'Interagindo com a DOM para colocar componentes React na mesma'},
    { Question: 'Usamos o npm para __', Answer: 'Gerenciar os pacotes necessários e suas dependências'},
    { Question: 'Usamos props para __', Answer: 'Passar diferentes informações para componentes' },
    { Question: 'Usamos estado (state) para __', Answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
]

cards.sort(shuffle);

function Cards(props){
    const {setAnswered, setNumTotal, answered, icons, rigthAnswers,setRigthAnswers} = props;
    setNumTotal(cards.length);
    return (
        <ul className="cards">
            {cards.map((card, index) => WhichStep(card,index,setAnswered,answered,icons,rigthAnswers,setRigthAnswers))}
        </ul>
    )
}

function WhichStep(card,index,setAnswered,answered,icons,rigthAnswers,setRigthAnswers){
    const [step,setStep] = React.useState('firstStep');
    
    function checkAnswer(answer){
        setStep(answer);
        setAnswered(answered+1);
        if(answer === 'wrong') icons.push('close-circle');
        else if(answer === 'almost') {
            icons.push('help-circle');
            setRigthAnswers(rigthAnswers+1);
        }
        else if(answer === 'zap') {
            icons.push('checkmark-circle');
            setRigthAnswers(rigthAnswers+1);
        }
        console.log(icons)
    }

    if(step === 'firstStep'){
        return(
            <li onClick={() => setStep('secondStep')} key={index}>Pergunta {index+1} <ion-icon class='icon' name="play-outline"></ion-icon></li>
        )
    } else if(step === 'secondStep'){
        return(
            <li className="question" key={index}>{card.Question}<img onClick={() => setStep('thirdStep')} src="./img/setinha.png" alt='Turn Card Arrow'/></li>
        )
    } else if(step === 'thirdStep'){
        return(
            <li className="answer" key={index}>{card.Answer} 
                <div className="buttons">
                    <button className="wrong" onClick={() => checkAnswer('wrong')}>Não Lembrei</button>
                    <button className="almost" onClick={() => checkAnswer('almost')}>Quase não lembrei</button>
                    <button className="zap" onClick={() => checkAnswer('zap')}>Zap!</button>
                </div>
            </li>
        )
    }
    else{
        if(step === 'wrong'){
            return(
                <li className="wrong" key={index}>Pergunta {index+1} <ion-icon class='icon' name="close-circle"></ion-icon></li>
            )
        } else if(step === 'almost'){
            return(
                <li className="almost" key={index}>Pergunta {index+1}<ion-icon class='icon' name="help-circle"></ion-icon></li>
            )
        }else if(step === 'zap'){
            return(
                <li className="zap" key={index}>Pergunta {index+1}<ion-icon class='icon' name="checkmark-circle"></ion-icon></li>
            )
        }
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

export default Cards;