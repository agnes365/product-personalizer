import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, actionSetSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size =>
          <li key={size.name}>
            <button type="button"
              onClick={e => actionSetSize(e, size.name)}
              className={clsx(currentSize === size.name && styles.active)}>{size.name}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
};

OptionSize.protoTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  actionSetSize: PropTypes.func.isRequired
};

export default OptionSize;