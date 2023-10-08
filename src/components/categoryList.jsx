import React, { useState, useEffect } from 'react';
import fetchData from '../fetchApi';

const CategoryList = () => {
    const [resourceType, setResourceType] = useState("action");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${resourceType}`)
            .then(result => {
                setData(result);
                console.log(result); // Mova o console.log aqui
            })
            .catch(error => console.error('Error:', error));
    }, [resourceType]);
    
    const changeResourceType = (type) => {
        setResourceType(type);
    }

    const limitedData = data.slice(0, 10);

    return (
        <>
            <div className="category">
                <button onClick={() => changeResourceType("shooter")}>
                    Shooter
                </button>
                <button onClick={() => changeResourceType("mmorpg")}>
                    MMORPG
                </button>
                <button onClick={() => changeResourceType("action")}>
                    Action
                </button>
                <button onClick={() => changeResourceType("action-rpg")}>
                    Action RPG
                </button>
                <button onClick={() => changeResourceType("sports")}>
                    Sports
                </button>
                <button onClick={() => changeResourceType("fantasy")}>
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
