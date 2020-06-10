import React,{useState} from 'react'
import './Room.css'

export function Room(){
    const [On,setOn] = useState(false)
    const [isTemp, setTemp] = useState(72)
    return (
        <div className={`Day ${On ? 'Night': ''}`}>
        <h1>HELLO {On? 'DARKMODE':'LITMODE'}</h1>
        <br />
        <button className={`btn-primary ${!On ? 'btn-secondary':''}`} onClick={() => setOn(false)} >On</button>
        <button className={`btn-Dark ${!On ? 'btn-primary':'btn-secondary'}`} onClick={() => setOn(true)}>Off</button>
        <hr />
        <h4>{`THE ROOM TEMPERATURE IS : ${isTemp}`} <sup>o</sup> F</h4>
        <br />
        <button className='btn-info' onClick={() => setTemp(isTemp + 1)}>+</button>
        
        <button className='btn-info' onClick={() => setTemp(isTemp - 1)}>-</button>
        </div>
    );
}
