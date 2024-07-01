import { useState } from 'react';
import './App.css';
// import Cropper from './Cropper';
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";

function App() {
  const [file, setSelectedFile] = useState<any>(null);
  const [croppedImage, setCroppedimage] = useState<any>(null)

  const options: Options = {
    filename: "advanced-example.pdf",
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.EXTREME,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "landscape"
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/jpeg",
      qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true
      }
    }
  };


  const getTargetElement = () => document.getElementById("container");

  const downloadPdf = () => generatePDF(getTargetElement, options);
  return (
    <div>
      <button onClick={downloadPdf}>Download PDF</button>
      <div className="card-container">
        {/* <img
        src={`https://picsum.photos/id/${imageId}/400/200`}
        alt="Sample"
        className="card-image"
      /> */}
        <h2 className="card-title">{"title"}</h2>
        <p className="card-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          libero quam. Fusce efficitur, lectus ac commodo maximus, neque augue
          tincidunt tellus, id dictum odio eros ac nulla.
        </p>
        <p className="card-paragraph">
          Vivamus at urna sit amet justo auctor vestibulum ut nec nisl. Sed auctor
          augue eget libero tincidunt, ut dictum libero facilisis. Phasellus non
          libero at nisi eleifend tincidunt a eget ligula.
        </p>
      </div>
    </div>
  );
}

export default App;
