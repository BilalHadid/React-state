import React,{useState} from 'react';


function Room() {
    const [isLit, setLit] = useState(true)
  return (
    <div className="Room">
      This Is my First room
    </div>
  );
}

export default Room;
