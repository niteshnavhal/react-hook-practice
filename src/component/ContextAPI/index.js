import React,{useState} from 'react'
import { data } from '../../data'
import List  from './List'
export const PersonContext = React.createContext();

const Index = () => {
  console.log('0 Started of the container view');
  const [users, setUsers] = useState(data);
  console.log('1 State Set');
  const removeUser = (id)=> {
    console.log('2 Remove User');
    const newPeoples = users.filter(user=>user.id !== id);
    setUsers(newPeoples);
  }
  console.log('3 Rendered');
  return (
    <>
    <PersonContext.Provider value={{data:users,removeUser}}>
        <List />
    </PersonContext.Provider>
    </>
  )
}
export default Index