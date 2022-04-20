import React, { useState, useEffect } from 'react';
import Text from '../../components/Text';

const SecondPage = () => {
    const [angka, setAngka] = useState(0);
    const [showText, setShowText] = useState(true);

    const addAngka = () => {
        setAngka(angka + 1);
    };

    const removeAngka = () => {
        setAngka(angka - 1);
    };

    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate - angka');
    }, [angka]);

    useEffect(() => {
        console.log('componentDidUpdate - showText');
    }, [showText]);

    return (
        <div>
            {showText && <Text text={angka} />}
            <button onClick={addAngka}>+</button>
            <button onClick={removeAngka}>-</button>

            <button onClick={() => setShowText(!showText)}>Show Text</button>
        </div>
    );
};

export default SecondPage;
