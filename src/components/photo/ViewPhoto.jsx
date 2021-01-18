import React from 'react';


const ViewPhoto = ({selectedPhoto}) => {
    return ( 
        <div className="text-center">
            {selectedPhoto &&
                <img className="img__size" src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description}/>
            }
        </div>
     );
}
 
export default ViewPhoto;