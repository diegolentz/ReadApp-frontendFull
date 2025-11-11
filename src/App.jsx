import { HeaderComponent } from './components/header/header';
import { ToastProvider } from './context/toast/toastProvider.jsx';
import { AppRouter } from './routes';
import React from 'react';
import { ImgProvider } from './context/toastImg/toastImgProvider.jsx';


function App() {
  return (
    <ToastProvider>
      <ImgProvider>
      <AppRouter />
    </ImgProvider>
    </ToastProvider>
  );
}

export default App;