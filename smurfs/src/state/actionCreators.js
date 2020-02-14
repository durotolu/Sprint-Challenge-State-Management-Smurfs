import * as types from "./actionTypes";
import axios from 'axios'

export const smurfsApi = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
    debugger
    axios.get(smurfsApi)
        .then(res => {
            let smurfs = res.data;
            dispatch({ type: types.ADD_TO_SMURFS, payload: smurfs })
        })
        .catch(err => {
            debugger
            dispatch({ type: types.ERROR_MESSAGE, payload: err.message })
        })
}

export function changeInput(target) {
    return {
        type: types.ON_INPUT_CHANGE,
        payload: {
            name: target.name,
            value: target.value,
        }
    }
}

export const addSmurfData = (smurf) => dispatch => {
    debugger
    const newSmurf = {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
    }

    axios.post(smurfsApi, newSmurf)
        .then(res => {
            dispatch({ type: types.ADD_TO_SMURFS, payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            debugger
            dispatch({ type: types.ERROR_MESSAGE, payload: err.message })
        })
}