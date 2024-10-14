import React , {useState} from 'react';


const ErrorState = () => {
    console.log('Start before state initialization');
    let randomTitle = "Random Title";
  
    const handleChangeTitle = () => {
      randomTitle = "Hello World";
      console.log(randomTitle);
    };

    console.log('render');
    return (
      <>
        <h2>{randomTitle}</h2>
        <button onClick={handleChangeTitle} className="btn">
          Change Title
        </button>
      </>
    );
  };

export default ErrorState;