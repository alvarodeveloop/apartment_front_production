import React,{ useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import  'styles/AuthStyle.css'
import { login,logout } from 'actions/auth'
import { setOwnerships,cleanOwenerships } from 'actions/ownership'
import { setHousing,removeHousing } from 'actions/housing'
import { resetCart } from 'actions/cart'
//import { MainLayout } from 'components/Layout'
import Layout1 from 'shared/layouts/Layout1'
import { setMenu, removeMenu } from 'actions/menu'
import { setConfig, removeConfig } from 'actions/configs'
import { API_URL } from 'utils/constants'
import { ToastContainer, toast } from 'react-toastify'
import { setAuthorizationToken } from 'utils/functions'
import axios from 'axios'

const MainContainer = props => {

    useEffect( () => {
      if(props.isLogin){

        if(props.menu.length === 0){
          let promises = [
            axios.get(API_URL+'menu_user'),
            axios.get(API_URL+'master_config_ss'),
          ]

          if(props.userState.id_rol == 5){
            promises.push(
              axios.get(API_URL+'ownership_by_user'),
            )
          }

          if(props.userState.id_rol == 6){
            promises.push(
              axios.get(API_URL+'housing_complexe_by_user')
            )
          }

          Promise.all(promises).then(result => {
            props.setMenu(result[0].data)
            props.setConfig(result[1].data)
            if(props.userState.id_rol == 5){
              props.setOwnerships(result[2].data)
            }
            if(props.userState.id_rol == 6){
              props.setHousing(result[2].data)
            }
          }).catch(err => {
            const { response } = err
            if(response){
              toast.error(response.data.message,'Error')
            }else{
              console.log(err);
              toast.error('No se pudo cargar el menú, contacte con soporte')
            }
          })
        }

      }else if(!props.isLogin){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setAuthorizationToken(null);
        props.removeMenu()
        props.removeConfig()
        props.cleanOwenerships()
        props.removeHousing()
      }

    },[props.isLogin])

    const handleLogoutUser = () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setAuthorizationToken(null);
      props.removeMenu()
      props.removeConfig()
      props.logout()
      props.cleanOwenerships()
      props.removeHousing()
    }

    const logoutUserByTokenExpired = err => {
      if(err.response){
        toast.error(err.response.data.message)
        if(err.status === 400){
          setTimeout(() => {
            handleLogoutUser()
          },1500)
        }
      }else{
        console.log(err);
        toast.error('Error contacte con soporte')
      }
    }

    if(props.isLogin){

      return(
          <Layout1 {...props} menuUser={props.menu} logoutUser={handleLogoutUser} logoutByToken={logoutUserByTokenExpired}>
            {props.children}
            <ToastContainer/>
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
    userState: state.auth.user,
    menu: state.menu.modules,
  }
}

function mapDispatchToProps(){
    return {
      login,
      logout,
      resetCart,
      setMenu,
      removeMenu,
      setConfig,
      removeConfig,
      setOwnerships,
      cleanOwenerships,
      setHousing,
      removeHousing
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(MainContainer);
