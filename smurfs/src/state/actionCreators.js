import * as types from "./actionTypes";
import axios from 'axios'

export const smurfsApi = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
    debugger
    axios.get(smurfsApi)
        .then(res => {
            debugger
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

export function addSmurfData(target) {
    const formToPost = {
        name: target[0].value,
        age: target[1].value,
        height: target[2].value
    }

    axios.post(smurfsApi, formToPost)
        .then(res => {
            console.log(res);
            debugger
        })
        .catch(err => {
            debugger
        })
}