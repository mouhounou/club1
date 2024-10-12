/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'


import React from 'react'

function Button({fn, label}) {
    return (
        <>
            <button onClick={fn}>{label}</button>
        </>
    )
}


Button.propTypes ={
    fn:PropTypes.func.isRequired,
    label:PropTypes.string.isRequired
}
export default Button
