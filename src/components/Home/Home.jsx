import React from 'react';
import './home.css'

function Home({loggedIn, questions}) {
  return (
    <>
    {loggedIn ? (
      <div>
        {questions.map((question, i) => (
        <div key={i}>
        <h1>{question.question}</h1>
        </div>
      ))}
      </div>
    ): (
      <div>
        <h1>neprisijunges</h1>
      </div>
    )}
    </>
  )
}

export default Home
