import React from 'react';
import './Questions&Answers>.css'

function Home({loggedIn, questions}) {
  return (
    <>
    {loggedIn ? (
      <div>
        <h1>prisijunges</h1
        ></div>
    ): (
      <div>
        <h1>neprisijunges</h1>
      </div>
    )}
    </>
  )
}

export default Home