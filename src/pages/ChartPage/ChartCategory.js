import React, { useEffect } from 'react';
import 'c3/c3.css';
import c3 from 'c3';

export default function ChartCategory({ type }) {
  const url = 'https://www.saiko.world/api/1.0/admin/salesByCategory';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const newData = data.data[type];
        console.log(newData);
        category(newData);
      });
  }, [type]);

  function category(newData) {
    const columns = newData.slice(0, 5).map(({ name, qty }) => [name, qty]);
    const otherTotal = newData.slice(5).reduce((acc, { qty }) => acc + qty, 0);
    const otherColumn = otherTotal > 0 ? [['Other', otherTotal]] : [];
    c3.generate({
      bindto: `#${type}`,
      data: {
        columns: [...columns, ...otherColumn],
        type: 'donut',
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
