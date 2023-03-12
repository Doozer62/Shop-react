import axios from 'axios';
import { useEffect, useState } from 'react';
import cartWhite from '../assets/img/cartWhite.png';
import rating from '../assets/img/rating.png';
import arrow from '../assets/img/arrow.png';
import classes from '../styles/Product.module.scss';
import { useParams, Link } from 'react-router-dom';

function Product () {

    
    const [product, setProduct] = useState(null)
    const params = useParams();
    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${params.productId}`)
        .then((res) => 
            setProduct(res.data)
        )
    }, [params.productId])

    if(product === null) {
       return <h2>Page is loading......</h2>
    }

    return(
        <div>
  
  <div className='container'>
  <div className="arrowBack">
    <Link className={classes.linkBack} to={"/"}>
      <img className={classes.backImg} src={arrow} alt="Arrow" />
      Back to Best Seller
    </Link>
  </div>

  <div className={classes.product}>
    <img className={classes.image} src={product.image} alt="" />
    <div className="info">
      <p className="title">{product.title}</p>
      <p className="price">$ {product.price}</p>
      <div className={classes.rating}>
        <p>Rating: {product.rating.rate}</p>
        <img src={rating} alt="" />
      </div>
      <div className={classes.category}>
        <span>Category:</span>
        <p>{product.category}</p>
      </div>
      <p className={classes.description}>{product.description}</p>
      <button className={classes.btnCart}>
        <img className={classes.imgCart} src={cartWhite} alt="" />
        Add to cart
      </button>
    </div>
  </div>
  </div>
</div>
    )
}

export default Product;