import React, { useState, useEffect } from "react";
import "./imgSaldo.css";
import { Button, Divider, Slider } from "@mui/material";
import { useImg } from "../../context/toastImg/toastImgContext";
import { userService } from "../../services/userService";
import UpdateIcon from "@mui/icons-material/Update";

export const ImgSaldo = ({ data }) => {
    const [isvisible, setIsvisible] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const { imgProfile, updateImg } = useImg();
    const [userData, setUserData] = useState(data);
    const [sliderValue, setSliderValue] = useState(0);
    const userId = sessionStorage.getItem("user");

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [data]);

    const preview = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImg(reader.result);
                setIsvisible(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCargar = async () => {
        await userService.updateUserMoney(userId, sliderValue);
        setUserData(prevData => ({
            ...prevData,
            money: sliderValue + (prevData?.money || 0)
        }));
        setSliderValue(0);
    };

    const aplicarImg = () => {
        if (previewImg) {
            updateImg(previewImg);
            setUserData(prevData => ({
                ...prevData,
                img: previewImg
            }));
            sessionStorage.setItem("img", previewImg);
        }
        setPreviewImg(null);
        setIsvisible(false);
    };

    const cancelarImg = () => {
        setPreviewImg(null);
        setIsvisible(false);
    };

    return (
        <section className="sectionImgSaldo">
            <div className="imgNameUser">
                <input
                    id="upload-photo"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={preview}
                />
                <img src={previewImg || imgProfile} alt="User" />
                <p>{userData?.name} {userData?.lastname}</p>

                <Button
                    className="btnCambiarImagen"
                    variant="contained"
                    component="span"
                    sx={{
                        minWidth: 0,
                        height: "5rem",
                        width: "5rem",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid grey",
                        backgroundColor: "var(--button-buy)",
                    }}
                    onClick={() => {
                        if (!isvisible) {
                            document.getElementById("upload-photo").click();
                        }
                    }}
                >
                    <UpdateIcon sx={{ fontSize: 30, fill: "white" }} />
                </Button>

                {isvisible && (
                    <div className="buttonsUploadImg">
                        <Button variant="contained" color="error" size="large" onClick={cancelarImg}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="success" size="large" onClick={aplicarImg}>
                            Aplicar
                        </Button>
                    </div>
                )}
            </div>

            {/* <Divider sx={{ borderColor: '#e6d6c5', borderWidth: 2, marginTop: '2rem' }} /> */}

            <div className="saldoUser">
                <div className="currentSaldo">
                    <p>Saldo actual</p>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "1rem 0" }}>
                        $ {userData?.money ?? 0}
                    </p>
                </div>

                <Slider
                    min={0}
                    max={30000}
                    step={100}
                    value={sliderValue}
                    onChange={(_, value) => setSliderValue(value)}
                    valueLabelDisplay="auto"
                    sx={{
                        color:'green',
                        height:'1.5rem'
                    }}
                />

                <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "1.5rem 0" }}>
                    Total: <span style={{ color: "black" }}>$ {(userData?.money ?? 0) + sliderValue}</span>
                </p>

                <Button
                    variant="contained"
                    color="success"
                    onClick={handleCargar}
                    disabled={sliderValue === 0}
                >
                    Cargar
                </Button>
            </div>
        </section>
    );
};
