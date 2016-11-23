import React from 'react'
import Menu from 'core/frontend/common/menu/Menu'
import icon from './reference-btn.svg'
import styles from 'core/frontend/client/client-menu/client-menu.styl'


const ReferenceBtnComponent = () => {
  const referenceUrl = "http://ya.ru" 

  const open = () => {
    window.location = referenceUrl
  }

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
