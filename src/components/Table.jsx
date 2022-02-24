import React from "react";

export default function Table({ data }) {
  return (
    <>
      {console.log("Dari komponen table", data)}
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>No Tel</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>{item.noTel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
