import React from "react";
import { ReactPainter } from 'react-painter';

const Drawing = () => (
  <ReactPainter
    width={300}
    height={300}
    onSave={blob => console.log(blob)}
    render={({ canvas, triggerSave, setColor }) => (
      <div>
        <div>Awesome heading</div>
        <input type="color" onChange={e => setColor(e.target.value)} />
        <div className="awesomeContainer">{canvas}</div>
        <button onClick={triggerSave}>Save</button>
      </div>
    )}
  />
);


export default Drawing;
