import React from "react";

export default function Form({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">Nama</label>
          <input type="text" name="nama" id="nama" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="noTel">Nomor Tel</label>
          <input name="noTel" id="noTel" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
