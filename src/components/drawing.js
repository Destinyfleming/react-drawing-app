import React from 'react';
import { ReactPainter } from 'react-painter';
import '../styles/style.css';
import { rword } from 'rword';

//go through react tutorials on youtube, publish finsished to github
//make a container, reference structure from activity 20 && conditional rendering
// in css pg center "root" class div and decorate buttons
const Drawing = () => (
  <ReactPainter
    width= {600}
    height={600}
    onSave={blob => console.log(blob)}
    render={({ canvas, triggerSave, setColor }) => (
      <div>
        <button className='btn-btn'onClick={triggerSave}>Save</button>
        <button className='btn-btn' onClick={randomInspo}>Inspiration</button>
        <input className='color-select'type='color' onChange={e => setColor(e.target.value)} />
        <div className='canvas'>{canvas}</div>
      </div>
    )}
  />
);

//make fetch request or api call
//activity 20
function randomInspo(){
  alert("Think of this word when starting your next project: "+ rword.generate())
  
}
export default Drawing;
