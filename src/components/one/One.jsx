/* eslint-disable no-unused-vars */
import React from 'react';
import Title from '../title/Title';
import Button from '../button/Button';



function One() {

    const  [count, setCount] = React.useState(0);
    const add = () =>   setCount(count + 1)

    return (
        <>  
            <Title titre='Exercice 1'/>
            <div className="o-container tocenter">
                <h3>{count}</h3>
                <Button fn={add} label='clique ici'/>
            </div>
        </>
    );
}

export default One;
