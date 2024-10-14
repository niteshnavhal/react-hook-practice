import React,{useRef} from 'react'
import ChildComponent from './ChildComponent'

const Index = () => {
  console.log('0 in index');
  
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log('1 in click handler');
    inputRef.current.focus();
  };
  console.log('2 render index');
  return (
   <>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>click to focus child input</button>
    </>
  )
}

export default Index