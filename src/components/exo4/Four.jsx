/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from '../title/Title'
import Button from '../button/Button'




function Four() {

    const [color, setColor] = useState(false)
    const changer = () => {
        setColor(!color)
    }

    if (color == true) {
        document.body.classList.add('new');  
    } else {
        document.body.classList.remove('new');  
    }

    return (
        <>
            <Title titre='Exercice 4'/>
            <div className="container tocenter">
                <Button fn={changer} label='changer de couleur'/>
            </div>
        </>
    )
}

export default Four
