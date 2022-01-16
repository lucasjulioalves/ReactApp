import React from 'react';
import styles from './HeaderDropdownMenu.module.css';

class HeaderDropdownMenu extends React.Component {

  _menu;
  _parentRef;
  _width;
  _height;

  constructor(props) {
    super(props);
    this._menu = props.menu;
    this._parentRef = props.parentRef
  }

  render() {
    return <div className={styles.Header__Container} style={
      {width: `${this._width}`, height: `${this._height}`}
    }>
      <div className={styles.Header__Dropdown}>
      {
        this._menu.map((menu) => {
          return <p className={styles.Header__paragraph} key={menu.text}>{menu.text}</p>
        })
      }
      </div>
    </div> 
  }

  componentDidMount() {
    setTimeout(() => {
      this._width = this._parentRef.current.offsetWidth;
      this._height = this._parentRef.current.offsetHeight;
    }, 0)
  }
}

export default HeaderDropdownMenu;