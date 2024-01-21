import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import CategoryList from '../components/categoryList';
import Footer from '../components/footer';

const Categories = () => {
    return (
        <>
            <Header/>
            <ContainerLg titleText={"Choose a Category"} inside={<CategoryList/>}></ContainerLg>
            <Footer/>
        </>  
    );
}
 
export default Categories;