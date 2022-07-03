import React, {useState} from "react";

/* components */

function AnswerMultipleChoice(props) {
    const {cardsObject, choiceObject, onChangeCurrentAnswer, onAddMultipleChoice} = props;
    const {cards, cardFocus} = cardsObject;
    const {multipleChoices, currentMultipleChoice} = choiceObject;

    const answer = [cards[0].word,cards[cardFocus.id].word,cards[3].word,cards[4].word];
    const answersId = [0,cardFocus.id,3,4];
    
    /* Func random answer (ERROR) */
    const getAnswerRand = (cards) => {
        let answer = [];
        let answerId = [];
        let curId;
        for(let i=0; i<4; i++){
            if(answerId.length===0){
                curId = Math.floor(Math.random()*(cards.length+1));
                answerId.push(curId);
                answer.push(cards[curId].word);
            }
            else{
                while(1){
                    curId = Math.floor(Math.random()*(cards.length+1));
                    if(!answerId.find(ele => (ele===curId))){
                        /* Neu k co phan tu nao thoa man = curId */
                        answerId.push(curId);
                        answer.push(cards[curId].word);
                        break;
                    }
                }
            }
        }
        console.log(answerId);
        console.log(answer);
        return answer;
    }

    /* Choose answer */
    const chooseAnswer = (id, cardFocusId) => {
        onChangeCurrentAnswer(id);
        onAddMultipleChoice(id, cardFocusId);
    }

    /* Show button */
    const showButtonAnswers = (answersId, cards) => {
        let result = null;
        result = answersId.map((answerId, id)=>{
            if((multipleChoices.length>(cardFocus.id))&&(multipleChoices[cardFocus.id]!==-1)){
                if((answerId===cardFocus.id)){
                    return <button className="correct" key={id}>
                                <h3>{id+1}</h3>
                                <p>{cards[answerId].word}</p>
                            </button>;
                }else if((multipleChoices[cardFocus.id]===id)&&(answerId!==cardFocus.id)){
                    return <button className="incorrect" key={id}>
                                <h3>{id+1}</h3>
                                <p>{cards[answerId].word}</p>
                            </button>;
                }else{
                    return <button key={id}>
                                <h3>{id+1}</h3>
                                <p>{cards[answerId].word}</p>
                            </button>
                }
            }else{
                if(currentMultipleChoice===-1){
                    return <button key={id}
                                onClick={()=>chooseAnswer(id, cardFocus.id)}    
                            >
                                <h3>{id+1}</h3>
                                <p>{cards[answerId].word}</p>
                            </button>
                }else{
                    if((answerId===cardFocus.id)){
                        return <button className="correct" key={id}>
                                    <h3>{id+1}</h3>
                                    <p>{cards[answerId].word}</p>
                                </button>;
                    }else if((currentMultipleChoice===id)&&(answerId!==cardFocus.id)){
                        return <button className="incorrect" key={id}>
                                    <h3>{id+1}</h3>
                                    <p>{cards[answerId].word}</p>
                                </button>;
                    }else{
                        return <button key={id}
                                onClick={()=>chooseAnswer(id, cardFocus.id)}
                                    
                            >
                                <h3>{id+1}</h3>
                                <p>{cards[answerId].word}</p>
                            </button>
                    }
                }
            }
        })
        return result;
    }

    return (
    <div className="answer">
        {showButtonAnswers(answersId, cards)}
    </div>
  );
}

export default AnswerMultipleChoice;