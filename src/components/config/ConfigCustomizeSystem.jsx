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
import {
  FaTrash
} from 'react-icons/fa'

import InputField from 'components/input/InputComponent'
import { API_URL } from '../../utils/constants'
import { toast } from 'react-toastify';
import axios from 'axios'

const ConfigCustomizeSystem = (props) => {

  const [data,setData] = useState({
    route_home_login: '',
    logo: '',
    logo_pdf: '',
  })
  const [logoFile, setLogoFile] = useState(null)
  const [logoPdfFile, setLogoPdfFile] = useState(null)
  const [imgLogoShow, setImgLogoShow] = useState(
    <Image src={  require('../../assets/img/empty_logo.jpg') }
      id="img_show" style={{ width: '100px' }} roundedCircle />
  )
  const [imgLogoPdfShow, setImgLogoPdfShow] = useState(
    <Image src={  require('../../assets/img/empty_logo.jpg') }
      id="img_show" style={{ width: '100px' }} roundedCircle />
  )
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const cleanLogo = type => {
    if(type === 'logo'){
      setImgLogoShow(
        <Image src={  require('../../assets/img/empty_logo.jpg') }
          id="img_show" style={{ width: '100px' }} roundedCircle />
      )
      document.getElementById('logo').value = ''
      document.getElementById('logo').src = ''
      setLogoFile(null)
    }else{
      setImgLogoPdfShow(
        <Image src={  require('../../assets/img/empty_logo.jpg') }
          id="img_show" style={{ width: '100px' }} roundedCircle />
      )
      document.getElementById('logo_pdf').value = ''
      document.getElementById('logo_pdf').src = ''
      setLogoPdfFile(null)
    }

  }

  const fetchData = () => {
    axios.get(API_URL+'master_config_customize_system').then(result => {
      if(result.data){
        setData({
          route_home_login: result.data.route_home_login,
          logo: result.data.logo,
          logo_pdf: result.data.logo_pdf,
          id: result.data.id
        })
      }
      setValidated(false)
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
      axios.put(API_URL+'master_config_customize_system/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')

        let promises = []

        if(logoFile){
          let formData = new FormData
          formData.append('logo',logoFile)
          promises.push(
            axios.put(API_URL+'master_config_customize_system_logo/'+objectPost.id,formData)
          )
        }
        if(logoPdfFile){
          let formData = new FormData
          formData.append('logo_pdf',logoPdfFile)
          promises.push(
            axios.put(API_URL+'master_config_customize_system_logo_pdf/'+objectPost.id,formData)
          )
        }

        Promise.all(promises).then(result1 => {
          cleanLogo('logo')
          cleanLogo('pdf')
          fetchData()
        }).catch(err => {
          if(err.response){
            toast.error(err.response.data.message)
          }else{
            toast.error('Error, contacte con soporte')
          }
        })

      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_customize_system',objectPost).then(result => {
        toast.success('Registro Creado')
        let promises = []

        if(logoFile){
          let formData = new FormData
          formData.append('logo',logoFile)
          promises.push(
            axios.put(API_URL+'master_config_customize_system_logo/'+result.data.id,formData)
          )
        }
        if(logoPdfFile){
          let formData = new FormData
          formData.append('logo_pdf',logoPdfFile)
          promises.push(
            axios.put(API_URL+'master_config_customize_system_logo_pdf/'+result.data.id,formData)
          )
        }

        Promise.all(promises).then(result1 => {
          cleanLogo('logo')
          cleanLogo('pdf')
          fetchData()
        }).catch(err => {
          if(err.response){
            toast.error(err.response.data.message)
          }else{
            toast.error('Error, contacte con soporte')
          }
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
    setData({...data, [e.target.name] : e.target.value})
  }

  const openFileInput = type => {
    if(type === 'logo'){
      document.getElementById('logo').click()
    }else{
      document.getElementById('logo_pdf').click()
    }
  }

  const readImgLogo = e => {

    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = event => {
      // The file's text will be printed here
      document.getElementById('logo').src = event.target.result

      setImgLogoShow(
        <React.Fragment>
          <Image src={ event.target.result }
            id="img_show" style={{ width: '95%' }} thumbnail />
          <Row className="justify-content-center">
            <Col sm={6} md={6} lg={6}>
              <Button className="text-center" variant="dark" onClick={() => {cleanLogo('logo')}}><FaTrash /></Button>
            </Col>
          </Row>
        </React.Fragment>
      )

      setLogoFile(file)

    };

    reader.readAsDataURL(file);
  }

  const readImgLogoPdf = e => {

    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = event => {
      // The file's text will be printed here
      document.getElementById('logo_pdf').src = event.target.result

      setImgLogoPdfShow(
        <React.Fragment>
          <Image src={ event.target.result }
            id="img_show" style={{ width: '95%' }} thumbnail />
          <Row className="justify-content-center">
            <Col sm={6} md={6} lg={6}>
              <Button className="text-center" variant="dark" onClick={() => {cleanLogo('pdf')}}><FaTrash /></Button>
            </Col>
          </Row>
        </React.Fragment>
      )

      setLogoPdfFile(file)

    };

    reader.readAsDataURL(file);
  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <br/><br/>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <InputField
              {...props.inputUrl}
              value={data.route_home_login}
              handleChange={onChange}
            />
            <Form.Group className="col-md-6 col-sm-6 col-lg-6 col-12">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <Form.Label style={{ fontWeight: 'bold'}}>Logo de la Empresa</Form.Label>
                  <br/>
                  -Máximo 320px de Ancho por 100px de Alto
                  <br/>
                  - Tamaño máximo 1MB
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <Button variant="secondary" size="sm" block={true} onClick={() => { openFileInput('logo') } }>Escoger Imagen</Button>
                  {data.logo ? (
                    <Row className="justify-content-center">
                      <Col sm={6} md={6} lg={6} xs={12}>
                        <br/>
                        <a href={API_URL+'assets/logo/'+data.logo} target="_blank">
                          <Image src={API_URL+'assets/logo/'+data.logo} width="100%" />
                        </a>
                      </Col>
                    </Row>
                  ) : (
                    <Row className="justify-content-center">
                      <Col sm={6} md={6} lg={6}>
                        <br/>
                        {imgLogoShow}
                      </Col>
                    </Row>
                  )}
                  <input type="file" id="logo" name="logo" onChange={readImgLogo} style={{ display: 'none'}} />
                </Col>
              </Row>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="col-md-6 col-sm-6 col-lg-6 col-12">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <Form.Label style={{ fontWeight: 'bold'}}>Logo de Informes Pdf</Form.Label>
                    <br/>
                    - Máximo 180px de Ancho por 50px de Alto
                    <br/>
                    - Tamaño máximo 1MB
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <Button variant="secondary" size="sm" block={true} onClick={() => { openFileInput('pdf')} }>Escoger Imagen</Button>
                  {data.logo_pdf ? (
                    <Row className="justify-content-center">
                      <Col sm={6} md={6} lg={6} xs={12}>
                        <br/>
                        <a href={API_URL+'assets/pdf_signature/'+data.logo_pdf} target="_blank">
                          <Image src={API_URL+'assets/pdf_signature/'+data.logo_pdf} width="100%" />
                        </a>
                      </Col>
                    </Row>
                  ) : (
                    <Row className="justify-content-center">
                      <Col sm={6} md={6} lg={6}>
                        <br/>
                        {imgLogoPdfShow}
                      </Col>
                    </Row>
                  )}
                  <input type="file" id="logo_pdf" name="logo_pdf" onChange={readImgLogoPdf} style={{ display: 'none'}} />
                </Col>
              </Row>
            </Form.Group>
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

ConfigCustomizeSystem.defaultProps = {
  inputUrl: {
    type: 'text',
    required: false,
    name: 'route_home_login',
    label : 'Ruta Home en Login (URL a la que nos redireccionara el sistema al hacer click en el botón Home)',
    cols:"col-sm-6 col-md-6 col-lg-6 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigCustomizeSystem
