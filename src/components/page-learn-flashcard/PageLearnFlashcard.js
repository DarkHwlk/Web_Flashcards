import React, {useState} from "react";
import {connect} from 'react-redux';

import tabs from '../../constants/tab';
import * as actions from '../../actions/index';

/* components */
import Header from "../header/Header";
import Title from "../title/Title";
import AuthorContainer from "../info-author/AuthorContainer";

import OptionsTab from "./OptionsTab";

function PageLearnFlashcard(props) {
  const {idTab} = props;

  // useState
  const [flip, setFlip] = useState(false);

  const showTab = (tabs, idTab) => {
    let result = null;
    result = tabs.find((tab, id)=>{
      return idTab === tab.id;
    }).show();
    return result;
  }

  return (
  <div className="wrapper">
    <Header/>
    <Title/>
    {/* Content */}
    <div className="container content-page">
      <div className="content-page">
        <OptionsTab />
        {/* main flashcard container */} 

        {showTab(tabs, idTab)}
      </div>
    </div>

    {/* Info Author */}
    <AuthorContainer/>

  </div>
  );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
  return { 
    idTab: state.tab,  
  };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeCurrentTab: (id) => {
      dispatch(actions.actChangeCurrentTab(id));
  },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLearnFlashcard);
//export default PageLearnFlashcard;