import { createContext, useContext } from "react";
import React from "react";

export const ImgContext = createContext(null);
export function useImg() {
    return useContext(ImgContext);
}