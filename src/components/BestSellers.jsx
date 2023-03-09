import '../styles/bestsellers.scss';
import Pled from "../assets/img/products/pled-1.jpg";
import Pled2 from "../assets/img/products/pled-2.jpg";
import { useState } from 'react';

// const products = [
//     {
//         "_id": "62bde0f941e732c5cfc7897f",
//         "id": 1,
//         "title": "Плед Arya из Искусственного Меха Parison",
//         "price": 2.569,
//         "description": "Плед Arya из Искусственного Меха 160X220 Parison",
//         "category": "Пледы",
//         "image": Pled,
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         },
//         "createdAt": "2011-09-30T17:44:25.381Z",
//         "updatedAt": "2011-09-30T17:44:25.381Z",
//     },

//     {
//         "_id": "62bde0f941e732c5cfc7897f22",
//         "id": 2,
//         "title": "Плед Arya из Искусственного Меха Viola",
//         "price": 1.507,
//         "description": "Плед Arya из Искусственного Меха Viola 1,5-спальное",
//         "category": "Пледы",
//         "image": Pled2,
//         "rating": {
//             "rate": 4.0,
//             "count": 259
//         },
//         "createdAt": "2011-10-30T17:44:25.381Z",
//         "updatedAt": "2011-10-30T17:44:25.381Z",
//     },

//     {
//         "_id": "62bde0f941e732c5cfc7897f32",
//         "id": 3,
//         "title": "Плед Arya из Искусственного Меха Viola",
//         "price": 1.807,
//         "description": "Плед Arya из Искусственного Меха Viola 1,5-спальное",
//         "category": "Пледы",
//         "image": Pled2,
//         "rating": {
//             "rate": 4.0,
//             "count": 259
//         },
//         "createdAt": "2011-10-30T17:44:25.381Z",
//         "updatedAt": "2011-10-30T17:44:25.381Z",
//     }
// ];

const [products, setProducts] = useState([])

function BestSellers() {
    return (
        <div className="container card__inner">

            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img className="image" src={product.image} alt="Товар" />
                    <h4 className='title'>{product.title}</h4>
                    <p className="price">{product.price} р</p>
                    <button>Show More</button>
                </div>
            ))}
        </div>
    )
}

export default BestSellers;