import React,{useState} from 'react';


function Room() {
  const state = useState(true);
  const isLit = state[0];
  const setLit = state[1]; 
  const [isLit, setLit] = useState(true)
  return (
    <div className="Room">
      This Is my First {isLit? 'lit':'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
    </div>
  );
}

export default Room;
