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
import { NotificationManager } from 'react-notifications'
import axios from 'axios'

const ConfigSSComponent = (props) => {

  const [data,setData] = useState({
    id_priority: '',
    id_time_limit_service: '',
    id_type_service: '',
    id_origin_service: '',
    valid_format_documents: '',
    size_format_documents: '',
    general_asks_email: '',
    email_to_properties: false,
    item_quantity: '',
    days_ss_open: '',
    quantity_fails_by_client: '',
    days_ss_execution: ''
  })

  const [validated, setValidated] = useState(false)
  const [priority, setPriority] = useState([])
  const [origin, setOrigin] = useState([])
  const [timeLimit, setTimeLimit] = useState([])
  const [typeService, setTypeService] = useState([])

  useEffect(() => {
    fetchData()
    fechDataCombo()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_ss').then(result => {
      if(result.data){
        setData({
          id_priority: result.data.id_priority,
          id_time_limit_service: result.data.id_time_limit_service,
          id_type_service: result.data.id_type_service,
          id_origin_service: result.data.id_origin_service,
          valid_format_documents: result.data.valid_format_documents,
          size_format_documents: result.data.size_format_documents,
          general_asks_email: result.data.general_asks_email,
          email_to_properties: result.data.email_to_properties,
          item_quantity: result.data.item_quantity,
          days_ss_open: result.data.days_ss_open,
          quantity_fails_by_client: result.data.quantity_fails_by_client,
          days_ss_execution: result.data.days_ss_execution,
          id: result.data.id
        })
      }
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err,'aqui =========');
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const fechDataCombo = () => {

    let promises = [
      axios.get(API_URL+'params_service_priority'),
      axios.get(API_URL+'params_service_origin'),
      axios.get(API_URL+'params_service_time_limit_service'),
      axios.get(API_URL+'params_service_type_service'),
    ]

    Promise.all(promises).then(result => {
      setPriority(result[0].data)
      setOrigin(result[1].data)
      setTimeLimit(result[2].data)
      setTypeService(result[3].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err,'aqui =========');
        NotificationManager.error('Error, contacte con soporte')
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
      axios.put(API_URL+'master_config_ss/'+objectPost.id,objectPost).then(result => {
        NotificationManager.success('Registro Modificado')
        fetchData()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_ss',objectPost).then(result => {
        NotificationManager.success('Registro Creado')
        fetchData()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }
  }

  const onChange = e => {
    if(e.target.name === "email_to_properties"){
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
              {...props.inputPriority}
              value={data.id_priority}
              handleChange={onChange}
            >
              <option>--Seleccione--</option>
              {priority.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputField>
            <InputField
              {...props.inputTermService}
              value={data.id_time_limit_service}
              handleChange={onChange}
            >
              <option>--Seleccione--</option>
              {timeLimit.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputField>
            <InputField
              {...props.inputTypeService}
              value={data.id_type_service}
              handleChange={onChange}
            >
              <option>--Seleccione--</option>
              {typeService.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputField>
            <InputField
              {...props.inputOrigenService}
              value={data.id_origin_service}
              handleChange={onChange}
            >
              <option>--Seleccione--</option>
              {origin.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputField>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <br/>
              <h5>Adjunto de Archivos</h5>
              <br/>
            </Col>
          </Row>
          <Row>
            <InputField
              {...props.inputValidFormat}
              value={data.valid_format_documents}
              handleChange={onChange}
            />
            <InputField
              {...props.inputSizeFormat}
              value={data.size_format_documents}
              handleChange={onChange}
            />
          <Form.Group className="col-md-4 col-sm-4 col-lg-4 col-12">
            <Form.Label style={{ fontWeight: 'bold'}}>Enviar Correo a Propietarios:</Form.Label>
            <label>
              (Envio de Correo a Propietarios
              cuando se Genere una S.S.
              por parte de Postventa)&nbsp;&nbsp;
              <input
                type="checkbox"
                name="email_to_properties"
                checked={data.email_to_properties ? true : false}
                value={data.email_to_properties}
                onChange={onChange}
              />
            </label>
          </Form.Group>
          </Row>
          <Row>
            <InputField
              {...props.inputAskEmail}
              value={data.general_asks_email}
              handleChange={onChange}
            />
            <InputField
              {...props.inputQuantityItem}
              value={data.item_quantity}
              handleChange={onChange}
            />
            <InputField
              {...props.inputDayOpenSS}
              value={data.days_ss_open}
              handleChange={onChange}
            />
          </Row>
          <Row>
            <InputField
              {...props.inputQuantityFail}
              value={data.quantity_fails_by_client}
              handleChange={onChange}
            />
            <InputField
              {...props.inputSSExecution}
              value={data.days_ss_execution}
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

ConfigSSComponent.defaultProps = {
  inputPriority: {
    type: 'select',
    required: true,
    name: 'id_priority',
    label : 'Prioridad de Servicio',
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputTermService: {
    type: 'select',
    required: true,
    name: 'id_time_limit_service',
    label : 'Plazo del Servicio',
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputTypeService: {
    type: 'select',
    required: true,
    name: 'id_type_service',
    label : 'Tipo de Servicio',
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputOrigenService: {
    type: 'select',
    required: true,
    name: 'id_origin_service',
    label : 'Origen del Servicio',
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputValidFormat: {
    type: 'text',
    required: true,
    name: 'valid_format_documents',
    label : 'Formato',
    placeholder: '(separado por comas)',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputSizeFormat: {
    type: 'number',
    required: true,
    name: 'size_format_documents',
    label : 'Tamaño',
    placeholder: '(en bytes)',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputAskEmail: {
    type: 'email',
    required: true,
    name: 'general_asks_email',
    label : 'Consultas Generales',
    placeholder: 'correo electrónico',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*, ','Formato tipo Email*'
    ],
  },
  inputQuantityItem: {
    type: 'text',
    required: true,
    name: 'item_quantity',
    label : 'Cantidad de Item',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputDayOpenSS: {
    type: 'text',
    required: true,
    name: 'days_ss_open',
    label : 'Días S.S Abiertas',
    placeholder: 'Cantidad de días que una s.s puede estar abierta',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputQuantityFail: {
    type: 'text',
    required: true,
    name: 'quantity_fails_by_client',
    label : 'Cantidad Fallas por Cliente',
    placeholder: 'Fallas permitidas por cliente al llenar una s.s',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputSSExecution: {
    type: 'text',
    required: true,
    name: 'days_ss_execution',
    label : 'Días S.S Ejecución',
    placeholder: 'Cantidad de días que una s.s puede estar abierta',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },

}

export default ConfigSSComponent
