import React,{useState} from 'react'
import {data} from '.././../data.js'

const Index = () => {
    console.log("0 Start Index");
    
    const [people,setPeople] = useState(data);
    console.log("1 set State");

    const removePeople = (id) => {
        console.log("3 Inside removePeople");
        const newPeople = people.filter(people => people.id !== id)
        setPeople(newPeople)
    }
    console.log("4 Main Renderd");
  return (
    <>
        <List removePeople= {removePeople} members={people}/>
    </>
  )
}

const List = ({removePeople, members}) => {
    console.log("5 in a List People Start ");
    console.log("6 removePeople ",removePeople);
    console.log("7 Renderd List Person ");
    return(
        <>
            {members.map((p)=>(
                <Person key={p.id} removePeople={removePeople} people={p}/>
            ))}
        </>
    )
}

const Person = ({removePeople,people})=> {
    const {id, name} = people;

    console.log("8 in a SINGLE People Start ");

    console.log("9 Renderd single Person ");
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePeople(id)}>remove</button>
        </div>
    )

}
export default Index