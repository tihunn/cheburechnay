import React, {useState} from 'react';
import {connect} from 'react-redux';
import EditableCard from "./EditableCard";
import {delCheburek, sendCheburek} from "../../store/chebureksReducer";

function mapStateToProps(state) {
    return {};
}

const ContainerEditableCard = ({delCheburek, sendCheburek, editing, name, price, id, nameImg}) => {
    const [editMode, setEditMode] = useState(editing)

    const dataPacker = (name, price, file, id) => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", `${price}`)
        formData.append(`img`, file)

        sendCheburek(id, formData)
    }
    const delCard = (id) => {
        delCheburek(id)
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return <EditableCard name={name}
                         price={price}
                         id={id}
                         nameImg={nameImg}
                         dataPacker={dataPacker}
                         delCard={delCard}
                         editMode={editMode}
                         toggleEditMode={toggleEditMode}
    />
}


export default connect(
    mapStateToProps, {
        sendCheburek,
        delCheburek
    }
)(ContainerEditableCard);