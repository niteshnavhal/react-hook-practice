import React,{useReducer,useState,useRef} from 'react'
import {data} from '../../data.js';
import { reducer } from "./reducer";
import Modal from './modal';

const Index = () => {
    console.log("0 start on theFunction Index");
    
    const defaultState = {
        people :data,
        modalOpen:false,
        modalContanet:""
    }
    const refText = useRef(null)
    const [state,dispatch] = useReducer(reducer,defaultState);
    console.log("1 Initialize the state and dispatch");

    const [name,setName] = useState("");
   
    const handelSubmit= (e)=> {
        console.log("3 inside handel Submit");
        e.preventDefault();
        if(name){
            const id = new Date().getTime().toString();
            const newPeople = { id, name };
            dispatch({type:'ADD_ITEM',payload:newPeople});
            refText.current.value = '';
            setName("");
        }

    };

    const removeModal = ()=> { 
        console.log("4 remove modal");
        dispatch({type:'REMOVE_MODAL'}); }

    const handleRemoveItem = (id) => {
        console.log("5 people removed");
        dispatch({type:'REMOVE_ITEM',payload:id})
        
    };

    const handleValue = (e)=> {
        console.log("6 inside handel handleValue");
        setName(refText.current.value);
    }
    console.log("7 rendered");
    return (

    <div>
        {state.modalOpen && (<Modal removeModal= {removeModal} modalContanet = {state.modalContanet}/>)}
        <form className='form' onSubmit={handelSubmit}>
            <div className='form-constrol'>
                <label htmlFor='firstName'>Name :</label>
                <input ref={refText} type='text' id='firstName' name='firstName' onChange={handleValue}/>
                <button className="btn" type="submit">Add</button>
            </div>
        </form>
        {state.people.map((p) => {
            return (
                <div key={p.id}>
                    <h2>{p.name}</h2>
                    <button onClick={()=> handleRemoveItem(p.id)}>Delete</button>
                </div>
                
            )
        })}
    </div>
  )
}

export default Index