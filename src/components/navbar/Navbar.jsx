/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



function Navbar() {
    return (
        <>
            <div className="n-container">
                <nav>
                    <Link to={'/'}>Exo1</Link>
                    <Link to={'/exo2'}>Exo2</Link>
                    <Link to={'/exo3'}>Exo3</Link>
                    <Link to={'/exo4'}>Exo4</Link>
                    <Link to={'/exo5'}>Exo5</Link>
                    <Link to={'/exo6'}>Exo6</Link>
                    <Link to={'/exo7'}>Exo7</Link>
                    <Link to={'/exo8'}>Exo8</Link>
                    <Link to={'/exo9'}>Exo9</Link>
                    <Link to={'/exo10'}>Exo10</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar
