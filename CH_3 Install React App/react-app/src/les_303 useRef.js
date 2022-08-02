import {useState} from 'react'

function InputsReff() {

/* 
    todo: useRef => CONTROLLED INPUT
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`)
        txtTitle.current.value= "";
        hexColor.current.value= "";
    };
*/
/* 
    todo: useState => UNCONTROLLED INPUT
    ! IS POSSIBLE TO MANNAGE FORM WITH useState

*/
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")

    const submit = (e) =>{ // on submit the form
        e.preventDefault() // prevent refresh
        alert(`title: ${title} color: ${color}`)
        setTitle(color) //set Title with color value
        setColor("")    // reset color value
    }

  return (
    <form onSubmit = {submit}>
      <input
        value={title}
        onChange= {event => setTitle(event.target.value)}
        type="text" 
        placeholder='color title...' />

      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color" />

      <button>Add</button>
    </form>
  )
}

export default InputsReff
