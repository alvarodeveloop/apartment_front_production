import React, { useEffect } from 'react'
import LayoutNavbar from './LayoutNavbar'
import LayoutSidenav from './LayoutSidenav'
import LayoutFooter from './LayoutFooter'
import layoutHelpers from './helpers'

const Layout1  = props => {

  useEffect(() => {
    layoutHelpers.init()
    layoutHelpers.update()
    layoutHelpers.setAutoUpdate(true)
    return () => {
      layoutHelpers.destroy()
    }
  },[])

  const closeSidenav = e => {
    e.preventDefault()
    layoutHelpers.setCollapsed(true)
  }

  return (
    <div className="layout-wrapper layout-1">
      <div className="layout-inner">
        <LayoutNavbar {...props} />

        <div className="layout-container">
          <LayoutSidenav {...props} />

          <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">
              {props.children}
            </div>

            <LayoutFooter {...props} />
          </div>
        </div>
      </div>
      <div className="layout-overlay" onClick={closeSidenav}></div>
    </div>
  )

}

export default Layout1
