import React from 'react';

// functional component for a simple cell for each photo.
const ImageCell = (props) => {
    // vars go up here for whatever...
    const {imageHref} = props;
    return (
        <div className="item">
            <img src={imageHref} alt="" className="wow zoomIn" data-wow-delay=".25s"/>
            <a data-fancybox="group-4" className="fancyGallery" href={imageHref}></a>
        </div>
    )
}

export default ImageCell;