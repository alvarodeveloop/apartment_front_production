import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import {
  IoIosSend
} from 'react-icons/io'
import InputField from 'components/input/InputComponent'
import { API_URL } from '../../utils/constants'
import { toast } from 'react-toastify';
import axios from 'axios'

const ConfigProperyData = (props) => {

  const [data,setData] = useState({
    garanty_1: '',
    garanty_2: '',
    garanty_3: '',
  })

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_property_data').then(result => {
      if(result.data){
        setData({
          garanty_1: result.data.garanty_1,
          garanty_2: result.data.garanty_2,
          garanty_3: result.data.garanty_3,
          id: result.data.id
        })
      }
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
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
      axios.put(API_URL+'master_config_property_data/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')
        fetchData()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_property_data',objectPost).then(result => {
        toast.success('Registro Creado')
        fetchData()
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
    setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <br/><br/>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <h5>Tiempos de Garantias por Propiedades (EN AÑOS):</h5>
              <br/>
            </Col>
          </Row>
          <Row>
            <InputField
              {...props.inputGaranty1}
              value={data.garanty_1}
              handleChange={onChange}
            />
            <InputField
              {...props.inputGaranty2}
              value={data.garanty_2}
              handleChange={onChange}
            />
            <InputField
              {...props.inputGaranty3}
              value={data.garanty_3}
              handleChange={onChange}
            />
          </Row>
          <Row className="justify-content-center">
            <Col sm={6} md={6} lg={6}>
              <Button type="submit" size="sm" block={true} variant="primary">
                Guardar
                <IoIosSend />
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

ConfigProperyData.defaultProps = {
  inputGaranty1: {
    type: 'number',
    required: true,
    name: 'garanty_1',
    label : 'Garantia 1 (Inscripción Conservador)',
    cols:"col-sm-4 col-md-4 col-lg-4 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputGaranty2: {
    type: 'number',
    required: true,
    name: 'garanty_2',
    label : 'Garantia 2 (Recepción Municipal)',
    cols:"col-sm-4 col-md-4 col-lg-4 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputGaranty3: {
    type: 'number',
    required: true,
    name: 'garanty_3',
    label : 'Garantia 3 (Recepción Municipal)',
    cols:"col-sm-4 col-md-4 col-lg-4 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigProperyData
