import {useState} from "react";


export default function Editable({value, type, setValue, editMode}) {
    let [editText, setEditText] = useState(false)

    let toggleEditMode = () => {
        if (editMode) {
            setEditText(!editText)
        }
    }
    let deactivateEditMode = () => {
        setEditText(editText = false)

        if (value === "") {
            if (type === "number") {
                setValue(0)
            } else {
                setValue("введите название товара, кликнув")
            }
        }
    }

    const onChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const isEditText = (value, type) => {
        if (editText) {
            return <input
                autoFocus={true}
                onBlur={deactivateEditMode}
                value={value}
                onChange={(e) => onChange(e)}
                type={type}/>
        } else {
            return <span onClick={toggleEditMode}> {value} </span>
        }
    }


    return (
        isEditText(value, type)
    );
}

