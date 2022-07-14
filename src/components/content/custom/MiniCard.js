import React, {useState, useRef, useEffect} from "react";

/* components */

function MiniCard(props) {
    const {card, onEditCard, onDeleteCard} = props;
    const {id, word, meaning} = card;

    const [reorder,setReorder] = useState(0);  //0: no reorder card | 1: is reordering card now
    
    const [xCursor,setXCursor] = useState(0);
    const [yCursor,setYCursor] = useState(0);

    const cardRef = useRef();  //ref of this card

    const onMoveMouse = (e) => {
        /* Change x, y position of this card follow mouse client */
        setXCursor(e.clientX);
        setYCursor(e.clientY);
    }
    
    const onReorderCard = () => {
        /* Set reorder */
        setReorder(prev => 1-prev);
        /* add/remove Event mousemove */
        if(reorder){  // real reoder===0
            document.removeEventListener('mousemove', onMoveMouse);
        }else{  // real reoder===1
            document.addEventListener('mousemove', onMoveMouse);
        }
    }

    useEffect(()=>{ 
        /* Get x, y position of this mini card */
        const xCard = cardRef.current.getBoundingClientRect().x;
        const yCard = cardRef.current.getBoundingClientRect().y;
        setXCursor(xCard);
        setYCursor(yCard);

        return () => {

        }
    },[]);

    return (
    <div className={`minicard ${reorder?"cursor":""}`} ref={cardRef}
        style={reorder?{'left': `${xCursor-215}px`, 'top': `${yCursor-20}px`}:{}}
    >
        <span>{id+1}</span>
        <h2 className="minicard-word">
            {word}
        </h2>
        <h2  className="minicard-meaning">
            {meaning}
        </h2>
        <i className="fa fa-pencil edit-card"
            onClick={()=>onEditCard(id,{
                word,
                meaning,
            })}
        />
        <i className="fa fa-reorder reorder-card"
            onClick={()=>onReorderCard()}
        />
        <i className="fa fa-close delete-card"
            onClick={()=>onDeleteCard(card)}
        />
    </div>
  );
}
  
  export default MiniCard;