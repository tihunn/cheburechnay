import {cheburekAPI} from "../http/cheburekAPI";


const initialState = {
    chebureks: [
        {
            id: 0,
            nameImg: "",
            name: "чебурек",
            price: 100
        },
    ],
}


export let chebureksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setChebureks":
            return {
                ...state,
                chebureks: [...action.chebureks]
            }
    }
    return state
}

const setChebureks = (chebureks) => ({type: "setChebureks", chebureks})


export const getChebureks = () => (dispatch) => {
    cheburekAPI.get().then(data => {
        dispatch(setChebureks(data))
    })
}
export const sendCheburek = (id, formData) => (dispatch) => {
    cheburekAPI.createOrUpdate(id, formData).then( () => {
        dispatch( getChebureks() )
    })
}
export const delCheburek = (id) => (dispatch) => {
    cheburekAPI.del(id).then( () => {
        dispatch( getChebureks() )
    })
}