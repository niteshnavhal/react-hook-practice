import React,{useState,useEffect} from 'react';

const Showhide = () => {
    console.log("0 State Initialization");
    
    const [show, setShow] = useState(true);

    console.log("1 Container Render");
    return (
        <>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Items/>}
        </>
    )
}
const Items = ()=> {
    const [innerWidth,setInnerWidth] = useState(window.innerWidth);

    console.log("2 Items State Initialization");
    useEffect(()=>{
        console.log("3 Items Effect started...");
        const handleResize = ()=> setInnerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        console.log("4 Items Effect End...");
        return ()=> window.removeEventListener('resize', handleResize);
    },[]);

    console.log("5 Items Render.");
    return (
        <div>
            <h1>Window Width: {innerWidth}px</h1>
        </div>
    )
}


export default Showhide;