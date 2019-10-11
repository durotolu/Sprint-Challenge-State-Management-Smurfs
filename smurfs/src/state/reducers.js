import * as types from './actionTypes';

const initialSmurf = [];
export function smurfReducer(smurf = initialSmurf, action) {
    switch (action.type) {
        case types.ADD_TO_SMURFS:
            return action.payload
        case types.ERROR_MESSAGE:
            return action.payload;
        default:
            return smurf;
    }
}

const initialFormValue = {
    name: '',
    age: '',
    height: '',
}
export function formReducer(form = initialFormValue, action) {
    switch (action.type) {
        case types.ON_INPUT_CHANGE:
            return {
                ...form,
                [action.payload.name]: action.payload.value,
            };
        default:
            return form;
    }
}