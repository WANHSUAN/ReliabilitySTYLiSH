import React, { useEffect } from 'react';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartDaily() {
  const url = 'https://www.saiko.world/api/1.0/admin/dailyRev?paging=1';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data;
        // console.log(newData);
        daily(newData);
      });
  });

  function daily(newData) {
    const columns = [['x'], ['data']];
    newData.forEach((item) => {
      columns[0].push(item.date);
      columns[1].push(item.total);
    });
    // console.log(columns);
    c3.generate({
      data: {
        x: 'x',
        columns: columns,
      },
      color: {
        pattern: ['#FABF62'],
      },
      size: {
        height: 300,
      },
      legend: {
        position: 'right',
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
