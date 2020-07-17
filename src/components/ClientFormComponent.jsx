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

const ClientFormComponent = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState({
    name:'',
    last_names: '',
    rut: '',
    email: '',
    id_city:'',
    id_country: '',
    poblation: '',
    phone_1: '',
    phone_2: '',
    address: ''
  })
  const [countrys,setCountrys] = useState([])
  const [citys,setCitys] = useState([])
  const inputRef = useRef(null)
  useEffect(() => {
    fetchData()
    inputRef.current.focus()
  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'master_countrys')
    ]
    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'client/'+props.match.params.id)
      )
    }

    Promise.all(promises).then(async result => {
      setCountrys(result[0].data)
      if(result[1]){
        setData({
          name: result[1].data.name,
          last_names: result[1].data.last_names,
          rut: result[1].data.rut,
          email: result[1].data.email,
          id_city: result[1].data.id_city,
          id_country: result[1].data.id_country,
          poblation: result[1].data.poblation,
          phone_1: result[1].data.phone_1,
          phone_2: result[1].data.phone_2,
          address: result[1].data.address,
          id: result[1].data.id
        })

        setCitys(propCity => {
          return result[0].data.find(v => v.id == result[1].data.id_country).cities
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
    e.persist()

    if(e.target.name === "id_country"){
      setCitys(propCitys => {
        return countrys.find(v => v.id == e.target.value).cities
      })
      setData({...data, id_country: e.target.value, id_city: ''})
    }else if(e.target.name === "rut"){
      let val = e.target.value
      val = val.split('-').join('')
      if(val){
        val = val.substring(0, val.length - 1)+'-'+val.substring(val.length - 1)
      }
      setData({...data, rut: val})
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
      axios.put(API_URL+'client/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'client',objectPost).then(result => {
        toast.success('Registro Creado')
        clearForm()
        if(props.isModal){
          gotBackToTable(true)
        }
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }

  }

  const gotBackToTable = type => {
    if(props.isModal){
      props.showTable(type)
    }else{
      props.history.replace('/masters/clients')
    }
  }

  const clearForm = () => {
    setData({
      name:'',
      last_names: '',
      rut: '',
      email: '',
      id_city:'',
      id_country: '',
      poblation: '',
      phone_1: '',
      phone_2: '',
      address: ''
    })
    setValidated(false)
    inputRef.current.focus()
  }

  return (
    <Container>
      <Row className="">
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
                {...props.inputPoblation}
                value={data.poblation}
                handleChange={onChange}
              />
              <InputField
                {...props.inputEmail}
                value={data.email}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputPhone}
                value={data.phone_1}
                handleChange={onChange}
              />
              <InputField
                {...props.inputPhone2}
                value={data.phone_2}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputCountry}
                value={data.id_country}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {countrys.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputCity}
                value={data.id_city}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {citys.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="primary" block={true}>Guardar</Button>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="danger" block={true} onClick={() => {gotBackToTable(false) }}>Volver</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

ClientFormComponent.propTypes = {
  isModal : PropTypes.bool.isRequired,
  showTable: PropTypes.func.isRequired
}

ClientFormComponent.defaultProps = {
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
  inputLastNames: {
    type: 'text',
    required: true,
    name: 'last_names',
    label : 'Apellidos',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPoblation: {
    type: 'text',
    required: false,
    name: 'poblation',
    label : 'Población',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputAddress: {
    type: 'textarea',
    required: false,
    name: 'address',
    label : 'Dirección',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputCountry: {
    type: 'select',
    required: true,
    name: 'id_country',
    label : 'País',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputCity: {
    type: 'select',
    required: true,
    name: 'id_city',
    label : 'Ciudad',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
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
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputPhone2: {
    type: 'number',
    required: false,
    name: 'phone_2',
    label : 'Telefono Secundario',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default ClientFormComponent
