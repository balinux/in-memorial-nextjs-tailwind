import React, { useState } from "react";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

export const CreateMemory = () => {

  const [src, setSrc] = useState()
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState({ aspect: 16 / 9 })

  // set source
  const handleFile = (e) => {
    console.log(e);
    setSrc(URL.createObjectURL(e.target.files[0]))
  }

  const setter = (x) => {
    console.log(x);
    setCrop(x)
  }


  const getCroppedImg = (image) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
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

    // As Base64 string
    // const base64Image = canvas.toDataURL("image/jpeg");
    // return base64Image;

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = fileName;
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    // <ReactCrop crop={crop} onChange={c => setCrop(c)}>
    <div>
      <ReactCrop crop={crop} onChange={setter} >
        <img src={src} onLoad={getCroppedImg}/>
      </ReactCrop>
      <input type="file" accept="image/*" onChange={handleFile} />
      {/* <button onClick={ }>save</button> */}
    </div>
  );
};

export default CreateMemory;
