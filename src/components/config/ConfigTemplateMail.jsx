import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image
} from 'react-bootstrap'
import {
  IoIosSend
} from 'react-icons/io'
import InputField from 'components/input/InputComponent'
import { API_URL } from '../../utils/constants'
import { NotificationManager } from 'react-notifications'
import axios from 'axios'

const ConfigTemplateMail = (props) => {

  const [data,setData] = useState({
    signature_text: '',
    signature_img: ''
  })
  const [fileSignature, setFileSignature] = useState(null)

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_mail_template').then(result => {
      if(result.data){
        setData({
          signature_text: result.data.signature_text,
          signature_img: result.data.signature_img,
          id: result.data.id
        })
      }
      setValidated(false)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
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
    let formData = new FormData

    formData.append('signature_text',objectPost.signature_text)
    if(fileSignature){
      formData.append('document',fileSignature)
    }

    if(objectPost.id){
      axios.put(API_URL+'master_config_mail_template/'+objectPost.id,formData).then(result => {
        NotificationManager.success('Registro Modificado')
        fetchData()
        setFileSignature(null)
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          console.log(err);
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_mail_template',formData).then(result => {
        NotificationManager.success('Registro Creado')
        fetchData()
        setFileSignature(null)
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          console.log(err);
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }
  }

  const onChange = e => {
    if(e.target.name === 'file_img'){
      setFileSignature(e.target.files[0])
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
  }

  const openFileInput = () => {
    document.getElementById('file_img').click()
  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <br/><br/>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <InputField
              {...props.inputSignatureText}
              value={data.signature_text}
              handleChange={onChange}
            />
          <Form.Group className="col-md-6 col-sm-6 col-lg-6 col-12">
            <Form.Label style={{ fontWeight: 'bold'}}>Imagen de Firma</Form.Label>
            <Button variant="secondary" size="sm" block={true} onClick={openFileInput}>Escoger Imagen</Button>
            {data.signature_img ? (
              <Row className="justify-content-center">
                <Col sm={3} md={3} lg={3} xs={12}>
                  <br/>
                  <a href={API_URL+'assets/signature_mail/'+data.signature_img} target="_blank">
                    <Image src={API_URL+'assets/signature_mail/'+data.signature_img} width="100%" img-rounded />
                  </a>
                </Col>
              </Row>
            ) : ''}
            <input type="file" id="file_img" name="file_img" onChange={onChange} style={{ display: 'none'}} />
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

ConfigTemplateMail.defaultProps = {
  inputSignatureText: {
    type: 'textarea',
    required: true,
    name: 'signature_text',
    label : 'Firma Texto (Texto que aparecerá en la Firma del Correo)',
    cols:"col-sm-6 col-md-6 col-lg-6 col-12",
    rows: '3',
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigTemplateMail
