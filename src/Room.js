import React,{useState} from 'react'
import './Room.css'

export function Room(){
    const [On,setOn] = useState(false)
    return (
        <div className={`Day ${On ? 'Night': ''}`}>
        <h1>HELLO {On? 'DARKMODE':'LITMODE'}</h1>
        <br />
        <button className={`btn-primary ${!On ? 'btn-secondary':''}`} onClick={() => setOn(false)} >On</button>
        <button className={`btn-Dark ${!On ? 'btn-primary':'btn-secondary'}`} onClick={() => setOn(true)}>Off</button>
        </div>
    );
}
