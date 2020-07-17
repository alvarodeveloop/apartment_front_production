import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, FormControl, Dropdown, Badge, ListGroup, Media } from 'react-bootstrap'
import { selectOwnership } from 'actions/ownership'
import layoutHelpers from './helpers'

class LayoutNavbar extends Component {
  constructor(props) {
    super(props)
    this.isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  }

  toggleSidenav(e) {
    e.preventDefault()
    layoutHelpers.toggleCollapsed()
  }

  handleSelectChange = e => {
    let val = e.target.value
    this.props.selectOwnership(val)
  }

  render() {
    return (
      <Navbar bg={this.props.navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">

        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/">POSTVENTA</Navbar.Brand>

        {/* Sidenav toggle */}
        {this.props.sidenavToggle && (
          <Nav className="align-items-lg-center mr-auto mr-lg-4">
            <Nav.Item as="a" className="nav-item nav-link px-0 ml-2 ml-lg-0" href="#toggle" onClick={this.toggleSidenav}>
              <i className="ion ion-md-menu text-large align-middle"></i>
            </Nav.Item>
          </Nav>
        )}

        {/* Navbar toggle */}
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="align-items-lg-center">
            {/* Search */}
            <label className="nav-item navbar-text navbar-search-box p-0 active">
              <i className="ion ion-ios-search navbar-icon align-middle"></i>
              <span className="navbar-search-input pl-2">
                <FormControl as="select" className="navbar-text mx-2" placeholder="Search..." style={{width: '200px'}} onChange={this.handleSelectChange}>
                  {this.props.ownerships.map((v,i) => (
                    <option key={i} value={v.ownership.id}>{v.ownership.number}</option>
                  ))}
                </FormControl>
              </span>
              Propiedades
            </label>
          </Nav>
          <Nav className="align-items-lg-center ml-auto">
            <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
            <Nav.Item as="a" className="nav-item nav-link px-0 ml-2 ml-lg-0" href="#toggle" onClick={this.toggleSidenav}>
              <i className="ion ion-md-menu text-large align-middle"></i>
            </Nav.Item>
            <Dropdown as={Nav.Item} className="demo-navbar-user" alignRight={this.isRTL}>
              <Dropdown.Toggle as={Nav.Link}>
                <span className="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                  <img src={`${process.env.PUBLIC_URL}/add_client.png`} className="d-block ui-w-30 rounded-circle" alt="User" />
                  <span className="px-1 mr-lg-2 ml-2 ml-lg-0">{this.props.userConnect.name}</span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Divider />
                <Dropdown.Item hred="#" onClick={this.props.logoutUser} ><i className="ion ion-ios-log-out text-danger"></i> &nbsp; Salir</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

LayoutNavbar.propTypes = {
  sidenavToggle: PropTypes.bool
}

LayoutNavbar.defaultProps = {
  sidenavToggle: true
}

function mapDispatchToProps(){
  return {
    selectOwnership
  }
}

export default connect(store => ({
  navbarBg: store.theme.navbarBg,
  userConnect: store.auth.user,
  ownerships: store.ownership.ownerships
}),mapDispatchToProps())(LayoutNavbar)
