import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [nameArray, setNameArray] = useState([]);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    if (e.target.value) {
      setName(e.target.value);
    } else {
      setName('');
    }
  };

  const submitName = () => {
    if (name) {
      const newNameArray = [...nameArray];
      newNameArray.push(name);
      setNameArray(newNameArray);
    }
    setName('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          style={{ display: 'block' }}
        />
        <button onClick={submitName} disabled={!name}>
          Submit
        </button>
      </div>
      <div>
        {nameArray.map((submitedName, i) => (
          <div>{submitedName}</div>
        ))}
      </div>
    </div>
  );
}
