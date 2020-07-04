import React, { useMemo,useRef,useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Container,
  Form,
  Button,
} from 'react-bootstrap'
import { NotificationManager } from 'react-notifications';
import 'styles/pages/authPage.css'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import { API_URL } from 'utils/constants'

const AuthRecoveryPass = (props) => {

  const [formPass,setFormPass] = useState({
    email: '',
  })
  const [validated, setValidated] = useState(false)
  const [showMessage,setShowMessage] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if(inputRef.current){
        inputRef.current.focus()
      }
    },500)
  },[])

  const goToLogin = () => {
    props.history.replace('/')
  }

  const onChange = e => {
    setFormPass({...formPass, [e.target.name] : e.target.value })
  }

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    const passObject = Object.assign({},formPass)
    setShowMessage(true)
    axios.post(API_URL+'auth_recovery_pass',passObject).then(result => {
      NotificationManager.success('Se ha enviado un correo de recuperación a su email')
      setTimeout(() => {
        goToLogin()
      },1500)
    }).catch(err => {
      const { response } = err
      setShowMessage(false)
      if(response){
        NotificationManager.error(response.data.message,'Error')
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }


  return (
    <Container fluid={true} className="fondo">
      <Row className="justify-content-center">
        <Col md={6} lg={6} xs={6} sm={6}>
          <div className="flexContainer">
            <div className="containerBox">
              <h1 className="title-login">Login</h1>
              <Form onSubmit={onSubmit} noValidate validated={validated}>
                <Row>
                  <InputFieldRef
                    { ...props.inputEmail }
                    handleChange={onChange}
                    value={formPass.email}
                    ref={inputRef}
                  />
                </Row>
                <Row className="justify-content-center">
                  <Col xs={5} sm={5} md={5} lg={5}>
                      <Button variant="info" type="submit" block={true}>Enviar</Button>
                  </Col>
                  <Col xs={5} sm={5} md={5} lg={5}>
                      <Button onClick={goToLogin} variant="secondary" type="button" block={true}>Volver al Login</Button>
                  </Col>
                </Row>
                {showMessage ? (
                  <Row>
                    <Col sm={12} md={12} lg={12} xs={12}>
                      <br/>
                      <h5 className="text-center">Enviando Correo...</h5>
                    </Col>
                  </Row>
                ) : ''}
              </Form>
            </div>
            <br/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

AuthRecoveryPass.defaultProps = {
  inputEmail: {
    type: 'email',
    required: true,
    name: 'email',
    label : 'Email de Usuario',
    messageErrors: [
      'Requerido*,',' Formato tipo Email*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },
}

export default AuthRecoveryPass
