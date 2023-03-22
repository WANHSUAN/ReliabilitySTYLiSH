import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartMonth() {
  const url = 'https://www.saiko.world/api/1.0/admin/monthlyRev';
  const { jwtToken } = useContext(AuthContext);

  useEffect(() => {
    if(!jwtToken){
    console.log(jwtToken);
    return
  }
    fetch(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
          const newData = data.data;
          console.log(newData);
          month(newData);
        });
  }, [jwtToken]);

  function month(newData) {
    const columns = [['data1']];
    newData.forEach((item) => {
      columns[0].push(item.total);
    });
    const columnsX = [];
    newData.forEach((item) => {
      const date = new Date(2000, item.month - 1, 1);
      columnsX.push(date.toLocaleString('en-US', { month: 'short' }));
    });

    c3.generate({
      bindto: '#monthlyRev',
      data: {
        columns: columns,
        type: 'bar',
      },
      axis: {
        x: {
          type: 'category',
          categories: columnsX,
        },
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
      color: {
        pattern: ['#FABF62'],
      },
      size: {
        height: 300,
      },
      legend: {
        show: false,
      },
    });
  }
  return <div id="monthlyRev" />;
}
