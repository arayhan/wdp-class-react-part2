import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ userToken, setUserToken }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = () => {
        return true;
    };

    const handleLogin = (event) => {
        if (isFormValid()) {
            fetch('http://43.229.254.43/user/login', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert('Berhasil Login');
                    const token = res.token;
                    localStorage.setItem('TOKEN', token);
                    setUserToken(token);
                    navigate('/');
                })
                .catch((error) => {
                    alert('Terjadi Kesalahan');
                    console.log({ error });
                });
        }
        event.preventDefault();
    };

    useEffect(() => {
        if (userToken) navigate('/');
    }, [userToken, navigate]);

    return (
        <div className="container mx-auto py-40">
            <div className="text-center font-bold text-xl mb-10">LOGIN</div>
            <form className="border max-w-lg space-y-3 p-6 mx-auto flex flex-col items-end">
                <label htmlFor="username" className="flex items-center space-x-3 w-full">
                    <div className="w-40">Username</div>
                    <input
                        onChange={(event) => setUsername(event.target.value)}
                        className="border p-3 w-full"
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                    />
                </label>
                <label htmlFor="password" className="flex items-center space-x-3 w-full">
                    <div className="w-40">Password</div>
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        className="border p-3 w-full"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </label>
                <button onClick={handleLogin} className="bg-blue-500 text-white px-10 py-3 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
