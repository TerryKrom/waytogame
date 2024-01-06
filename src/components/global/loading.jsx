import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
    return (  
        <div align="center" className='loader-container'>
          <TailSpin
            height={80}
            width={80}
            color="var(--dark-primary-color)"
            ariaLabel="tail-spin-loading"
            radius={1}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
    );
}
 
export default Loading;