import React, {useState} from 'react';

const dataObje = {
    name: 'nitesh',
    age:30,
    messgae:"Are you sure you want to Learn React?"
}

const UseDateObject = () => {
    console.log('0 Start before state initialization');

    const [person,setperson] = useState(dataObje);
    const messageHandeler = (item) =>{
        const messgae = person.messgae === "Are you sure you want to Learn React?" ? "Yes" : "No";
        const newPerson = {...item,messgae};
        setperson(newPerson);
        console.log('3 Update State');
    }
    console.log('1 render state');
    return (
        <div className='container'>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.messgae}</h3>
            <button onClick={() => messageHandeler(person)}>Change Message</button>
        </div>
    );
}

export default UseDateObject;