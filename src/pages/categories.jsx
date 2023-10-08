import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import CategorieList from '../components/categoryList';

const Categories = () => {
    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg titleText={"Categories"} inside={<CategorieList/>}></ContainerLg>
        </>  
    );
}
 
export default Categories;