import React , {useState} from "react";

const UseStateDemo = () => {
    console.log('Start before state initialization');
    const [counter, setCounter] = useState(0);
   
    const decrementhandeler = () => (counter > 0 ? setCounter(counter -1) :  counter);
    
    console.log('rendering state');
    return(
        <>
            <h2>UseSate hooks Example Counter</h2>
            <p>Counter : {counter}</p>
            <button onClick={() =>setCounter(counter + 1) }>Increment</button>
            <button onClick={() =>decrementhandeler() }>Decrement</button>
        </>
    );
}

export default UseStateDemo;