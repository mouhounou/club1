/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../title/Title'
import Button from '../button/Button';




function Two() {
    const  [count, setCount] = React.useState(0);
    const add = () =>   setCount(count + 1)
    const moins = () => setCount(count - 1)

    return (
        <>  
            <Title titre='Exercice 2'/>
            <div className="o-container tocenter">
                <h2>{count}</h2>

                <div style={{display: 'flex', gap: '32px', marginTop: '20px'}}>
                    <Button fn={moins}   label='Moins (-)'/>
                    <Button fn={add} label='Plus (+)'/>
                </div>
            </div>
        </>
    );
}

export default Two
