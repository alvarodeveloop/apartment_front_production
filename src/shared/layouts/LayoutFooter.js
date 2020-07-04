import React, { Component } from 'react'
import { connect } from 'react-redux'

class LayoutFooter extends Component {
  render() {
    return (
      <nav className={`layout-footer footer bg-${this.props.footerBg}`}>

      </nav>
    )
  }
}

export default connect(store => ({
  footerBg: store.theme.footerBg
}))(LayoutFooter)
