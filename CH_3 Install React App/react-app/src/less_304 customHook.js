/* 
    TITLE: Custom HOOKS
    TODO: Create a custom hook for a form
*/
import {useState} from 'react'

function useInput(initialValue){
  // use a useState hook
  // andy input |value| will take in a value |setValue| 
  // and will update with the useState
  const [value, setValue] = useState(initialValue);

  // this kind of hook will return an array
  return[
    //  first item in the array is an object
    //  and takes the STATE VALUE and ON CHANGE event
    {
      value, 
      onChange: e => setValue(e.target.value)
    },
    // second item in the array CLEANUP FUNCTION
    () => setValue(initialValue)
  ];
}


export default function useCustom() {
  const [titleProps, resetTitle] = useInput(""); // the custom hook used in here
  const [colorProps, resetColor] = useInput("#000000")

  const submit = (e) =>{ // on submit the form
      e.preventDefault() // prevent refresh
      alert(`title:${titleProps.value} color:${colorProps.value}`)
      resetTitle();    //reset title
      resetColor();    // reset color value
  }
  return (
    <form onSubmit = {submit}>
      <input
        {...titleProps}
        type="text" 
        placeholder='color title...' 
        />

      <input
        {...colorProps}
        type="color" 
        />

      <button>Add</button>
    </form>
  )
}

