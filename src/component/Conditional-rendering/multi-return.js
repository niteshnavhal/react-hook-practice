import react,{useState,useEffect} from 'react';

const url = "https://api.github.com/users/QuincyLarson";

const MultiReturn = () => {
    console.log("0 Start render ");
    const [iLoad,setLoad] = useState(true);
    const [isError,setError] = useState(false);
    const [userData,setUserData] = useState('Default user...');
    console.log("1 States are Assend ");

    useEffect(() => {
        (async () => {
            console.log("2 In side effect...");
            const responce = await fetch(url);
            const data = await responce.json();
            const {login} = data;
            if(login){
                setLoad(false);
                setUserData(login);
                console.log("3 Data Featch and State Update...");
            }
            else if(!login)
            {
                setLoad(false);
                setError(true);
                console.log("4. Data Not Featch and State Update...");
            }
            
        })()
    },[]);
    if(iLoad) {
        console.log("4. Loadinng...");
        return <h1>Loading...</h1>
    }

    if(isError) {
        console.log("5. Error...");
        return <h1>Error...</h1>
    }
    console.log("6. User Data Load ...");
    return (
        <h1>{userData}</h1>
    );
};

export default MultiReturn;