import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = ({ children, actionSubmit }) => {
  return (
    <form onSubmit={actionSubmit}>
      {children}
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

ProductForm.protoTypes = {
  children: PropTypes.object.isRequired,
  actionSubmit: PropTypes.func.isRequired
};

export default ProductForm;