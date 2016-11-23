import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Menu from 'core/frontend/common/menu/Menu'
import styles from 'core/frontend/client/client-menu/client-menu.styl'
import icon from './reference-btn.svg'

const ReferenceBtnComponent = (props) => {
  const open = () => window.location = props.urls[props.role || 'default'] 
  
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

ReferenceBtnComponent.propTypes = {
  urls: PropTypes.object,
  role: PropTypes.string
}

export default connect(state => ({
  urls: state.pluginConfigs['reference-btn'],
  role: state.auth.currentUser.role
}))(ReferenceBtnComponent)
