import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ name, title, colors, sizes, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleSetColor = (e, color) => {
    e.preventDefault();
    setCurrentColor(color);
  };

  const handleSetSize = (e, size) => {
    e.preventDefault();
    setCurrentSize(size);
  };

  const getPrice = () => {
    const size = sizes.find(item => item.name === currentSize);
    return basePrice + size.additionalPrice;
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm actionSubmit={addToCart}>
          <OptionSize sizes={sizes} currentSize={currentSize} actionSetSize={handleSetSize} />
          <OptionColor colors={colors} currentColor={currentColor} actionSetColor={handleSetColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </ProductForm>
      </div>
    </article>
  )
};

Product.protoTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;