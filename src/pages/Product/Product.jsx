import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Product({ userToken }) {
    const [isLoading, setIsLoading] = useState(null);
    const [productList, setProductList] = useState(null);

    const getProduct = () => {
        setIsLoading(true);

        fetch('http://43.229.254.43/products', {
            headers: new Headers({
                Authorization: `Bearer ${userToken}`,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setProductList(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    useEffect(() => getProduct(), []);

    return (
        <div>
            <div className="bg-blue-500">
                <div className="container mx-auto py-32">
                    <h1 className="text-white font-bold text-5xl">Product</h1>
                </div>
            </div>
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    {isLoading && <div>Loading...</div>}
                    {!isLoading && productList?.length === 0 && <div>ProductList is empty</div>}
                    {!isLoading &&
                        productList?.length > 0 &&
                        productList.map((product) => (
                            <Link
                                to={`/product/${product._id}`}
                                className="shadow-md bg-white p-6 rounded-md hover:-translate-y-2 transition-all"
                            >
                                <h1 className="font-bold text-xl mb-3">{product.type}</h1>
                                <p className="text-gray-700">{product.name}</p>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
