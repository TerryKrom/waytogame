import React, { useState, useEffect } from 'react';
import fetchData from '../fetchApi';
import './categoryList.css';
import MiniCard from './miniCard';
import { TailSpin } from 'react-loader-spinner';


const CategoryList = () => {
    const [resourceType, setResourceType] = useState("action");
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState("action"); // Novo estado para rastrear o botão ativo
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${resourceType}`)
            .then(result => {
                setData(result);
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500)
            })
            .catch(error => console.error('Error:', error));
    }, [resourceType]);

    const changeResourceType = (type) => {
        setResourceType(type);
        setIsLoading(true);
        setActiveButton(type); // Atualize o botão ativo quando o tipo de recurso for alterado
    }

    const limitedData = data.slice(0, 10);

    return (
        <>
            <div className="category-list">
                <button
                    className={`category ${activeButton === "shooter" ? "active" : ""}`}
                    onClick={() => changeResourceType("shooter")}
                >
                    Shooter
                </button>

                <button
                    className={`category ${activeButton === "mmorpg" ? "active" : ""}`}
                    onClick={() => changeResourceType("mmorpg")}
                >
                    MMORPG
                </button>

                <button
                    className={`category ${activeButton === "action" ? "active" : ""}`}
                    onClick={() => changeResourceType("action")}
                >
                    Action
                </button>

                <button
                    className={`category ${activeButton === "action-rpg" ? "active" : ""}`}
                    onClick={() => changeResourceType("action-rpg")}
                >
                    Action RPG
                </button>

                <button
                    className={`category ${activeButton === "sports" ? "active" : ""}`}
                    onClick={() => changeResourceType("sports")}
                >
                    Sports
                </button>

                <button
                    className={`category ${activeButton === "fantasy" ? "active" : ""}`}
                    onClick={() => changeResourceType("fantasy")}
                >
                    Fantasy
                </button>
            </div>

            {isLoading ? (
                // Se isLoading for verdadeiro, exibe o spinner de carregamento
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
            ) : (
                <div className="result">
                    {limitedData.map((game, index) => (
                        <MiniCard
                            key={index}
                            game={game}
                        />
                    ))}
                </div>

            )}
        </>
    );
}

export default CategoryList;
