import React, { useEffect } from 'react'

const Modal = ({removeModal,modalContanet }) => {
    console.log("8 in a Model");
    useEffect(()=> {
        console.log("9 in a ModelEffect ");
        setTimeout(()=>removeModal(),30000)
    });
    console.log("10 Modal rendering");
  return (
    <div className='modal'>
        <p>{modalContanet}</p>
    </div>
  )
}

export default Modal