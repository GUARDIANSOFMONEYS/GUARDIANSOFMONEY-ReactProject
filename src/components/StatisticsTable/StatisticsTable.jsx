import React from "react";

const StatisticsTable = ({ data }) => {
  if (!data || !data.categories) return <p>Veri yok</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Kategori</th>
          <th>Tutar</th>
        </tr>
      </thead>
      <tbody>
        {data.categories.map(({ name, amount, color }) => (
          <tr key={name}>
            <td>
              <span
                style={{
                  backgroundColor: color,
                  width: 15,
                  height: 15,
                  display: "inline-block",
                  marginRight: 8,
                }}
              ></span>
              {name}
            </td>
            <td>{amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Toplam</td>
          <td>{data.totalAmount.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default StatisticsTable;
