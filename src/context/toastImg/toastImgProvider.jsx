import { useState } from "react";
import React from "react";
import { ImgContext } from "./toastImgContext";


export const ImgProvider = ({ children }) => {
    const [imgProfile, setImgProfile] = useState(sessionStorage.getItem('img') || '');

    const updateImg= (img) => {
        setImgProfile(img);
        sessionStorage.setItem('img', img);
    }

    return (
        <ImgContext.Provider value={{ imgProfile, updateImg }}>
            {children}
        </ImgContext.Provider>
    );
};