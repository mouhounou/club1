/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from '../title/Title';

function Seven() {
    const [taches, setTaches] = useState([
        { id: 1, texte: 'Tâche 1', terminee: false },
        { id: 2, texte: 'Tâche 2', terminee: false },
        { id: 3, texte: 'Tâche 3', terminee: false },
    ]);


    const basculerTache = (id) => {
        const tachesModifiees = taches.map(tache => {
            if (tache.id === id) {
                return { ...tache, terminee: !tache.terminee }; 
            }
            return tache;
        });
        setTaches(tachesModifiees); 
    };

    return (
        <>
            <Title titre="Exercice 7" />
            <div className="container tocenter">
                <ul>
                    {taches.map(tache => (
                        <li 
                            key={tache.id} 
                            onClick={() => basculerTache(tache.id)} 
                            style={{ textDecoration: tache.terminee ? 'line-through' : 'none', cursor: 'pointer' }}
                        >
                            {tache.texte} {tache.terminee ? '(terminée)' : '(non terminée)'}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Seven;
