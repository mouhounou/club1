/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from '../title/Title'
import p1 from '../../image/p1.jpg'
import p2 from '../../image/p2.jpg'
import p3 from '../../image/p3.jpg'
import p4 from '../../image/p4.jpeg'
import p5 from '../../image/p5.jpeg'
import Button from '../button/Button'



const pics = [p1, p2, p3, p4, p5]


function Eight() {

    const [indice , setIndice ] = useState(0)

    const changer = () =>{
    const random = Math.floor(Math.random() * pics.length)
    setIndice(random)

    console.log(`dans la fn : ${indice}`)
    // return [random]
  }

  console.log(`en dehors de la fn : ${indice}`)
  return (
    <>
        <Title titre="Exercice 8" />
        <div className="tocenter ">
          <div style={{display: 'flex', flexDirection: 'column', alignItems :'center'}} className="i-container ">
            <div  style={{width: '250px', height: '250px', paddingBottom: '1rem'}}  className="image">
              <img style={{width:'100%', height: '100%'}} src={pics[indice]} alt="" />
            </div>
            <Button fn={changer} label='changer'/>
          </div>
        </div>
    </>
  )
}

export default Eight
