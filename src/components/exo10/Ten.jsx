/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../title/Title'
import Button from '../button/Button'

function Ten() {

    const  [count1, setCount1] = React.useState(0)
    const  [count2, setCount2] = React.useState(0)
    const  [count3, setCount3] = React.useState(0)
    const  [count4, setCount4] = React.useState(0)
    const add1 = () =>   setCount1(count1 + 1)
    const add2 = () =>   setCount2(count2 + 1)
    const add3 = () =>   setCount3(count3 + 1)
    const add4 = () =>   setCount4(count4 + 1)


    return (
        <>
            <Title titre='Exercice 10'/>
            <div className="tocenter">
                <div className="array">
                    <table>
                        <thead>
                            <tr>
                                <th>premier</th>
                                <th>deuxieme</th>
                                <th>troisieme</th>
                                <th>quatrieme</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{count1}</td>
                                <td>{count2}</td>
                                <td>{count3}</td>
                                <td>{count4}</td>
                            </tr>
                            <tr>
                                <td>
                                    <Button fn={add1}  label='incrementer'/>
                                </td>
                                <td>
                                    <Button fn={add2}  label='incrementer'/>
                                </td>
                                <td>
                                    <Button fn={add3}  label='incrementer'/>
                                </td>
                                <td>
                                    <Button fn={add4}  label='incrementer'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Ten
