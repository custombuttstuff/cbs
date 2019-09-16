import React from 'react';
import d1 from './design1.png';
import d2 from './design2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{marginLeft: 80, marginRight: 80}}>
        <header className="App-header">
          <h1>Tired of poking around for the right angle?</h1>
          <h3>Design the perfect toy to cum every time</h3>
          <div style={{textAlign: "left", width: 900}}>
            We work with 3 lucky buyers each week to design their dream anal toy, 3D print it, cast it in smooth silicone,
            and ship the finished product to their back door.
          </div>
          <h2>Here's how it works</h2>
          <div style={{textAlign: "left", width: 900}}>
            1. You bid the maximum you're willing to pay to be one of this week's buyers. If you win, you'll be charged the 
            <i> second highest</i> bid for your toy. In other words, you pay just enough to beat the other guy no matter how
            extravagantly you bid.<br/><br/>
            2. If your bid wins, we schedule the design session via email and charge the design deposit ($100)<br/><br/>
            3. Our designer works with you live via Zoom for 75 minutes to digitally sculpt your perfect toy.<br/><br/>
            4. If you're satisfied with your design we charge your bid price then print it, cast it in your choice of
            colors, and ship to you.<br/><br/>
            5. (Optional) Once you're a CustomButtStuff Customer, we're happy to stick with you on the journey to anal bliss.<br/>
            Toy redesigns are $60 for 30 minutes of resculpting plus 75% of your original bid to produce new versions. If you want
            copies of your existing design we charge just 30% of bid price.
          </div>
          <h1>Bid for your toy now</h1>
          <form action="https://formspree.io/custombuttstuff@gmail.com" method="POST" >
            <label>I'm willing to pay up to: </label>
            <input name="bid" type="number" style={{width: 50}} min="150" step="1.00" defaultValue="150"/> USD <br/>
            <label>Here's what I want in my ass:</label> <br/>
            <textarea name="description" style={{width: 900, height: 400}}></textarea>
          </form>
        </header>
        <body className="App-body">
          <h2>
            Sample toys from satisfied clients (shared with permission)
          </h2>
          <row>
            <img src={d1} />
            <img src={d2} />
          </row>
        </body>
      </div>
    </div>
  );
}

export default App;
