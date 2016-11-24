import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

import Menu from 'core/frontend/common/menu/Menu'
import styles from 'core/frontend/client/client-menu/client-menu.styl'
import icon from './reference-btn.svg'

const ReferenceBtnComponent = (props) => {
  const { currentUser, urls } = props
  const isAuthenticated = R.isPresent(currentUser)
  const role = isAuthenticated ? currentUser.role : 'VIEWER'
  const open = () => window.location = urls[role]

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
  currentUser: PropTypes.object
}

export default connect(state => ({
  urls: state.pluginConfigs['reference-btn'],
  currentUser: state.auth.currentUser
}))(ReferenceBtnComponent)
