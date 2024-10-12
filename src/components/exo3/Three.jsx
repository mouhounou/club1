/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from '../title/Title'
import Button from '../button/Button'




function Three() {

    const [texte, Settext] =  useState('mon text')
    const [txt, setTxt ]=  useState('cacher')
    const hidden = () =>{
        if (texte === 'mon text'){
            Settext('')
            setTxt('afficher')
        }else{
            Settext('mon text')
            setTxt('cacher')

        }

    }
    return (
        <>
            <Title titre='Exercice 3'/>
            <div className="three_container tocenter">
                <div>
                    <h3 className='hid' style={{paddingBottom: '2rem'}}>{texte}</h3>
                    <Button fn={hidden} label= {txt} />
                </div>
            </div>
        </>
    )
}

export default Three
