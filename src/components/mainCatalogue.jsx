import React, { useEffect, useState } from 'react';
import MiniCardRow from './miniCardRow';
import './mainCatalogue.css';

const MainCatalogue = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calcula o índice inicial e final dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    // Calcula o número total de páginas com base na quantidade de itens por página
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])

    return (
        <>
            {/* Renderiza os itens da página atual */}
            <MiniCardRow data={currentItems} />

            {/* Adiciona controles de paginação */}
            <div className='page-controls'>
                <button className='fa fa-arrow-left' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>

                {/* Renderiza os números das páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => { handlePageChange(index + 1) }} disabled={currentPage === index + 1}>
                        {index + 1}
                    </button>
                ))}

                <button className='fa fa-arrow-right' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            </div>
            <br />
        </>
    );
};

export default MainCatalogue;
