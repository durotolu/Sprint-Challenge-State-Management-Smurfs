import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Smurfs(props) {
    useEffect(() => {
        props.getSmurfs()
    }, [])
    return (
        <div>
            <strong>Name  </strong>
            <strong>Age  </strong>
            <strong>Height</strong>
            {props.smurfs.map((smurf) => <div>
                                            <span>{smurf.name}, </span>
                                            <span>{smurf.age}, </span>
                                            <span>{smurf.height}</span>
                                        </div>)}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Smurfs);