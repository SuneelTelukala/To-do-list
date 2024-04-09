import { useState } from "react";
import React from "react";

export function CrudOperations(){
  const [data, setData] = useState([{ id: 1, name: "David", age: 35, city: "Texas" }]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [editIndex, setEditIndex] = useState(0);


  function handleIdChange(e) {
    setId(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleAdd() {
      if (editIndex !== 0) {
        const updatedData = [...data];
        updatedData[editIndex-1] = { id, name, age, city };
        setData(updatedData);
        setEditIndex(0);

      } else {
        setData([...data, { id, name, age, city }]);
      }
      setId("");
      setName("");
      setAge("");
      setCity("");
    
  }

  function handleDeleteClick(index) {
    let flag = window.confirm("Are you sure you want to delete?");
    if (flag === true) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    
    }
  }

  function handleEditClick(id) {
    setEditIndex(id);
    const details = data.find((item) => item.id === id);
    if (details) {
      setId(details.id)
      setName(details.name);
      setAge(details.age);
      setCity(details.city);
    }
  }
  return (
    <div className="container-fluid">
     <dl>
        <dt>Id</dt>
        <dd> <input type="number"className="form-control w-25" value={id} onChange={handleIdChange}/></dd>
        <dt>Name</dt>
        <dd><input className="form-control w-25"type="text" value={name} onChange={handleNameChange}/></dd>
        <dt>Age</dt>
        <dd> <input className="form-control w-25"type="number" value={age} onChange={handleAgeChange}/></dd>
        <dt>City</dt>
        <dd> <input type="text"className="form-control w-25" value={city} onChange={handleCityChange}/></dd>
    </dl>
      <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button className="btn btn-info" onClick={() =>handleEditClick(item.id)} >Edit</button>
                <button className="btn btn-danger" onClick={() =>handleDeleteClick(index)} > Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
  }