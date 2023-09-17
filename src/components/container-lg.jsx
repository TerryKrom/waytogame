import React from 'react';
import Title from './title';
import './container-lg.css';

const ContainerLg = (props) => {
    return (  
        <div className='container-lg'>
            <Title text={props.titleText}></Title>
        </div>
    );
}
 
export default ContainerLg;