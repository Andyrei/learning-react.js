import { useState, useEffect } from 'react';

/* Destruct ARRAY 
instead of
    const cities = ["Tokio", "Milan", "Florence", "ETC"];
    const [firstCity, second] = [
        "Tokio", 
        "Milan", 
        "Florence", 
        "ETC"
    ];
*/

/*  Destruct PROPRIETIES
  instead of wising 'props' object like 'props.name'
  can add into function the object itself '{name}'
*/
function Hooks({name}) {
  const [emotion, setEmotion] = useState("scared");
  const [secondary, setSecondary] = useState("energic");

  useEffect( () => {
    console.log(`I'm ${emotion} right now`);
  }, [emotion]);
  useEffect(()=>{
    console.log(`I'm also ${secondary} right now`);
  }, [secondary]);

  return (
    <div className="Hooks">
      <h1>hello, i'm { name } and i'm feeling {emotion}</h1>
      <button onClick={() => setEmotion('frightened')}>Being lazy</button>
      <button onClick={() => setEmotion('smart')}>Learning</button>
      <h2>I'm also feeling {secondary}</h2>
      <button onClick={() => setSecondary("excited")}>excited</button>
    </div>
  );
}

export default Hooks;