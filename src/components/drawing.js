import React from 'react';
import { ReactPainter } from 'react-painter';
import '../components/style.css';
/*const styles = {
  canvas:{
    background: "white",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    padding: "0 20px",
    display: flex,
    justify-content: center,
    align-items: center,
  },
};
*/
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
        <input type='color' onChange={e => setColor(e.target.value)} />
        <div className='canvas'>{canvas}</div>
        <button className='btn-btn'onClick={triggerSave}>Save</button>
        <button onClick={randomInspo}>Inspiration</button>
      </div>
    )}
  />
);

//make fetch request or api call
//activity 20
function randomInspo(){
  alert("you click")
}
export default Drawing;
