import React from 'react';
import HeaderTabs from '../HeaderTabs/HeaderTabs';
import HeaderSearchMenu from '../HeaderSearchMenu/HeaderSearchMenu';

import styles from './Header.module.css';

class Header extends React.Component {
  
  render() {
    return (
      <div>
        <HeaderSearchMenu></HeaderSearchMenu>
        <HeaderTabs></HeaderTabs>
      </div>
    )
  }
}

export default Header;
