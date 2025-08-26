import { HeaderComponent } from './components/header/header';
import { ToastProvider } from './context/toast/toastProvider.jsx';
import { AppRouter } from './routes';
import React from 'react';


function App() {
  return (
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  );
}

export default App;