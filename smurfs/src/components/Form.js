import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators'

export function Form(props) {
    const onValueChange = event => {
        props.changeInput(event.target)
    }

    const onSubmit = event => {
        props.addSmurfData(event.target)
    }

    const isDisabled = () => {
        const { name, age, height } = props.form
        return !name || !age || !height;
    }

    return (
        <form onSubmit={onSubmit} >
            <label htmlFor="name">name
                <input type='text' value={props.form.name} onChange={onValueChange} name='name' />
            </label>
            <label htmlFor="age">age
                <input type='number' value={props.form.age} onChange={onValueChange} name='age' />
            </label>
            <label htmlFor="height">height
                <input type='text' value={props.form.height} onChange={onValueChange} name='height' />
            </label>
            <button disabled={isDisabled()} >Add Smurf</button>
        </form>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Form);