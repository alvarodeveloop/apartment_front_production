import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import InputField from 'components/input/InputComponent'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { API_URL } from 'utils/constants'
import axios from 'axios'

const SignUpPage = (props) => {

  const [validatedForm, setValidatedForm] = useState(false)
  const [user,setUser] = useState({
    name: '',
    rut: '',
    email: '',
    password: '',
    password_repeat: '',
    id_rol: 2
  })

  useEffect(() => {

  },[])

  const onChange = e => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidatedForm(true);
      return
    }

    let userSave = Object.assign({},user)

    if(userSave.password !== userSave.password_repeat){
      NotificationManager.error('Las contraseñas no coinciden')
      return false
    }

    axios.post(API_URL+'user_free',userSave).then(result => {
      NotificationManager.success('Usuario Registrado')
      setTimeout(() => {
        props.history.replace('/')
      },1500)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })

  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Row className="">
            <Col sm={12} md={12} lg={12}>
              <h3 className="text-center">Formulario de Usuarios</h3>
              <br/>
            </Col>
          </Row>
          <Form onSubmit={onSubmit} noValidate validated={validatedForm}>
            <Row className="justify-content-center">
              <InputField
                {...props.inputName}
                handleChange={onChange}
                value={user.name}
              />
            </Row>
            <Row className="justify-content-center">
              <InputField
                {...props.inputEmail}
                handleChange={onChange}
                value={user.email}
              />
            </Row>
            <Row className="justify-content-center">
              <InputField
                {...props.inputRut}
                handleChange={onChange}
                value={user.rut}
              />
            </Row>
            <Row className="justify-content-center">
              <InputField
                {...props.inputPassword}
                handleChange={onChange}
                value={user.password}
              />
            </Row>
            <Row className="justify-content-center">
              <InputField
                {...props.inputPasswordRepeat}
                handleChange={onChange}
                value={user.password_repeat}
              />
            </Row>
            <Row className="justify-content-center">
              <Col sm={6} md={6} lg={6}>
                <Button variant="primary" block={true} type="submit">Enviar</Button>
              </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
              <Col sm={6} md={6} lg={6}>
                <Button variant="secondary" block={true} type="button" onClick={() => props.history.replace('/')}>Volver</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <NotificationContainer/>
    </Container>
  )
}

SignUpPage.propTypes = {

}

SignUpPage.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Nombre Completo',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-7 col-md-7 col-lg-7 col-xs-7"
  },
  inputEmail: {
    type: 'email',
    required: true,
    name: 'email',
    label : 'Correo',
    messageErrors: [
      'Requerido*',' Formato tipo Email*'
    ],
    cols:"col-sm-7 col-md-7 col-lg-7 col-xs-7"
  },
  inputRut: {
    type: 'text',
    required: true,
    name: 'rut',
    label : 'Rut',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-7 col-md-7 col-lg-7 col-xs-7"
  },
  inputPassword: {
    type: 'password',
    required: true,
    name: 'password',
    label : 'Contraseña',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-7 col-md-7 col-lg-7 col-xs-7"
  },
  inputPasswordRepeat: {
    type: 'password',
    required: true,
    name: 'password_repeat',
    label : 'Repita la Contraseña',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-7 col-md-7 col-lg-7 col-xs-7"
  },
}

export default SignUpPage
