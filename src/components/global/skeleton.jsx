import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ImageSkeleton = () => {
    return (  
        <Skeleton 
        baseColor='var(--light-secondary-color)'
        width={300} height={300}/>
    );
}
 
export default ImageSkeleton;