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

const PersonalEnterpriseFormPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [enterprises, setEnterprises] = useState([])
  const [charges, setCharges] = useState([])
  const [data, setData] = useState({
    name:'',
    rut: '',
    last_names: '',
    address: '',
    id_enterprise: '',
    id_charge: '',
    email: '',
    phone_1: '',
    phone_2: '',
  })

  const inputRef = useRef(null)
  useEffect(() => {
    fetchData()
    inputRef.current.focus()
  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'enterprise'),
      axios.get(API_URL+'master_charges'),
    ]

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'personal_enterprise/'+props.match.params.id)
      )
    }

    Promise.all(promises).then(result => {

      setEnterprises(result[0].data)
      setCharges(result[1].data)

      if(result[2]){

        setData({
          name: result[2].data.name,
          rut: result[2].data.rut,
          email: result[2].data.email,
          last_names: result[2].data.last_names,
          phone_1: result[2].data.phone_1,
          phone_2: result[2].data.phone_2,
          address: result[2].data.address,
          id_charge: result[2].data.id_charge,
          id_enterprise: result[2].data.id_enterprise,
          id: result[2].data.id
        })

      }

    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })

  }

  const onChange = e => {
    if(e.target.name === 'rut'){
      let val = e.target.value
      val = val ? val.split('-').join('') : val
      val = val ? val.substring(0,val.length -1) +'-'+val.substring(val.length -1) : val
      setData({...data, [e.target.name]: val})
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
      axios.put(API_URL+'personal_enterprise/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'personal_enterprise',objectPost).then(result => {
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
    props.history.replace('/masters/personal')
  }

  const clearForm = () => {
    setData({
      name:'',
      rut: '',
      email: '',
      phone_1: '',
      phone_2: '',
      address: '',
      id_charge: '',
      id_enterprise: '',
      last_names: ''
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
                {...props.inputLastNames}
                value={data.last_names}
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
              <InputField
                {...props.inputEnterprise}
                value={data.id_enterprise}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {enterprises.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputCharge}
                value={data.id_charge}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {charges.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
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

PersonalEnterpriseFormPage.defaultProps = {
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
  inputLastNames: {
    type: 'text',
    required: true,
    name: 'last_names',
    label : 'Apelidos',
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
    required: false,
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
  inputCharge: {
    type: 'select',
    required: true,
    name: 'id_charge',
    label : 'Cargo',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputEnterprise: {
    type: 'select',
    required: true,
    name: 'id_enterprise',
    label : 'Empresa',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default PersonalEnterpriseFormPage
