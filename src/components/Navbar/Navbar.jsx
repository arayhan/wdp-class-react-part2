import { Link, useNavigate } from 'react-router-dom';

function Navbar({ userToken, setUserToken }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('TOKEN');
        setUserToken(false);
        navigate('/');
    };

    return (
        <div className="bg-gray-800 dark:bg-primary-600 text-white px-8 space-x-8 flex justify-between">
            <div>
                <Link to="/" className="p-6 inline-block hover:bg-gray-700 transition-all">
                    Home
                </Link>
                <Link to="/blog" className="p-6 inline-block hover:bg-gray-700 transition-all">
                    Blog
                </Link>
                <Link to="/second" className="p-6 inline-block hover:bg-gray-700 transition-all">
                    Second
                </Link>
                <Link to="/product" className="p-6 inline-block hover:bg-gray-700 transition-all">
                    Product
                </Link>
            </div>

            <div className="flex items-center space-x-3">
                {userToken && <div>Selamat Datang!</div>}
                {userToken && (
                    <button className="bg-gray-500 px-6 py-2 rounded-md" onClick={handleLogout}>
                        Logout
                    </button>
                )}
                {!userToken && (
                    <Link to="/login" className="p-6 inline-block hover:bg-gray-700 transition-all">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Navbar;
