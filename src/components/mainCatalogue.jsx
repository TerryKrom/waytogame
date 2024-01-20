import React, { useEffect, useState } from 'react';
import MiniCardRow from './miniCardRow';
import './mainCatalogue.css';

const MainCatalogue = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(21);
    const [selectedItem, setSelectedItem] = useState(21);
    const [isOpen, setIsOpen] = useState(false);

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
    }, [currentPage]);

    const handleItemsChange = (e) => {
        setItemsPerPage(parseInt(e, 10));
        setSelectedItem(parseInt(e, 10));
        handleDropDown();
    };

    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='catalogue-list'>
            <div className="filters">
                <div className="select">
                    <button className="select-button" onClick={() => handleDropDown()}>
                        <span>{selectedItem} Items per page</span>
                        <span className={isOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></span>
                    </button>
                    {isOpen ? (
                        <div className="optgroup">
                            {[21, 30, 45, 60].map((option) => (
                                <div
                                    key={option}
                                    className={`select-option ${option === selectedItem ? 'selected' : ''}`}
                                    onClick={() => handleItemsChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="page-count">
                    <span className="fa-solid fa-thumbtack"></span> 
                    <span>{currentPage}</span>
                </div>
            </div>

            {/* Renderiza os itens da página atual */}
            <MiniCardRow data={currentItems} />

            {/* Adiciona controles de paginação */}
            <div className='page-controls'>
                <button
                    className='fa fa-arrow-left'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {/* Renderiza os números das páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            handlePageChange(index + 1);
                        }}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className='fa fa-arrow-right'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>
            <br />
        </div>
    );
};

export default MainCatalogue;
