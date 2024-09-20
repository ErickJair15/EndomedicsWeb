"use client";
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
function Test() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <CldImage
          key={image.public_id}
          src={image.public_id}
          width={image.width}
          height={image.height}
          alt={image.public_id}
          crop="fill"
        />
      ))}
    </div>
  );
}

export default Test
