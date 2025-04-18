export const handleDownload = (path, name) => {
    console.log('Downloading file from:', path);
    // Create a link and set the URL to your PDF file
    const link = document.createElement('a');
    link.href = path;
    
    // Optional: Specify the downloaded filename
    link.download = name; 
    
    // Append to the DOM, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};