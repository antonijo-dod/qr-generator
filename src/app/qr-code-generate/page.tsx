"use client";

import React, { useState } from "react";

import QRCode from "qrcode.react";
import Link from "next/link";

export default function QrCodeGenerate() {
  const [string, setString] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${string}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mx-auto">
      <QRCode
        id="123456"
        value="123456"
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <div className="form-control w-full max-w-xs mt-8">
        <label className="label">
          <span className="label-text">Enter your text</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setString(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mt-4">String for print: {string}</div>
      <div className="mt-4 flex items-center gap-4">
        <a className="btn btn-primary" onClick={downloadQR}>
          {" "}
          Download QR{" "}
        </a>
        or
        <Link href="/dashboard">
          <button className="btn btn-outline">Go back</button>
        </Link>
      </div>
    </div>
  );
}
