async function compressImage(file, compressionRatio) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set the canvas dimensions to the image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Set the background color to white
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get the compressed data URL
        const compressedDataURL = canvas.toDataURL(
          "image/jpeg",
          compressionRatio
        );

        // Convert data URL to Blob
        const byteString = atob(compressedDataURL.split(",")[1]);
        const mimeString = compressedDataURL
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }

        const compressedBlob = new Blob([uint8Array], { type: mimeString });

        // Create a new file object from the compressed Blob
        const compressedFile = new File([compressedBlob], file.name, {
          type: compressedBlob.type,
          lastModified: Date.now(),
        });

        // Resolve the Promise with the compressed file object
        resolve(compressedFile);
      };

      img.src = event.target.result;
    };

    // Read the input file as a data URL
    reader.readAsDataURL(file);
  });
}

module.exports = compressImage;
