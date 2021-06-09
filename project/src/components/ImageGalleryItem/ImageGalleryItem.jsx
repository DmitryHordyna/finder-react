import React from 'react'
//styles
import './ImageGalleryItem.scss'

const ImageGalleryItem = ({ imagesArr, onClickImage}) => {
    return   (<>
            {imagesArr.map(({id,webformatURL,tags,largeImageURL}) => (
              <li key={id} className="ImageGalleryItem" onClick={onClickImage}>
                <img
                  src={webformatURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                  data={largeImageURL}
                />
              </li>
            ))}
          </>)
}

export default ImageGalleryItem