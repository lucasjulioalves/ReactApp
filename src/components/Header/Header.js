import React from 'react';
import MainOptions from '../../constants/header-main-options.constants';
import styles from './Header.module.css';

class Header extends React.Component {
  
  _mainOptions = MainOptions;
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.Header} data-testid="Header">
        <div class={styles.Header__item}>
          <span>Todos os departamentos</span>
          <div className={styles.Header__Dropdown}><p>fuck it</p></div>
        </div>
       {
         this._mainOptions.map((option) => {
          return <div className={styles.Header__item}key={option.text}>
            {option.text}
            </div>
         })
       }
    </div>
    )
  }
}

export default Header;
