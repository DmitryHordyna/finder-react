import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
//styles
import './ImageGallery.scss'

const ImageGallery = ({imagesArr ,onClickImage}) => {
    return (
        <ul className="ImageGallery">
            <ImageGalleryItem imagesArr={imagesArr} onClickImage={onClickImage} />
</ul>
    )
}
export default ImageGallery