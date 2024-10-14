import React,{forwardRef,useRef,useImperativeHandle} from 'react'

const ChildComponent = forwardRef((props, ref)  => {
    console.log('3 in ChildComponent');
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('4 in ChildComponent useImperativeHandle');
          inputRef.current.focus();
        }
      }));
      console.log('5  ChildComponent render');
  return (
     <input ref={inputRef} {...props} />
  )
})

export default ChildComponent