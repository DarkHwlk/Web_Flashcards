import React, {useState} from "react";

/* components */

function WritingContainer() {

    const [status, setStatus] = useState(-1); //-1: normal, 0: false, 1 true

    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="writing-container">
            <div className="writing" >
                <div className="block-question">
                    <h4>Meaning <span>1</span></h4>
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
                        {status===-1 
                        ? <h4>Write the correct word</h4>
                        : <h4 className={status?'correct':'incorrect'}>
                        {status?'Correct':'Incorrect'}</h4>}
                        <button>{status===-1?"Don't know":'Next'} <i className="fas fa-angle-right"/></button>
                    </div>
                    <div className="answer">
                        <input type="text"/>
                        <button><p>Done</p></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WritingContainer;