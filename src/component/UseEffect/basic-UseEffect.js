import React , {useState,useEffect}from 'react';

const UseEffectBasic = ()=>{
    console.log("0 Started of the container view");
    const [count,setCount] = useState(0);
    const handellCounter = () => {
        console.log("2 Update Count");
        setCount((prevVal)=>prevVal+1)
    }

    useEffect(()=>{
        console.log("1th Use effect");
        if(count > 4){
            document.title="New Message" + count;
            console.log("hello!");
        }
    },[count]);

    useEffect(()=>{
        console.log("2nd Use effect");
    },[count]);
    
    console.log("1 render the Content");
    return (
        <>
        <h1>{count}</h1>
        <button onClick={handellCounter}>Increment</button>
        </>
    )
}
export default UseEffectBasic;