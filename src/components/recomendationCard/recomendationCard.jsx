import React, { use, useEffect, useState } from "react";
import './recomendationCard.css';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { Button, Rating, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RecomendationCard = ({ recomendation, isEdit }) => {
    if (!recomendation) return null;

    const rate =  recomendation.rate.reduce((a, b) => a + b, 0) / recomendation.rate.length;
    const nav = useNavigate();


    return (
        <div className={`recomendationCard bkg`}>
            <img
                className="recomendationCard-img"
                src={recomendation.img}
                alt={recomendation.name}
            />
            <h3>{recomendation.title}</h3>
            <h3>{recomendation.userName} {recomendation.userLastname}</h3>

            <>
                <div className="recomendationBooks">
                    {recomendation.books?.map((book, index) => (
                        <div className="bookName" key={index}>
                            <ImportContactsTwoToneIcon sx={{ color: 'purple', marginRight: '0.2rem', fontSize: '1.8rem' }} />
                            <p>{book}</p>
                        </div>
                    ))}
                </div>
                <div className="rateRecomendation" style={{ display: "flex", alignItems: "center", flexDirection: 'column', gap: '0.5rem' }}>
                    <Rating name="read-only" value={rate} readOnly size="large" sx={{ fontSize: '2.8rem' }} />
                </div>
            </>
            <div className="buttonRecomendation">
                {!isEdit && (
                    <Button
                        variant="contained"
                        sx={{ width: '100%', backgroundColor: 'var(--button-buy)' }}
                        onClick={() => nav(`/valorar-recomendacion/${recomendation.id}`)}
                    >
                        {isEdit ? 'Confirmar' : 'Valorar'}
                    </Button>
                )}
                {isEdit && (
                    <Button
                        variant="contained"
                        sx={{ width: '100%', backgroundColor: 'var(--button-buy)' }}
                        onClick={() => nav(`/editar-recomendacion/${recomendation.id}`)}
                    >
                        {'Editar'}
                    </Button>
                )}
            </div>
        </div>
    );
};
