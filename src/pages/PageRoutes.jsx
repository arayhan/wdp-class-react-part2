import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { queryStringToObject } from '../utils/helpers';
import Home from './Home/Home';
import SecondPage from './SecondPage/SecondPage';
import BlogList from './Blog/BlogList';
import BlogDetail from './Blog/BlogDetail';
import Product from './Product/Product';
import Login from './Login/Login';

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

const PageRoutes = ({ userToken, setUserToken }) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog/:uid" element={<BlogDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/login" element={<Login userToken={userToken} setUserToken={setUserToken} />} />
            <Route element={<ProtectedRoute isAllowed={!!userToken} />}>
                <Route path="/product" element={<Product userToken={userToken} />} />
            </Route>
        </Routes>
    );
};

export default PageRoutes;
