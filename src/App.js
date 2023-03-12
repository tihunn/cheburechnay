import css from "./styles/App.module.css"
import {useState} from "react";
import ContainerEditableCard from "./components/EditableCard/ContainerEditableCard";



function App(props) {
    const [visibleForm, setVisibleFrom] = useState(false)
    const addCheburek = () => {
        setVisibleFrom(!visibleForm)
        console.log("visible")
    }

    let chebureks = () => {
        return props.chebureks.map(
            cheburek => <ContainerEditableCard key={cheburek.id} {...cheburek}/>
        )
    }


    return (
        <div className={css.app}>
            {chebureks()}

            {visibleForm ?
                <div className={css.addCheburekForm}>
                    <ContainerEditableCard editing={true}/>
                </div> : null
            }


            <button className={css.button} onClick={addCheburek}>
                {visibleForm ? "Скрыть форму добавления" : "Добавить товар"}
            </button>
        </div>
    )
}

export default App
