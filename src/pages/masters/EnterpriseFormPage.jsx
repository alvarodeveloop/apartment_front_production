import React, { useState , useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify';

const EnterpriseFormPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState({
    name:'',
    rut: '',
    spin: '',
    email: '',
    phone_1: '',
    phone_2: '',
    address: '',
    is_active: true
  })
  const inputRef = useRef(null)
  useEffect(() => {
    fetchData()
    inputRef.current.focus()
  },[])

  const fetchData = () => {
    let promises = []
    if(props.match.params.id){
      axios.get(API_URL+'enterprise/'+props.match.params.id).then(result => {

        setData({
          name: result.data.name,
          rut: result.data.rut,
          email: result.data.email,
          spin: result.data.spin,
          phone_1: result.data.phone_1,
          phone_2: result.data.phone_2,
          address: result.data.address,
          is_active: result.data.is_active,
          id: result.data.id
        })

      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }

  }

  const onChange = e => {
    if(e.target.name === 'is_active'){
      setData({...data, [e.target.name]: e.target.checked})
    }else{
      setData({...data, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = e => {

    const form = e.currentTarget;

    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},data)

    if(objectPost.id){
      axios.put(API_URL+'enterprise/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')
        gotBackToTable()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'enterprise',objectPost).then(result => {
        toast.success('Registro Creado')
        clearForm()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }

  }

  const gotBackToTable = () => {
    props.history.replace('/masters/enterprise')
  }

  const clearForm = () => {
    setData({
      name:'',
      rut: '',
      email: '',
      phone_1: '',
      phone_2: '',
      address: '',
      spin: '',
      is_active: true,
    })
    setValidated(false)
    inputRef.current.focus()
  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                {...props.inputRut}
                value={data.rut}
                handleChange={onChange}
                ref={inputRef}
              />
              <InputField
                {...props.inputName}
                value={data.name}
                handleChange={onChange}
              />
              <InputField
                {...props.inputSpin}
                value={data.spin}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputAddress}
                value={data.address}
                handleChange={onChange}
              />
              <InputField
                {...props.inputEmail}
                value={data.email}
                handleChange={onChange}
              />
              <InputField
                {...props.inputPhone}
                value={data.phone_1}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputPhone2}
                value={data.phone_2}
                handleChange={onChange}
              />
              <Form.Group className="col-md-6 col-sm-6 col-lg-6 col-6">
                <Form.Label style={{fontWeight: 'bold'}}>Empresa Activa?</Form.Label>
                <br/>
                <input type="checkbox" name="is_active" checked={data.is_active} onChange={onChange} value={data.is_active} />
              </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="primary" block={true}>Guardar</Button>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="danger" block={true} onClick={gotBackToTable}>Volver</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

EnterpriseFormPage.defaultProps = {
  inputRut: {
    type: 'text',
    required: true,
    name: 'rut',
    label : 'Rut',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputSpin: {
    type: 'text',
    required: false,
    name: 'spin',
    label : 'Giro',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Nombre',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputAddress: {
    type: 'textarea',
    required: true,
    name: 'address',
    label : 'Dirección',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputEmail: {
    type: 'email',
    required: true,
    name: 'email',
    label : 'Email',
    messageErrors: [
      'Requerido*,',' Formato tipo Email*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPhone: {
    type: 'number',
    required: false,
    name: 'phone_1',
    label : 'Teléfono Principal',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPhone2: {
    type: 'number',
    required: false,
    name: 'phone_2',
    label : 'Telefono Secundario',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default EnterpriseFormPage
