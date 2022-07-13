import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */

function EditCard(props) {
    const {edit_card, onCloseEditBox, onChangeContentEditBox,
        onSaveNewCard, onSaveEditedCard} = props;

    const {isEditing, content} = edit_card;
    const {word, meaning} = content;

    const onChangeContent = (name, value) => {
        let newContent = content;
        newContent[name] = value;
        onChangeContentEditBox(newContent);
    }

    const onSaveCard = (isEditing, content) => {
        if(isEditing) onSaveEditedCard(isEditing-1, content);
        else onSaveNewCard(content);
        onCloseEditBox()
    }

    return (
    <div id="create_card">
        <h2>{isEditing===0 ? "Create" : "Edit"} Flashcard</h2>
        <label >Word</label>
        <textarea 
            id="question" name="word" value={word}
            onChange= {(e) => onChangeContent(e.target.name, e.target.value)}
        />
        <label >Meaning</label>
        <br/>
        <textarea 
            id="answer" name="meaning" value={meaning}
            onChange= {(e) => onChangeContent(e.target.name, e.target.value)}
        />
        <div>
            <button 
                id="save_card"
                onClick={()=>onSaveCard(isEditing, content)}
            >Save</button> 
            <button 
                id="close_card_box"
                onClick={()=>onCloseEditBox()}
            >Close</button>
        </div>
    </div>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        edit_card: state.edit_card,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseEditBox: () => {
            dispatch(actions.actCloseEditBox());
        },  
        onChangeContentEditBox: (content) => {
            dispatch(actions.actChangeContentEditBox(content));
        },  
        onSaveNewCard: (content) => {
            dispatch(actions.actSaveNewCard(content));
        },  
        onSaveEditedCard: (id, content) => {
            dispatch(actions.actSaveEditedCard(id, content));
        }, 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);