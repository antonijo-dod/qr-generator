"use client";

import React, { useState } from "react";
import Link from "next/link";

const QrCodeDetails = () => {
  const [qrList, setQrList] = useState([
    {
      id: 1,
      value: "https://site1.com",
    },
    {
      id: 2,
      value: "https://site2.com",
    },
    {
      id: 3,
      value: "https://site3.com",
    },
  ]);

  return (
    <div className="mx-auto container">
      <Link href="/qr-code-generate">
        <button className="btn btn-primary">
          Generate and download qr code
        </button>
      </Link>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {qrList.map(({ id, value }) => (
              <tr key={id}>
                <th>{id}</th>
                <td>{value}</td>
                <th>
                  <button className="btn btn-outline btn-sm">View</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QrCodeDetails;
