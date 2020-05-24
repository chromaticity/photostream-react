import React, {Component} from 'react';
import './App.css';
import ImageCell from './components/Cell.js';

class App extends Component {
  // Add any state stuff up here...

  constructor(props) {
    super(props);

    this.imageImport = require.context("./img", false, /.*\.jpg$/);

    const imageImports = [];

    this.imageImport.keys().forEach(function(key) {
        imageImports.push(key);
    });

    this.imageImports = imageImports;
  }

  // Keep in mind using that key might be bad practice.
  // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  generateAllImages = (images) => {
    images = this.imageImports.map((image, key) => {
        console.log(image)
        return <ImageCell key={key} imageHref={image}/>;
    });

    return images;
  }

  render() {
    // Main base component.
    const allImages = this.generateAllImages(this.imageImports);
    
    return (
      <section className="full-portfolio-wrapper">
        <div className="flexbox-portfolio">
          {allImages}
        </div>
      </section>
    );
  }
}

export default App;