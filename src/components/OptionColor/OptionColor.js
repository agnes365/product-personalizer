import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, actionSetColor }) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map(color =>
          <li key={color}>
            <button type="button"
              onClick={e => actionSetColor(e, color)}
              className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
          </li>
        )}
      </ul>
    </div>
  )
};

OptionColor.protoTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  actionSetColor: PropTypes.func.isRequired
};

export default OptionColor;