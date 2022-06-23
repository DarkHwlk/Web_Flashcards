import React, {useState} from "react";
import {connect} from 'react-redux';

/* components */

function CustomMainFlashcard(props) {

    return (
    <div className="custom-main-flashcard">
        <button>
            <i className='fas fa-edit'/> 
            <span>Edit cards</span>
        </button>
        <button>
            <i className='fa fa-plus-square'/> 
            <span>Add new card</span>
        </button>
        <button>
            <i className='fa fa-sort-amount-asc'/> 
            <span>Sort cards</span>
        </button>
        <button>
            <i className='fa fa-filter'/> 
            <span>Filter cards</span>
        </button>
    </div>
  );
} 

export default CustomMainFlashcard;