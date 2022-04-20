import React from 'react';

function DarkModeButton({ isDarkMode, onClick }) {
    const handleDarkMode = () => {
        if (onClick) onClick();
    };

    return (
        <button
            className="fixed bottom-10 right-10 bg-gray-200 dark:bg-primary-600 text-primary-600 dark:text-white p-3 rounded"
            onClick={handleDarkMode}
        >
            {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
}

export default DarkModeButton;
