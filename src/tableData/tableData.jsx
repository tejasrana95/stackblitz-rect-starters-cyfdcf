import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tableData.css';

export default function TableData(props) {

  const [pureTableData, setPureTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    axios.get('https://mocki.io/v1/40d0bc00-7c09-41b9-8ee2-a028ef749cee').then((data) => {
      setPureTableData(data.data);
      setTableData(data.data);
    })

  }, []);
  const toggleChecked = () => {
    const tempFilter = {...filter};
    setFilter(null)
    tempFilter.gender = !tempFilter.gender;
    setTimeout(() => {
      setFilter(tempFilter)
    }, 1);

  };



  useEffect(() => {
    if (filter) {
      let filterData = pureTableData;
      if (filter.gender) {
      filterData = filterData.filter(data => (filter.gender) ? data.gender === 'male' : data.gender !== 'male');
      }
      if (filter.age) {
         filterData = filterData.filter(data => data.age === Number(filter.age));
      }
      setTableData(filterData);
    }
  }, [filter])


  function filterBasedOnAge(e) {
    const tempFilter = {...filter};
    setFilter(null)
    tempFilter.age = e.target.value;
    setTimeout(() => {
      setFilter(tempFilter)
    }, 1);
  }


  return (
    <div className="">
      <button onClick={toggleChecked}>Show male records</button>
      <input type='number' onKeyUp={filterBasedOnAge} placeholder='Enter the age for filter' />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Picture</th>
            <th>Friends Count</th>
          </tr>
        </thead>

        <tbody>
          {
            tableData.length > 0 &&
            tableData.map(data => (
              <tr>
                <th>{data.id}</th>
                <th>{data.name}</th>
                <th>{data.gender}</th>
                <th>{data.email}</th>
                <th>{data.age}</th>
                <th>{data.phone}</th>
                <th><img src={data.picture} /></th>
                <th>{data.friends.length + 1}</th>
              </tr>
            ))
          }</tbody>
      </table>
    </div>
  );
}
