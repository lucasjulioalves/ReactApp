import React from 'react';

import styles from './SideNav.module.css';

class SideNav extends React.Component {
  render() {
    return <div className={styles.SideNav}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
  </div>
  }
}
export default SideNav;
