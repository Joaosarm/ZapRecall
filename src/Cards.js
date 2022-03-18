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

function Cards(){
    return (
        <ul className="cards">
            {cards.map((card, index) => WhichStep(card,index))}
        </ul>
    )
}

function WhichStep(card,index){
    const [step,setStep] = React.useState('firstStep');

    if(step == 'firstStep'){
        return(
            <li onClick={() => setStep('secondStep')} key={index}>Pergunta {index+1} <img src = './img/vector.png'/></li>
        )
    } else if(step == 'secondStep'){
        return(
            <li className="question" key={index}>{card.Question}<img onClick={() => setStep('thirdStep')} src="./img/setinha.png"/></li>
        )
    } else if(step == 'thirdStep'){
        return(
            <li className="answer" key={index}>{card.Answer} 
                <div className="buttons">
                    <button className="no">Não Lembrei</button>
                    <button className="almost">Quase não lembrei</button>
                    <button className="zap">Zap!</button>
                </div>
            </li>
        )
    }
}

export default Cards;