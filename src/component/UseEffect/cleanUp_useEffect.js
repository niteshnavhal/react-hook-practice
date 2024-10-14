import React,{useEffect,useState} from "react";

const CleanUpEffect = ()=>{
    console.log('0 start render');

    const [resize,setResize] = useState(window.innerWidth);
    console.log('1 after useSate Inisicalization');

    useEffect(()=>{
        console.log('3 Start side UseEffect');
        const handellwindowSize = ()=> setResize(window.innerWidth);
        window.addEventListener('resize',handellwindowSize);
        console.log('4 in side of UseEffect');
        return ()=> window.removeEventListener('resize',handellwindowSize);
    },[resize]);
    
    console.log('2 after side effect');

    return(
        <>
        <h2>window</h2>
        <h1>{resize}</h1>

        </>
    );
};

export default CleanUpEffect;