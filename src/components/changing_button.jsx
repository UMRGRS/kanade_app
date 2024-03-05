import { useState } from "react"

export default function ChangingButton({txt}){

    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(txt)
    function HandleChange(event){
        setText(event.target.value)
    }

    return(
        <>
            {editMode? 
                <div>
                    <input type="text" defaultValue={text} onChange={HandleChange}></input>
                    <button onClick={() => {setEditMode(!editMode);}}>Save</button>
                </div>
                :
                <div>
                    <p style={{display:'inline', marginInlineEnd:'25px'}}>{text}</p>
                    <button onClick={() => {setEditMode(!editMode)}}>Edit</button>
                </div>
            }
        </>
    )
}
