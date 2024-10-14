import React,{useState,useEffect} from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
    console.log("0 Start render");
    const [userData, setUserData] = useState([]);
    console.log("1 After UseState");

    useEffect( () => {
        console.log("2 Start useEffect");
        (async () => {const user = await fetch(url);
            const result = await user.json();
            console.log("3 Get Users");
            setUserData(result);
        })();
    },[]);
    console.log("4 After useEffect");
    return(
        <>
        <h1>Git Users</h1>
        <ul className="user">
        {userData.map((data) => {
            const { id, login, avatar_url, html_url } = data;
            return(
                <li key={id}>
                    <img src={avatar_url}  alt={login} />
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}>View Profile</a>
                    </div>

                </li>
            );
        })}
        </ul>
        </>
    );
};

export default FetchData;