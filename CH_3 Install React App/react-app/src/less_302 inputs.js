import { useState, useEffect } from 'react';

function Inputs() {

    const [checked, setChecked] = useState(false);

    return(
        <div style={{margin: "10rem"}}>
            <input  type="checkbox" 
                    id='check' 
                    value={checked}
                    onChange={()=>setChecked((checked)=> !checked)}
            />
            <label htmlFor="check">
                {checked ? "checked" : "not checked"}
            </label>
        </div>
    )
}

export default Inputs