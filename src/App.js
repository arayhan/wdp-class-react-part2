import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import PageRoutes from './pages/PageRoutes';

function App() {
    const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN'));
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={darkMode && 'dark'}>
            <Navbar userToken={userToken} setUserToken={setUserToken} />

            <PageRoutes userToken={userToken} setUserToken={setUserToken} />

            <DarkModeButton isDarkMode={darkMode} onClick={handleDarkMode} />
        </div>
    );
}

export default App;
