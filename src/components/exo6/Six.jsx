/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from '../title/Title';
import Button from '../button/Button';





function Six() {
    const [demarrer, setDemarrer] = useState(false); 
    const [value, setValue] = useState(0);
    const [info, setInfo] = useState('activer')
    let i = 0
    
    const go = () => {
        if (!demarrer) {
            setValue(0);
            setDemarrer(true);
            setInfo('desactiver')
        }
    };

    
    const increment = () => {
        if (demarrer && value < 10) {
            i++
            setValue(value + 1);
        }
        if (value >= 10) {
            setDemarrer(false); 
        }
    };

    return (
        <>
            <Title titre="Exercice 6" />
            <div className="container tocenter">
                <div>
                    <h3 style={{textAlign: 'center'}}>{value}</h3>
                    <div style={{display:'flex', gap:'20px'}}>
                        <Button fn={go} label= {info} />
                        {/* <Button fn={increment} label="incrementer" /> */}
                        <button
                            style={{background:`${demarrer? "blue" : "gray"}`}}
                            onClick={increment} 
                        >commencer</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Six;
