import React from 'react';
import PropTypes from 'prop-types';
import styles from './Graphics.module.scss';

const Graphics = () => (
  <div className={styles.Graphics} data-testid="Graphics">
    Graphics Component
  </div>
);

Graphics.propTypes = {};

Graphics.defaultProps = {};

export default Graphics;
