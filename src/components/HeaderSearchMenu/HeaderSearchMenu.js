import React from 'react';
import styles from './HeaderSearchMenu.module.css';
import { BsFillGearFill } from "react-icons/bs";
import { IconContext } from "react-icons";

class HeaderSearchMenu extends React.Component {
  
  render() {
    return (
      <div className={styles.HeaderSearchMenu__container}>
        <div className={styles.HeaderSearchMenu__options}>
          <IconContext.Provider value={{ className: styles.HeaderSeachMenu__icon, size: "32px" }}>
            <div>
              <BsFillGearFill />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    )
  }
}

export default HeaderSearchMenu;
