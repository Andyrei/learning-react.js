import {useState, useEffect} from "react";

// create a component to extract the user single data
function UserData({name, link, img}){
    return (
        <>
            <img src={img} alt={name} height={150}/>
            <h1><strong>Name:</strong> {name}</h1>
            <h2><strong>URL:</strong> <a href={link} target="_blank" rel="noreferrer">Go to {name}'s Github</a></h2>

        </>
    )
} 


export default function ExtractAPI() {

    //container for teh data
    const [data, setData] = useState(null)

    useEffect(() => {
        // HTTP request to get data from some sort of source
      fetch( //is built into the browser 
        `https://api.github.com/users/andyrei`
            //after taking data from the source will take the response
            // and will turn it into a json
        ).then((response) => response.json())
        .then(setData) // this is the same as (data) => setData(data)
    }, []); //add a empty array so the request could be made only once
            // too many request can block you from an API

            
    // if "data" exists give the tag "pre" (PRE FORMAT FOR JSON)
    //  the "data" with a format of "null" and "5" (without format is a single string)
    if (data) /* return <pre>{JSON.stringify(data, null, 5)}</pre> */
    return (
        <div>
            <UserData name={data.name} link={data.html_url} img={data.avatar_url} />
        </div>
    )
}
