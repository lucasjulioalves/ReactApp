import React from 'react';
import Departaments from '../../constants/header-departaments.constants';
import MainOptions from '../../constants/header-main-options.constants';
import HeaderDropdownMenu from '../HeaderDropdownMenu/HeaderDropdownMenu';
import styles from './Header.module.css';

class Header extends React.Component {
  
  _mainOptions = MainOptions;
  _departaments = Departaments;
  _show = false;
  
  render() {
    return (
      <div className={styles.Header} data-testid="Header">
        <div className={styles.Header__item}
          onMouseEnter={() => this.setIsShown(true)}
          onMouseLeave={() => this.setIsShown(false)}
        >
          <span>Todos os departamentos</span>
          <div className={styles.Header__Dropdown}
          >
            <HeaderDropdownMenu  
              menu={this._departaments}
              show={this._show}
              
              >
            </HeaderDropdownMenu>
          </div>
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

  setIsShown(show) {
    this._show = show;
  }
}

export default Header;
