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

const ConfigServerMail = (props) => {

  const [data,setData] = useState({
    host: '',
    port: '',
    auth: true,
    type_security: '',
    username: '',
    user_email: '',
    user_password: ''
  })

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_server_mail').then(result => {
      if(result.data){
        console.log(result.data,'aqui menor');
        setData({
          host: result.data.host,
          port: result.data.port,
          auth: result.data.auth,
          type_security: result.data.type_security,
          username: result.data.username,
          user_email: result.data.user_email,
          user_password: result.data.user_password,
          id: result.data.id
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
      axios.put(API_URL+'master_config_server_mail/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')
        fetchData()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_server_mail',objectPost).then(result => {
        toast.success('Registro Creado')
        fetchData()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }
  }

  const onChange = e => {
    if(e.target.name === "auth"){
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
              {...props.inputHost}
              value={data.host}
              handleChange={onChange}
            />
            <InputField
              {...props.inputPort}
              value={data.port}
              handleChange={onChange}
            />
            <InputField
              {...props.inputTypeSecurity}
              value={data.type_security}
              handleChange={onChange}
            />
          </Row>
          <Row>
            <InputField
              {...props.inputUsername}
              value={data.username}
              handleChange={onChange}
            />
            <InputField
              {...props.inputUserEmail}
              value={data.user_email}
              handleChange={onChange}
            />
            <InputField
              {...props.inputUserPassword}
              value={data.user_password}
              handleChange={onChange}
            />
          </Row>
          <Row>
            <Form.Group className="col-md-4 col-sm-4 col-lg-4 col-12">
              <Form.Label style={{ fontWeight: 'bold'}}>Req. Auth:</Form.Label>
              <br/>
                <input
                  type="checkbox"
                  name="auth"
                  checked={data.auth ? true : false}
                  value={data.auth}
                  onChange={onChange}
                />
            </Form.Group>
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

ConfigServerMail.defaultProps = {
  inputHost: {
    type: 'text',
    required: true,
    name: 'host',
    label : 'Nombre Host',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputPort: {
    type: 'number',
    required: true,
    name: 'port',
    label : 'Puerto',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputTypeSecurity: {
    type: 'text',
    required: true,
    name: 'type_security',
    label : 'Tipo Seguridad',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputUsername: {
    type: 'text',
    required: true,
    name: 'username',
    label : 'Nombre de Usuario',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },
  inputUserEmail: {
    type: 'email',
    required: true,
    name: 'user_email',
    label : 'email de usuario',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*, ','Formato Email*'
    ],
  },
  inputUserPassword: {
    type: 'password',
    required: true,
    name: 'user_password',
    label : 'Contraseña de Usuario',
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",
    messageErrors: [
      'Requerido*'
    ],
  },

}

export default ConfigServerMail
