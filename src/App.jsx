import React from "react";
import { ToastProvider } from './context/toast/toastProvider.jsx';
import { AppRouter } from './routes';

function App() {
  return (
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  );
}

export default App;