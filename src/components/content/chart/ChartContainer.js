import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, 
Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

function ChartContainer() {

    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="exam-container">
            <div className="exam" >
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      {/* <Legend /> */} {/* Chu thich */}
                      <Bar dataKey="learnedCards" fill="#8884d8" />
                  </BarChart>
              </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
}

export default ChartContainer;