import React,{ useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AuthPage from 'pages/AuthPage'
import  'styles/AuthStyle.css'
import { login,logout } from 'actions/auth'
import { resetCart } from 'actions/cart'
//import { MainLayout } from 'components/Layout'
import Layout1 from 'shared/layouts/Layout1'
import { setMenu, removeMenu } from 'actions/menu'
import { API_URL } from 'utils/constants'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { setAuthorizationToken } from 'utils/functions'
import axios from 'axios'

const MainContainer = props => {

    useEffect( () => {
      if(props.isLogin){

        if(props.menu.length === 0){
          axios.get(API_URL+'menu_user').then(result => {
            props.setMenu(result.data)
          }).catch(err => {
            const { response } = err
            if(response){
              NotificationManager.error(response.data.message,'Error')
            }else{
              NotificationManager.error('No se pudo cargar el menú, contacte con soporte')
            }
          })
        }

      }else if(!props.isLogin){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setAuthorizationToken(null);
        props.removeMenu()
      }

    },[props.isLogin])

    const handleLogoutUser = () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setAuthorizationToken(null);
      props.removeMenu()
      props.logout()
    }

    const logoutUserByTokenExpired = err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
        if(err.status === 400){
          setTimeout(() => {
            handleLogoutUser()
          },1500)
        }
      }else{
        console.log(err);
        NotificationManager.error('Error contacte con soporte')
      }
    }

    if(props.isLogin){

      return(
        <Layout1 {...props} menuUser={props.menu} logoutUser={handleLogoutUser} logoutByToken={logoutUserByTokenExpired}>
          {props.children}
          <NotificationContainer />
        </Layout1>
      )
    }else{
      return(
        <Redirect to="/" />
      )
    }
}

MainContainer.propTypes = {
    isLogin : PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    resetCart: PropTypes.func.isRequired,
    setMenu: PropTypes.func.isRequired,
    removeMenu: PropTypes.func.isRequired,
    menu: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    isLogin : state.auth.isAuthenticated,
    menu: state.menu.modules
  }
}

function mapDispatchToProps(){
    return {
      login,
      logout,
      resetCart,
      setMenu,
      removeMenu
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(MainContainer);
