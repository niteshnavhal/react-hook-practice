import {useState} from 'react';

const MultiInputs = () => {
    const personInput = {
        firstName: "",
        email:"",
        phone:"",
        age:""
    }
    console.log("0 start of the components");
    

    const [person, setPerson] = useState(personInput);
    const [people, setPeople] = useState([]);
    console.log("1 State added");

    const handelSubmit = (e) => {
        console.log("2 start Function");
        e.preventDefault();
        if(person.firstName && person.email && person.phone && person.age){
            const id = new Date().getTime().toString();
            const newPerson = {...person, id};
            setPeople((oldPeople) => [...oldPeople,newPerson]);
            setPerson(personInput);
        }
        console.log("3 End Function");
    }
    
    const handelinputs = (e) => {
        console.log("4 Handel Inputs");
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value});
        
    }

    return (
        <>
        <article>
            <form className='form' onSubmit={handelSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>Name :</label>
                    <input
                    type='text'
                    onChange={handelinputs}
                    id='fistName'
                    name='firstName'
                    value={person.firstName}
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email :</label>
                    <input
                    type='email'
                    onChange={handelinputs}
                    id='email'
                    name='email'
                    value={person.email}
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone :</label>
                    <input
                    type='tel'
                    onChange={handelinputs}
                    id='phone'
                    name='phone'
                    value={person.phone}
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age :</label>
                    <input
                    type='text'
                    onChange={handelinputs}
                    id='age'
                    name='age'
                    value={person.age}
                     />
                </div>
                <button type='submit'>Add person</button>
            </form>
            {people.map((p)=> {
                const {id, firstName, email, phone, age} = p;
                return (
                    <div key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{age}</p>
                    </div>
                )
            })}
        </article>
        </>
    )
    

}
export default MultiInputs;