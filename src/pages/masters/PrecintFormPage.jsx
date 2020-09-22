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

const PrecintFormPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [families, setFamilies] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [units, setUnits] = useState([])
  const [data, setData] = useState({
    code:'',
    name: '',
    id_family: '',
    id_brand: '',
    id_models: '',
    id_measurement_unit: '',
    additional_information: '',
  })

  const inputRef = useRef(null)
  useEffect(() => {

    fetchData()
    inputRef.current.focus()
  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'master_families'),
      axios.get(API_URL+'master_brand'),
      axios.get(API_URL+'master_models'),
      axios.get(API_URL+'master_measurement_unit')
    ]

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'master_precint/'+props.match.params.id)
      )
    }

    Promise.all(promises).then(result => {

      setFamilies(result[0].data)
      setBrands(result[1].data)
      setModels(result[2].data)
      setUnits(result[3].data)

      if(result[4]){
        setData({
          code: result[4].data.code,
          name: result[4].data.name,
          id_family: result[4].data.id_family,
          id_brand: result[4].data.id_brand,
          id_models: result[4].data.id_models,
          id_measurement_unit: result[4].data.id_measurement_unit,
          additional_information: result[4].data.additional_information,
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
    setData({...data, [e.target.name]: e.target.value})
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
      axios.put(API_URL+'master_precint/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'master_precint',objectPost).then(result => {
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
    props.history.replace('/masters/enclosure')
  }

  const clearForm = () => {
    setData({
      code:'',
      name: '',
      id_family: '',
      id_brand: '',
      id_models: '',
      id_measurement_unit: '',
      additional_information: '',
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
                {...props.inputCode}
                value={data.code}
                handleChange={onChange}
                ref={inputRef}
              />
              <InputField
                {...props.inputName}
                value={data.name}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                {...props.inputFamily}
                value={data.id_family}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {families.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputModels}
                value={data.id_models}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {models.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputBrand}
                value={data.id_brand}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {brands.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <InputField
                {...props.inputUnit}
                value={data.id_measurement_unit}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {units.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputAdditionalInformation}
                value={data.additional_information}
                handleChange={onChange}
              />
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

PrecintFormPage.defaultProps = {
  inputCode: {
    type: 'text',
    required: true,
    name: 'code',
    label : 'Código',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Nombre',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputFamily: {
    type: 'select',
    required: true,
    name: 'id_family',
    label : 'Categoria',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputModels: {
    type: 'select',
    required: false,
    name: 'id_models',
    label : 'Modelo',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputUnit: {
    type: 'select',
    required: true,
    name: 'id_measurement_unit',
    label : 'Unidad de Medida',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputBrand: {
    type: 'select',
    required: true,
    name: 'id_brand',
    label : 'Marca',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputAdditionalInformation: {
    type: 'textarea',
    required: false,
    name: 'additional_information',
    label : 'Información Adicional',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default PrecintFormPage
