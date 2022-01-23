import React from 'react';
import styles from './HeaderDropdownMenu.module.css';

class HeaderDropdownMenu extends React.Component {

  _menu;

  constructor(props) {
    super(props);
    this._menu = props.menu;
    this._menu.forEach(element => {
      if(element.subcategories) {
        element.hasSubcategories = true;
      }
    });
  }

  render() {
    return <div>
      {
        this._menu.map((menu) => {
          return <span className={styles.Header__submenuContainer} key={menu.text}>
              <p className={styles.Header__paragraph} >{menu.text}</p>
              { menu.hasSubcategories && (
                <div className={styles.Header__submenu}> 
                  { 
                    menu.subcategories.map((submenu) => {
                      return <p className={styles.Header__paragraph} key={submenu.text}>{submenu.text}</p>
                    })
                  }
                </div>
              )}
            </span>
        })
      }
      </div>
  }

}

export default HeaderDropdownMenu;