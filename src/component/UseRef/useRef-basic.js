import React,{useEffect,useRef,useState} from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
function UseRefbasic() {
    console.log("0 start of the Component!");
    const [addvalue,setAddvalue]= useState("");
    const refContainar = useRef(null);
    const formElement = useRef(null);

    console.log("1 after useRef  of the Component!");
    useEffect(() => {
        console.log("2 after inside  useEffect of the Component!");
        //console.log(formElement.current);
        refContainar.current.focus();
      });

    const handelSubmit = (e)=>{
        console.log("3 in side on submit function Component!");
        e.preventDefault();
        setAddvalue(refContainar.current.value);
        console.log(refContainar.current.value);
        refContainar.current.value = "";
    }

    console.log("4 return function");
    return (
      <div>
          <form ref={formElement} className='form' onSubmit={handelSubmit}>
              <div  className='form-group'>
                  <input ref={refContainar} type='text' className='form-control'/>
                <button type='submit'> submit</button>
                {addvalue}
              </div>
          </form>
      </div>
    )
}

export default UseRefbasic;