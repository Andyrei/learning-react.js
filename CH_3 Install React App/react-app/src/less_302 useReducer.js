/* 
    TITLE: HOOK on input useReducer
    TODO: Do an input with a changing label when clicked
*/
import { useReducer } from 'react';

function InputsReducer() {

    const [checked, setChecked] = useReducer( /* after click, initial state */
        ((checked)=> !checked),
            false); 

    return(
        <div style={{margin: "10rem"}}>
            <input  type="checkbox" 
                    id='check' 
                    value={checked}
                    onChange={setChecked}
            />
            <label htmlFor="check">
                {checked ? "checked" : "not checked"} {/* a tertiary if */}
            </label>
        </div>
    )
}

export default InputsReducer