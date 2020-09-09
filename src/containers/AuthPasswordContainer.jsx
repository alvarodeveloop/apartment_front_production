import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AuthRecoveryPassForm from 'pages/AuthRecoveryPassForm'
import  'styles/AuthStyle.css'
import { login } from 'actions/auth'

class AuthPasswordContainer extends React.Component {

  render () {
    const  { isLogin } = this.props
    return (
      <div>
        {isLogin ? (
          <Redirect to="/dashboard" />
        ) : (
          <AuthRecoveryPassForm isLogin={isLogin} loginDispatch={this.props.login} {...this.props} />
        )}
      </div>
    )
  }
}

AuthPasswordContainer.propTypes = {
    isLogin : PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    isLogin : state.auth.isAuthenticated
  }
}

function mapDispatchToProps(){
    return {
      login
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(AuthPasswordContainer);
