import React, {Component} from 'react';
import './App.css';
import ImageCell from './components/Cell.js';

class App extends Component {
  // Add any state stuff up here...

  images = array.map(image => {
    return <ImageCell imageHref={`./icons/${image}.png`}/>
  });

  render() {
    // Main base component.
    return (
      <section className="full-portfolio-wrapper">
        <div className="flexbox-portfolio">
          {images}
        </div>
      </section>
    );
  }
}

export default App;