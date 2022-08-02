/* 
  TITLE: INTRO TO HOOKS
  TODO: Play arround with some lists and buttons

*/

import { useState, useEffect } from 'react';

/* 
  ? Destruct ARRAY 
* instead of this
    const cities = ["Tokio", "Milan", "Florence", "ETC"];
* can do this
    const [firstCity, second] = [
        "Tokio", 
        "Milan", 
        "Florence", 
        "ETC"
    ];
*/

/*  
? Destruct PROPRIETIES
  -> instead of using 'props' object like 'props.name'
  -> can add into function the object itself '{name}'
*/

// create the function called Hooks(obj)
function Hooks({name}) {
  // create vars and give them an useState with a default value
  // that can be set to other states
  const [emotion, setEmotion] = useState("scared");
  const [secondary, setSecondary] = useState("energic");

  // useEffect(<function>) -> Runs on every render
  // useEffect(<function>, <dependency>) -> Runs only on the first render if second value is empty
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