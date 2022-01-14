import React from 'react';
import styles from './HeaderDropdownMenu.module.css';

class HeaderDropdownMenu extends React.Component {

  _menu;
  _show;
  constructor(props) {
    super(props);
    this._menu = props.menu;
    this._show = props.show;
  }

  render() {
    return <div className={styles.Header__Dropdown} style={this._show ? { display: 'block'} : {display: 'none'}}>
    {
      this._menu.map((menu) => {
        return <p className={styles.Header__paragraph} key={menu.text}>{menu.text}</p>
      })
    }
    </div>
  }
}

export default HeaderDropdownMenu;