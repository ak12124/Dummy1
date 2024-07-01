import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface Props {
  imageToCrop: any;
  croppedImage: any;
}

const Cropper: React.FC<Props> = ({ imageToCrop, croppedImage }) => {
  const [crop, setCrop] = useState<any>({
    width: 300,
    height: 300,
    aspect: 1,
  });
  const [image, setImage] = useState<any>(null);

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx: any = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    croppedImage(base64Image);
  };
  return (
    <div>
      <div>
        {imageToCrop && (
          <div>
            <ReactCrop
              crop={crop}
              onChange={setCrop}
              circularCrop
              >
              <img src={imageToCrop} />
            </ReactCrop>
            <br />
            <button onClick={cropImageNow}>Crop</button>
            <br />
            <br />
          </div>
        )}
      </div>
      <input
        type="range"
        onChange={(e:any) =>
          setCrop({
            ...crop,
            width: e.target.value * 50,
            height: e.target.value * 50,
          })
        }
        min={10}
        max={300}
        step={50}
        value={crop.aspect}
      />
    </div>
  );
};

export default Cropper;
