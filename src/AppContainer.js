import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import App from "./App"
import {getChebureks} from "./store/chebureksReducer"

function mapStateToProps(state) {
    return {
        chebureks: state.chebureksState.chebureks
    }
}


const AppContainer = (props) => {


    useEffect(() => {
        props.getChebureks()
        console.log("loaded chebureks")
    },[])



    return <App chebureks={props.chebureks}/>
}


export default connect(
    mapStateToProps, {
        getChebureks
    }
)(AppContainer);