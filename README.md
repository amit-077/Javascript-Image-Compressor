# Javascript-Image-Compressor

# Image Compression Function

This function allows you to compress images (PNG, JPG, or JPEG) with a specified compression ratio.

## Function Signature

```javascript
/**
 * Compresses an image file.
 *
 * @param {File} file - The file object representing the image (PNG, JPG, or JPEG).
 * @param {number} compressionRatio - The compression ratio between 0 and 1.
 * @returns {Promise<File>} - A Promise that resolves with the compressed image file object.
 */
async function compressImage(file, compressionRatio) {
  // Function implementation
}
```

## Installation

```bash
npm install easy-image-compress

const compressImage = require('easy-image-compress');
OR
import compressImage from 'easy-image-compress'
```

## Below is an example

```javascript
// Example usage with async-await:
async function handleImageCompression() {
  const inputFile = document.getElementById("fileInput").files[0];
  const compressionRatio = 0.7;

  try {
    const compressedFile = await compressImage(inputFile, compressionRatio);
    // Do something with the compressed file, for example, upload it to a server
    console.log("Compressed File:", compressedFile);
  } catch (error) {
    console.error("Error compressing image:", error);
  }
}

// Call the async function
handleImageCompression();
```
