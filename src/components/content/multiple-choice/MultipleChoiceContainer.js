import React, {useState} from "react";

/* components */

function MultipleChoiceContainer() {

    const [status, setStatus] = useState(-1); //-1: normal, 0: false, 1 true

    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="multiple-choice-container">
            <div className="multiple-choice" >
                <div className="block-question">
                    <h4>Meaning <span>1/20</span></h4>
                    <div className="question">
                        <h3>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                            The animal lives in water, it has fin<br/>
                        </h3>
                    </div>
                </div>
                <div className="block-answer">
                    <div className="status">
                        <button><i className="fas fa-angle-left"/> Back</button>
                        {status===-1 
                        ? <h4>Choose the correct word</h4>
                        : <h4 className={status?'correct':'incorrect'}>
                        {status?'Correct':'Incorrect'}</h4>}
                        <button>Next <i className="fas fa-angle-right"/></button>
                    </div>
                    <div className="answer">
                        <button>
                            <h3>1</h3>
                            <p>Dog</p>
                        </button>
                        <button>
                            <h3>2</h3>
                            <p>Cat</p>
                        </button>
                        <button>
                            <h3>3</h3>
                            <p>Fish</p>
                        </button>
                        <button>
                            <h3>4</h3>
                            <p>Lion</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MultipleChoiceContainer;