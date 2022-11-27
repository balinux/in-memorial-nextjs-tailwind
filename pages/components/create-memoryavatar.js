import React, { useState , useRef} from "react";
import AvatarEditor from 'react-avatar-editor';

export const CreateMemoryAvatar = () => {
  const editor = useRef(null);

  const getImageUrl = async (canvas) => {
    const dataUrl = canvas.getImage().toDataURL()
    const result = await fetch(dataUrl)
    const blob = await result.blob()
  
    console.log(window.URL.createObjectURL(blob));
    return window.URL.createObjectURL(blob)
  }

    return (
      <div>
        <AvatarEditor
          ref={editor}
          image="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
          width={250}
          height={250}
          border={50}
          scale={1.2}
        />
        <button onClick={() => {
          if (editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = editor.current.getImage()
            getImageUrl(canvas)

            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = editor.current.getImageScaledToCanvas()
          }
        }}>Save</button>
      </div>
    )
}

export default CreateMemoryAvatar;
