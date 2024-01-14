import React, { useState, useEffect } from 'react';
import fetchData from '../fetchApi';
import './categoryList.css';
import MiniCard from './miniCard';
import Loading from './global/loading';


const CategoryList = () => {
    const [resourceType, setResourceType] = useState("shooter");
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState("shooter"); // Novo estado para rastrear o botão ativo
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
        if (type !== resourceType) {
            setResourceType(type);
            setIsLoading(true);
            setActiveButton(type); // Atualize o botão ativo quando o tipo de recurso for alterado

        }
    }

    const limitedData = data.slice(0, 12);

    return (
        <>
            <div className="category-list">
                <div className="row">
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
                        className={`category ${activeButton === "fighting" ? "active" : ""}`}
                        onClick={() => changeResourceType("fighting")}
                    >
                        Fight
                    </button>
                </div>

                <div className="row">
                    <button
                        className={`category ${activeButton === "fantasy" ? "active" : ""}`}
                        onClick={() => changeResourceType("fantasy")}
                    >
                        Fantasy
                    </button>
                    <button
                        className={`category ${activeButton === "strategy" ? "active" : ""}`}
                        onClick={() => changeResourceType("strategy")}
                    >
                        Strategy
                    </button>
                    <button
                        className={`category ${activeButton === "moba" ? "active" : ""}`}
                        onClick={() => changeResourceType("moba")}
                    >
                        Moba
                    </button>
                    <button
                        className={`category ${activeButton === "survival" ? "active" : ""}`}
                        onClick={() => changeResourceType("survival")}
                    >
                        Survival
                    </button>
                    <button
                        className={`category ${activeButton === "racing" ? "active" : ""}`}
                        onClick={() => changeResourceType("racing")}
                    >
                        Racing
                    </button>
                    <button
                        className={`category ${activeButton === "anime" ? "active" : ""}`}
                        onClick={() => changeResourceType("anime")}
                    >
                        Anime
                    </button>
                    
                </div>

            </div>

            {isLoading ? (
                // Se isLoading for verdadeiro, exibe o spinner de carregamento
                <Loading/>
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
