import React from "react";
function Home( ){
return(<>
<div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">React Drawing App</h5>
    <p className="card-text">Lets get creative.</p>
    <a href="/drawing" className="btn btn-primary">Start Drawing!</a>
  </div>
</div>
<div className="home-pg">
    <p className="txt">Thank you so much for coming to my app! 
    Click on the button above, or the link the says drawing in the navigation bar to get started.
    </p>
    <p className="txt2">
    Hope you have a great time!
    </p>
</div>

</>)};
export default Home