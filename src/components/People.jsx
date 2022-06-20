import React, { useState } from 'react';
import useStore from '../store';
import Input from './Input';

const People = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, name]);
  };
  const people = useStore((state) => state.people);
  // const addPerson = useStore((state) => state.addPerson('person added'));
  return (
    <div className="people_container">
      <h2>we have "{people.length}" people</h2>
      <Input />
      <ul>
        {people.map((p, index) => {
          return <li key={index}> {p} </li>;
        })}
      </ul>
      <br />
    </div>
  );
};

export default People;
