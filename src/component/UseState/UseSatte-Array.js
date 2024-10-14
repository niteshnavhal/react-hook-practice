import React, {useState} from 'react';
import {data} from '../../data.js';

const UseArray = () => {
    console.log("0 Started of the container view");
    
    const [userdata,setUserData] = useState(data);
    const removeUserData = (id) => {
        const newUser = userdata.filter(user => user.id !== id);
        setUserData(newUser);
        console.log("3 remove user");
    }
    console.log("1 render the Content");
    return(
        <div className='container'>
            {userdata.map((data) => {
                const {id,name} = data;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={()=> removeUserData(id)}>Remove Item</button>
                    </div>
                );
            })}
            <button onClick={()=> setUserData([])}>Clear All Items</button>
        </div>
    )
};

export default UseArray;