import React, { useEffect } from 'react';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartCategory({ type }) {
  const url = 'https://www.saiko.world/api/1.0/admin/salesByCategory';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data[type];
        category(newData);
      });
  });

  function category(newData) {
    const columns = newData.slice(0, 4).map(({ name, qty }) => [name, qty]);
    const otherTotal = newData.slice(4).reduce((acc, { qty }) => acc + qty, 0);
    const otherColumn = otherTotal > 0 ? [['Other', otherTotal]] : [];
    // console.log([...columns, ...otherColumn]);
    c3.generate({
      bindto: `#${type}`,
      data: {
        columns: [...columns, ...otherColumn],
        type: 'donut',
      },
      color: {
        pattern: ['#E68618', '#F280CA', '#26BFC7', '#5151D3', '#8DB5E5'],
      },
      donut: {
        title: type,
      },
      size: {
        height: 250,
      },
    });
  }
  return <div id={type} />;
}
