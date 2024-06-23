import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getProductById } from '../../actions/products';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.products);
  const { title, price, description, category, image } = productDetails;

  return <div>{title}</div>;
};

export default ProductDetails;
