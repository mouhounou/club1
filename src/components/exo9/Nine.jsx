/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from '../title/Title'
import Button from '../button/Button'

function Nine() {

    const text1 = 'Texte 1'
    const text2 = 'Texte 2'

    const [state, setState] = useState(true)
    const [first, setFirst ] = useState(text1)
    const [second, setSecond] = useState(text2)

    const alterner = () =>{
        setState(!state)
    }

    // if (state){
    //     setFirst(text2)
    //     setSecond(text1)
    // } else{
    //     setFirst(text1)
    //     setSecond(text2)
    // }


    return (
        <>
            <Title titre='Exercice 9'/>
            <div className="tocenter">
                <div>
                    <h3>{state? first : second}</h3>
                    <h3>{state?  second : first}</h3>
                    <Button fn={alterner} label='Alterner'/>
                </div>
            </div>
        </>
    )
    }

export default Nine
