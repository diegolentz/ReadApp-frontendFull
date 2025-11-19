import React, { use, useEffect, useState } from "react";
import './recomendationCard.css';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { Button, Rating, TextField } from "@mui/material";
import { recomendationService } from "../../services/recomendationService";
import { useNavigate } from "react-router-dom";

export const RecomendationCard = ({ recomendation, method, isEdit }) => {
    if (!recomendation) return null;

    // Estado para modo valoración
    const [isRatingMode, setIsRatingMode] = useState(false);
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState(0);
    const [califications, setCalifications] = useState([]);
    const [size, setSize] = useState(0);
    const nav = useNavigate();

    const clickHandler = () => {
        if (isEdit) {
            nav('/perfil/my-recommendations');
        } else {
            method(recomendation.id, rate, comment);
            setCalifications([...califications, rate]);
            setSize(size + 1);
            const newAverage = (califications.reduce((a, b) => a + b, 0) ) / (size + 1);
            setRate(newAverage);
        }
    }

    useEffect(() => {
        const initialRate = Array.isArray(recomendation.rate) && recomendation.rate.length > 0
            ? recomendation.rate.reduce((a, b) => a + b, 0) / recomendation.rate.length
            : 0;
        setRate(initialRate);
        setCalifications(recomendation.rate || []);
        setSize(Array.isArray(recomendation.rate) ? recomendation.rate.length : 0);
    }, [recomendation.rate]);

    return (
        <div className={`recomendationCard bkg`}>
            <img
                className="recomendationCard-img"
                src={recomendation.img}
                alt={recomendation.name}
            />
            <h3>{recomendation.title}</h3>
            <h3>{recomendation.userName} {recomendation.userLastname}</h3>
            {isRatingMode ? (
                <div className="ratingSection" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Rating
                        name="rate-recomendation"
                        value={rate}
                        onChange={(_, v) => setRate(v || 0)}
                        size="large"
                    />
                    <TextField
                        label="Comentario"
                        multiline
                        minRows={2}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </div>
            ) : (
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
            )}
            <div className="buttonRecomendation">
                {!isEdit && <Button
                    variant="contained"
                    sx={{ width: '100%', backgroundColor: 'var(--button-buy)' }}
                    onClick={async () => {
                        if (isRatingMode) {
                            // await recomendationService.rateRecommendation(recomendation.id, { rate, comment });
                            clickHandler();
                            setIsRatingMode(false);
                            setComment('');
                        } else {
                            setIsRatingMode(true);
                        }
                    }}
                >
                    {isRatingMode ? 'Confirmar' : 'Valorar'}
                </Button>}
                {isEdit && <Button
                    variant="contained"
                    sx={{ width: '100%', backgroundColor: 'var(--button-buy)' }}
                    onClick={() => {
                        if (isRatingMode) {
                            recomendation.rate = rate; // actualizar visual local
                            setIsRatingMode(false);
                            setComment('');
                        } else {
                            setIsRatingMode(true);
                        }
                    }}
                >
                    {'Editar'}
                </Button>}
            </div>
        </div>
    );
};
