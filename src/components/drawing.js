import React from "react";
import { ReactPainter } from "react-painter";
import "../styles/style.css";
import { rword } from "rword";
import { Button, ButtonGroup } from "react-bootstrap";

const Drawing = () => (
  <ReactPainter
    width= {600}
    height={600}
    onSave={blob => console.log(blob)}
    render={({ canvas, triggerSave, setColor, imageDownloadUrl }) => (
      <div>
        <h1>Start your masterpiece here!</h1>
        <ButtonGroup size="lg" className="mb-2">
        <Button onClick={randomInspo}>Inspiration</Button>
        <Button onClick={triggerSave}>Save</Button>
        {imageDownloadUrl ? (
          <a variant="link" href={imageDownloadUrl} download>
           Download
          </a>
        ) : null}
        </ButtonGroup>
        <input className="color-select" type="color" onChange={e => setColor(e.target.value)} />
        <div className="canvas">{canvas}</div>
      </div>
    )}
  />
);

function randomInspo(){
  console.log(rword.generate())
  alert("Think of this word when starting your next project: "+ rword.generate())
};

export default Drawing;
