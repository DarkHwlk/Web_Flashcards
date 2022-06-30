import React, {useState} from "react";

import tabs from '../../constants/tab';

// components
import OptionTab from "./OptionTab";

function OptionsTab(props) {
  
  const showLearnTabs = (tabs) => {
    let result = null;
    result = tabs.filter((tab)=>{
      return tab.type === "LEARN";
    }).map((tab)=>{
      return <OptionTab tab={tab}/>;
    });
    return result;
  }

  const showResultTabs = (tabs) => {
    let result = null;
    result = tabs.filter((tab)=>{
      return tab.type === "RESULT";
    }).map((tab)=>{
      return <OptionTab tab={tab}/>;
    });
    return result;
  }

  return (
    <div className="options-container">
        <div className="options-block">
            <h3>DATE TO LEARN AGAIN</h3>
            <p className="options-content">
            <i className="fa-solid fa-bell bell-notice active"/>
            {/* <i className="fa-solid fa-bell-slash bell-notice"/> */}
            19/12/2020
            </p>
        </div>
        <div className="options-block">
            <h3>LEARN</h3>
            {showLearnTabs(tabs)}
        </div>
        <div className="options-block">
            <h3>RESULT</h3>
            {showResultTabs(tabs)}
        </div>
    </div>
  );
}

export default OptionsTab;
//export default PageLearnFlashcard;