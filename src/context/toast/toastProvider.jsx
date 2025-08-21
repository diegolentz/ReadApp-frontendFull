import { useState } from "react";
import "./toast.css";
import { ToastContext } from "./toastContext";
import React from "react";



export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        message: '',
        type: 'info',
        isOpen: false
    });

    const open = (message, option) => {
        setToast({ message, type: option, isOpen: true });
        setTimeout(() => setToast(prev => ({ ...prev, isOpen: false })), 1500);
    };

    const value = { open };

    return (
        <ToastContext.Provider value={value}>
            {toast.isOpen && (
                <div className={`toast toast-${toast.type}`}>
                    <div className="toast-content">
                        <p className="toastMsj">{toast.message}</p>
                    </div>
                </div>
            )}
            {children}
        </ToastContext.Provider>
    );
};