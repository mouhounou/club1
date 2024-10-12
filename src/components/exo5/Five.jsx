/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from '../title/Title'



function Five() {
    const [texte, setTexte] = useState('')

    const handlechange = (e) =>{
        setTexte(e.target.value)
    }
    return (
        <>
            <Title titre='Exercice 5'/>
            <div className="f-container tocenter">
                <div className="div">
                    <form style={{display :'flex', flexDirection: 'column'}}>
                        <textarea
                            type="text"
                            placeholder='Entrez votre texte'
                            value={texte}
                            onChange={handlechange}
                            style={{padding: '12px'}} name="texte" rows="10" cols="50"
                        ></textarea>
                        <p style={{marginTop: '19px'}}> <span className='gras'>votre texte :</span> {texte}</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Five
