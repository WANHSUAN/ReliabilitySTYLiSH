import React, { useEffect } from 'react';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartDaily({ num, dayText }) {
  const urlTemplate = 'https://www.saiko.world/api/1.0/admin/dailyRev?paging=';
  const urls = Array.from({ length: num }, (_, i) => `${urlTemplate}${i + 1}`);

  console.log(urls)

  useEffect(() => {
    const fetchPromises = urls.map(url =>
      fetch(url).then(response => response.json())
    );

    Promise.all(fetchPromises).then(dataArray => {
      const newData = dataArray.flatMap(data => data.data);
      console.log(newData)
      daily(newData);
    });
    }, [num]);

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
