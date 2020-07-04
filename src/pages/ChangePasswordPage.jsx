import React, { useState , useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap'
import Table from 'components/Table'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { NotificationManager } from 'react-notifications';

let unit_columns = []

const MeasurementUnitPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [dataForm, setForm] = useState({
    password_actual: '',
    password: '',
    password_repeat: ''
  })

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const clearForm = () => {
    setForm({
      password: '',
      password_repeat: '',
      password_actual : ''
    })
  }

  const onChange = e => {
    setForm({...dataForm, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},dataForm)

    axios.post(API_URL+'user_change_password',objectPost).then(result => {
      NotificationManager.success('Contraseña Cambiada')
      clearForm()
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
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                ref={inputRef}
                {...props.inputPasswordActual}
                value={dataForm.password_actual}
                handleChange={onChange}
              />
              <InputField
                {...props.inputPassword}
                value={dataForm.password}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputPasswordRepeat}
                value={dataForm.password_repeat}
                handleChange={onChange}
              />
              <Col sm={6} md={6} lg={6}>
                <br/>
                <Button size="sm" type="submit" variant="primary" block={true}>Guardar Datos</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

MeasurementUnitPage.defaultProps = {
  inputPasswordActual: {
    type: 'password',
    required: true,
    name: 'password_actual',
    label : 'Contraseña Actual',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputPassword: {
    type: 'password',
    required: true,
    name: 'password',
    label : 'Contraseña Nueva',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputPasswordRepeat: {
    type: 'password',
    required: true,
    name: 'password_repeat',
    label : 'Repita Contraseña',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default MeasurementUnitPage
