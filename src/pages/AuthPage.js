import React, {useState, useEffect} from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import PropTypes from 'prop-types'
import {
  MdImportantDevices,
  // MdCardGiftcard,
  MdLoyalty,
} from 'react-icons/md';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'styles/pages/authPage.css'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import {
  Row,
  Col,
  Form,
  Button,
  Container
} from 'react-bootstrap'
import InputField from 'components/input/InputComponent'

import { setAuthorizationToken } from 'utils/functions'



let imgLogin = null

const AuthPage = props => {

  const [userData,setUserData] = useState({email: '',password: ''})
  const [validated, setValidated] = useState(false);
  const imgDisplay = true

  const onChange = e => {
    setUserData({...userData, [e.target.name] : e.target.value})
  }

  const goToRecovery = () => {
    props.history.replace('recovery_pass')
  }

  const goToRegisterPage = () => {
    props.history.replace('/login/register')
  }

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    axios.post(API_URL+'auth',userData).then(result => {
      const { data } = result
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('token',data.token)
      setAuthorizationToken(data.token)
      props.loginDispatch(data.user)
    }).catch(err => {
      const { response } = err
      if(response){
        NotificationManager.error(response.data.message,'Error')
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  if(imgDisplay){
    imgLogin = (
      <img src={require('../assets/img/login/login5.jpg')} className="img-login"/>
    )
  }else{
    const numItems = [2,1,5]
    const itemsCarrousel = numItems.map((v,i) => {
      return {
        src: require('../assets/img/login/login'+v+'.jpg'),
        altText: '',
        caption: 'Restaurant Chile'
      }
    })

  }

  return(
    <Container fluid={true} className="fondo">
      <Row className="justify-content-center">
        <Col md={6} lg={6} xs={6} sm={6}>
          <div className="flexContainer">
            <div className="containerBox">
              <h1 className="title-login">Login</h1>
              <Form onSubmit={onSubmit} noValidate validated={validated}>
                <Row>
                  <InputField
                    { ...props.inputEmail }
                    handleChange={onChange}
                    value={userData.email}
                    />
                  <InputField
                    { ...props.inputPassword}
                    handleChange={onChange}
                    value={userData.password}
                    />
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Button variant="info" type="submit" block={true}>Enviar</Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <br/>
                    <p className="text-center">O</p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                    <Button variant="link" onClick={goToRecovery} style={{ fontSize: '18px'}}>¿Se te olvido tu contraseña?</Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <br/>
            {
              /*
              <div className="loginFormContainer">
              <p className="text-center text-white">¿No posees cuenta?  <button className="btn btn-link" onClick={goToRegisterPage} style={{fontSize: '18px'}}>registrate</button>
              </p>
              </div>
              */
            }
          </div>
        </Col>
      </Row>
      <NotificationContainer/>
    </Container>
  )
}

AuthPage.propTypes = {
    loginDispatch: PropTypes.func.isRequired,
}

AuthPage.defaultProps = {
  inputEmail: {
    type: 'text',
    required: true,
    name: 'email',
    label : 'Usuario( Email o Rut )',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },
  inputPassword:{
    type: 'password',
    required: true,
    name: 'password',
    label : 'Contraseña',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  }
}


export default AuthPage
