import React from 'react';
import Departaments from '../../constants/header-departaments.constants';
import MainOptions from '../../constants/header-main-options.constants';
import HeaderDropdownMenu from '../HeaderDropdownMenu/HeaderDropdownMenu';
import styles from './HeaderTabs.module.css';

class HeaderTabs extends React.Component {
  
  _mainOptions = MainOptions;
  _departaments = Departaments;

  render() {
    return (
      <div className={styles.Header} data-testid="HeaderTabs">
        <div className={styles.Header__item}
          ref={this._parentDivRef}>
          <span>Todos os departamentos</span>
          <div className={styles.Header__Dropdown}
          >
            <HeaderDropdownMenu  
              menu={this._departaments}
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
}

export default HeaderTabs;
