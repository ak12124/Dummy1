import React, { useState, useRef } from 'react';
import './CircularImageCrop.css'; // Import CSS for styling circular crop

interface CircularImageCropProps {
  imageUrl: string;
}

const CircularImageCrop: React.FC<CircularImageCropProps> = ({ imageUrl }) => {
  const [cropSize, setCropSize] = useState<number>(50); // Initial crop size
  const imageRef = useRef<HTMLImageElement>(null); // Reference for the image element

  // Function to handle changing crop size
  const handleCropSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCropSize(parseInt(event.target.value));
  };

  // Function to handle cropping
  const handleCrop = () => {
    // Perform crop logic here
    console.log('Cropped!');
  };

  // Function to handle canceling
  const handleCancel = () => {
    // Perform cancel logic here
    console.log('Cancelled!');
  };

  return (
    <div className="circular-image-crop">
      <div className="image-container">
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Image to Crop"
          style={{
            clipPath: `circle(${cropSize}% at center)`,
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          min="10"
          max="100"
          value={cropSize}
          onChange={handleCropSizeChange}
          className="slider"
        />
        <div className="buttons">
          <button onClick={handleCrop}>Crop</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CircularImageCrop;
