import React, { useState, useEffect } from 'react';
import fetchData from '../fetchApi';
import './categoryList.css';

const CategoryList = () => {
    const [resourceType, setResourceType] = useState("action");
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState("action"); // Novo estado para rastrear o botão ativo

    useEffect(() => {
        fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${resourceType}`)
            .then(result => {
                setData(result);
                console.log(result);
            })
            .catch(error => console.error('Error:', error));
    }, [resourceType]);

    const changeResourceType = (type) => {
        setResourceType(type);
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

            <div className="result">
                <ul>
                    {limitedData.map((game, index) => (
                        <li key={index}>{game.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default CategoryList;
