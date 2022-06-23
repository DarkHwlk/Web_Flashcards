import React, { PureComponent } from 'react';
import '../../../css/remember-rate.css';

/* components */

const data = [
    {
      name: '19/12',
      learnedCards: 22,
    },
    {
      name: '20/12',
      learnedCards: 20,
    },
    {
      name: '21/12',
      learnedCards: 24,
    },
    {
      name: '22/12',
      learnedCards: 29,
    },
    {
      name: '23/12',
      learnedCards: 23,
    },
    {
      name: '24/12',
      learnedCards: 27,
    },
    {
      name: '25/12',
      learnedCards: 25,
    },
  ];

function RememberRateContainer() {

    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="remember-rate-container">
            <div className="remember-rate" >
                <h1>Remember rate</h1>
                <div className="pie animate" rate={80}> 80%</div>
                <div className='list-rates'>
                  <p className='rate'>
                    <div></div>
                    Very hard
                  </p>
                  <p className='rate'>Hard</p>
                  <p className='rate'>Medium</p>
                  <p className='rate'>Easy</p>
                  <p className='rate'>Very easy</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RememberRateContainer;