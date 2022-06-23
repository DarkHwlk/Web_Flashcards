import React, {useState} from "react";
import {connect} from 'react-redux';

/* components */
import Header from "../header/Header";
import Title from "../title/Title";
import LearnCardsContainer from "../content/learn-card/LearnCardsContainer";
import MultipleChoiceContainer from "../content/multiple-choice/MultipleChoiceContainer";
import WritingContainer from "../content/writing/WritingContainer";
import ExamContainer from "../content/exam/ExamContainer";
import ChartContainer from "../content/chart/ChartContainer";
import RememberRateContainer from "../content/remember-rate/RememberRateContainer";
import AuthorContainer from "../info-author/AuthorContainer";

function PageLearnFlashcard(props) {
  const [flip, setFlip] = useState(false);

  return (
  <div className="wrapper">
    <Header/>
    <Title/>
    {/* Content */}
    <div className="container content-page">
      <div className="content-page">
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
                <p className="options-content">
                <i className='fas fa-square'/>
                <i className='far fa-square ic-card-rear'/>
                Learn flashcards
                </p>
                <p className="options-content">
                <i className='fas fa-check-circle'/>
                Multiple-choice
                </p>
                <p className="options-content">
                <i className='fas fa-pencil-alt'/>
                Writing
                </p>
                <p className="options-content">
                <i className='fas fa-volume-up'/>
                Listening
                </p>
                <p className="options-content">
                <i className='fas fa-file-alt'/>
                <i className='far fa-file-alt ic-card-rear'/>
                Exam
                </p>
            </div>
            <div className="options-block">
                <h3>RESULT</h3>
                <p className="options-content">
                <i className="fa fa-line-chart"/>
                Chart 
                </p>
                <p className="options-content">
                <i className="fa fa-percent"/>
                Remember rates
                </p>
            </div>
        </div>
        {/* main flashcard container */} 

        <LearnCardsContainer/>
        {/* <MultipleChoiceContainer/> */}
        {/* <WritingContainer/> */}
        {/* <ExamContainer/> */}
        {/* <ChartContainer/> */}
        {/* <RememberRateContainer /> */}
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
      
  };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLearnFlashcard);
//export default PageLearnFlashcard;