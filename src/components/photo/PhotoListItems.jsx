import React from 'react';


const PhotoListItems = ({photo}) => {
    return (
        <div>
            <h1>{photo.id}</h1>
            {console.log(photo)}
        </div>
    );
}

export default PhotoListItems;