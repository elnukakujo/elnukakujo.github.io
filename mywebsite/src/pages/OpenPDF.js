import React, { useState } from 'react';

const OpenPDF = () => {
  const [filename, setFilename] = useState('example.pdf'); // Default PDF filename

  const openPDF = () => {
    const baseUrl = window.location.origin; // Get the base URL of the current origin
    const pdfUrl = `${baseUrl}/pdfs/${filename}`; // Construct the full URL
    
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <h1>Open PDF</h1>
      <input 
        type="text" 
        value={filename} 
        onChange={(e) => setFilename(e.target.value)} 
        placeholder="Enter PDF filename" 
      />
      <button onClick={openPDF}>Open PDF</button>
    </div>
  );
};

export default OpenPDF;
