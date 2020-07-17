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

const ConfigPreDelivery = (props) => {

  const [data,setData] = useState({
    confirmation_recipient: '',
    modify_recipient: false,
    max_days_close: ''
  })

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_pre_delivery').then(result => {
      if(result.data){
        setData({
          confirmation_recipient: result.data.confirmation_recipient,
          modify_recipient: result.data.modify_recipient,
          max_days_close: result.data.max_days_close,
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
      axios.put(API_URL+'master_config_pre_delivery/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'master_config_pre_delivery',objectPost).then(result => {
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
    if(e.target.name === "modify_recipient"){
      setData({...data, [e.target.name] : e.target.checked})
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <br/><br/>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <InputField
              {...props.inputConfirmationRecipient}
              value={data.confirmation_recipient}
              handleChange={onChange}
            />
          <Form.Group className="col-md-5 col-sm-5 col-lg-5 col-12">
            <Form.Label style={{ fontWeight: 'bold'}}>Modificar Destinatarios::</Form.Label>
            <label>
              (Si se desea modificar/agregar
                destinatarios antes de
                enviar el Aviso de Confimación.)&nbsp;&nbsp;
              <input
                type="checkbox"
                name="modify_recipient"
                checked={data.modify_recipient ? true : false}
                value={data.modify_recipient}
                onChange={onChange}
              />
            </label>
          </Form.Group>
          </Row>
          <Row>
            <InputField
              {...props.inputMaxDaysClose}
              value={data.max_days_close}
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

ConfigPreDelivery.defaultProps = {
  inputConfirmationRecipient: {
    type: 'text',
    required: true,
    name: 'confirmation_recipient',
    label : 'Aviso de Confirmación (correos separados por ";")',
    cols:"col-sm-7 col-md-7 col-lg-7 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputMaxDaysClose: {
    type: 'number',
    required: true,
    name: 'max_days_close',
    label : 'Días Máximo de Cierre (Cantidad de días en cerrar una Pre-Entrega.)',
    cols:"col-sm-6 col-md-6 col-lg-6 col-6",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigPreDelivery
