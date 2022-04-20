import React from 'react';

export default function Form({ onSubmit }) {
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nama" className="mr-6">
                        Nama
                    </label>
                    <input className="border" type="text" name="nama" id="nama" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="mr-6">
                        Email
                    </label>
                    <input className="border" type="email" name="email" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="noTel" className="mr-6">
                        Nomor Tel
                    </label>
                    <input className="border" name="noTel" id="noTel" />
                </div>
                <button className="bg-primary-500 px-6 py-3 text-white rounded-md" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
