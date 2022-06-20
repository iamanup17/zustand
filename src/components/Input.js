import React from 'react';
import { useRef } from 'react';
import useStore from '../store';

const Input = () => {
  const inputRef = useRef();
  const addPerson = useStore((state) => state.addPerson);
  const add = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  );
};

export default Input;
