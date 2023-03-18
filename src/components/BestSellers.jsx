import '../styles/bestsellers.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function BestSellers() {
const [products, setProducts] = useState([]);
const [search, setSearch] = useState('');
const navigate = useNavigate();

useEffect(() => {
    axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products').then((res) => {
        setProducts(res.data)
    })
}, [])

const finalProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
})

    return (
        <div className="container">
        <input type="text" placeholder='Поиск' value={search} onChange={(e) => {setSearch(e.currentTarget.value)}} />
        <div className="bestSeller">
        <div className="card__inner">
            {finalProducts.map((product) => (
                <div className="card" key={product.id}>
                    <div className="card__wrapper">
                    <img className="image" src={product.image} alt="Товар" />
                    <h4 className='title'>{product.title}</h4>
                    <p className="price">{product.price} р</p>
                    </div>
                    <button onClick={() => navigate(`/product/${product.id}`)}>Show More</button>
                </div>
            ))}
        </div>
        </div>
        </div>
    )
}

export default BestSellers;