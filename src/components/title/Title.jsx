/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'
import './titre.css'


function Title({titre}) {
    return (
        <>
            <div className="t-container">
                <h1>{titre}</h1>
            </div>
        </>
    )
}

Title.propTypes = {
    titre: PropTypes.string.isRequired
}

export default Title
