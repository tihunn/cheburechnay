import css from "../../styles/CardItem.module.css"
import icoAddData from "../../ico/addData.png"
import {useState} from "react";
import Editable from "../Editable/Editable";
import FileUpload from "../FileUpload/FileUpload";
import icoEdit from "../../ico/edit.png";
import icoDel from "../../ico/del.png";


export default function EditableCard({
                                         dataPacker,
                                         name = "введите название товара, кликнув",
                                         price = 100,
                                         nameImg,
                                         id,
                                         delCard,
                                         editMode = false,
                                         toggleEditMode
                                     }) {

    let [editableName, setEditableName] = useState(name)
    let [editablePrice, setEditablePrice] = useState(price)
    let [file, setFile] = useState(null)


    return (
        <div className={css.card}>
            {!editMode && nameImg ? <img className={css.img}
                                         alt="картинка чебурека"
                                         src={process.env.REACT_APP_API_URL + nameImg}/>
                : null
            }


            {editMode
                ? <FileUpload setFile={setFile} accept="image/*">
                    <button className={css.uploadImg}>Загрузить Изображение</button>
                </FileUpload>
                : null
            }

            <h1 className={css.name}><Editable value={editableName} setValue={setEditableName} editMode={editMode}/></h1>

            <div className={css.price}>
                <Editable value={editablePrice} setValue={setEditablePrice} type="number" editMode={editMode}/> : руб.
            </div>


            <div className={css.ico} hidden={true}>
                {id ?
                    <img alt="Редактировать" src={icoEdit} className={css.ico} onClick={toggleEditMode}/>
                    : null
                }

                {editMode
                    ? <button className={css.send} onClick={() => dataPacker(editableName, editablePrice, file, id)}>
                        <img alt="Добавить новый товар" src={icoAddData} className={css.ico}/>
                        Отправить
                    </button>

                    : <img alt="Удалить" src={icoDel} className={css.ico} onClick={() => delCard(id)}/>
                }
            </div>

        </div>
    );
}

