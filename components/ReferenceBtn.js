import React from 'react'
import Menu from 'core/frontend/common/menu/Menu'
import styles from 'core/frontend/client/client-menu/client-menu.styl'
import config from '../config'
import icon from './reference-btn.svg'

const ReferenceBtnComponent = (props) => {
  const open = () => window.location = config.urls[props.role || 'default'] 
  
  return (
    <Menu
      icon={ icon }
      onClick={ open }
      title={ 'Справка' }
      className={ styles.menu }
      titleClassName={ styles.menuTitle }
      childrenContainerClassName={ styles.childContainer }
    />)
}

export default ReferenceBtnComponent
