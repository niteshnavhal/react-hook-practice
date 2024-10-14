import React,{useContext} from 'react'
import { PersonContext } from './index';
const List = () => {
    console.log('4 Listing Person');
    const {data, removeUser} = useContext(PersonContext);
    
    console.log('5 Rendered List');
  return (
    <div>
        {data?.map((d)=> (
            <Person 
            key= {d.id}
            removePerson={removeUser}
            people={d}
            />
        ))}
    </div>
  )
}


const Person = ({ people, removePerson }) => {
    console.log('6 Inside Single Person');
    const { id, name } = people;
    console.log('7 Rendered Single Object');
    return (
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    );
  };


export default List