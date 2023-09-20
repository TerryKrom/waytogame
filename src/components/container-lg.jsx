import React from 'react';
import Title from './title';
import './container-lg.css';

const ContainerLg = (props) => {
    return (  
        <div className='container-lg'>
            <Title text={props.titleText}></Title>
            <div className="container-main">
                {props.inside}
            </div>
        </div>
    );
}
 
export default ContainerLg;