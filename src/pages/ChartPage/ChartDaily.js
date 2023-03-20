import React, { useEffect } from 'react';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartDaily({ num, dayText }) {
  const url = `https://www.saiko.world/api/1.0/admin/dailyRev?paging=${num}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data;
        console.log(newData);
        daily(newData);
      });
    }, [num]);
  console.log(dayText);

  function daily(newData) {
    const columns = [['x'], [`${dayText}`]];
    newData.forEach((item) => {
      columns[0].push(item.date); //x軸
      columns[1].push(item.total);
    });
    console.log(columns);

    c3.generate({
      data: {
        x: 'x',
        columns: columns,
        color: {
          pattern: ['#FABF62'],
        },
        type: 'area-spline',
      },
      size: {
        height: 300,
      },
      legend: {
        show: false
      },
      grid: {
        x: {
          show: true,
        },
        y: {
          show: true,
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d',
          },
        },
      },
    });
  }
  return <div id="chart" />;
}
