import {useState, useEffect} from "react";

function GitUser({ img, name, id }){
    return(
        <>
            <img src={img} alt={name} height={150}/>
            <h1>Name: {name}</h1>
            <p>Id: {id}</p>
        </>
    )
}

export default function ErrorAPI() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

/*   
    the fetch data USUALY has a:
        - loading state
        - success state
        - error state
*/ 
    useEffect(() => {
        setLoading(true);
      fetch(
        `https://api.github.com/users/andyrei`
      ) 
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
        
    }, [])
    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>ERROR {JSON.stringify(error)}</pre>;
    if (!data) return null;
    
            return (
                <div>
                    <GitUser 
                        img={data.avatar_url} 
                        name={data.name} 
                        id={data.id} 
                    />
                </div>
            )

    }
