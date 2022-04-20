import React from 'react';

export default function Table({ data }) {
    return (
        <>
            <table border="1" className="border">
                <thead className="border-b">
                    <tr>
                        <th className="p-3">Nama</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">No Tel</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td className="p-3">{item.nama}</td>
                            <td className="p-3">{item.email}</td>
                            <td className="p-3">{item.noTel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
