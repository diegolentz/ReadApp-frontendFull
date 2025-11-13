import React from "react";
import './recomendationCard.css';

export const RecomendationCard = ({ recomendation }) => {
    if (!recomendation || recomendation == null) return null;
    const gener = recomendation.genere;

    const generosMap = {
        "FICCIÓN": 0,
        "NO FICCIÓN": 1,
        "MISTERIO": 2,
        "FANTASIA": 3,
        "CIENCIA FICCIÓN": 4,
        "BIOGRAFÍA": 5,
        "HISTORIA": 6,
        "ROMANCE": 7,
        "TERROR": 8,
        "AVENTURA": 9,
        "AUTOAYUDA": 10,
        "SALUD": 11,
        "VIAJES": 12,
        "RELIGIÓN": 13,
        "COCINA": 14
    };

    return (
        <div className={`recomendationCard bkg-${generosMap[gener]}`}>
            <img
                className="recomendationCard-img"
                src={recomendation.img}
                alt={recomendation.name}
            />
            <h3>{recomendation.title}</h3>
            <h3>{recomendation.userName} {recomendation.userLastname}</h3>
            <div className="recomendationBooks">
                {recomendation.books?.map((book, index) => (
                    <p key={index}>{book}</p>
                ))}
            </div>
        </div>
    );
};
