import React, {useState} from 'react';

const ControlledInputs = ()=> {
    console.log('0 Start before state initialization');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [persons, setPersons] = useState([]);
    console.log('2 After state initialization');
    const handelSubmit = (e) => {
        if(!username || !email) return;
        e.preventDefault();
        const newPerson = {id: new Date().getTime().toString(), username, email};
        setPersons([...persons, newPerson]);
        setUsername('');
        setEmail('');
        console.log('3 Update State');
    };
    console.log('4 render ');
    return(
        <>
        <article>
            <form className='form' onSubmit={handelSubmit}>
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <button type='submit'>Add person</button>
            </form>
        </article>
        {persons.map((p) => {
            const {id, username, email} = p;
            return(
                <div key={id}>
                    <h2>{username}</h2>
                    <p>{email}</p>
                    <button onClick={() => setPersons(persons.filter((person)=>person.id !== id))}>Delete </button>
                </div>
            )
        })}
        </>
    )
}

export default ControlledInputs;