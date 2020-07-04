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

const ConfigHousingComplexes = (props) => {

  const [data,setData] = useState({
    enclosure_mode: '',
  })

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_housing_complexe').then(result => {
      if(result.data){
        setData({
          enclosure_mode: result.data.enclosure_mode,
          id: result.data.id
        })
      }
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

    if(objectPost.id){
      axios.put(API_URL+'master_config_housing_complexe/'+objectPost.id,objectPost).then(result => {
        NotificationManager.success('Registro Modificado')
        fetchData()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          console.log(err);
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_config_housing_complexe',objectPost).then(result => {
        NotificationManager.success('Registro Creado')
        fetchData()
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
    setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <br/><br/>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <InputField
              {...props.inputEnclosureMode}
              value={data.enclosure_mode}
              handleChange={onChange}
            />
            <Col sm={5} md={5} lg={5}>
              <br/>
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

ConfigHousingComplexes.defaultProps = {
  inputEnclosureMode: {
    type: 'text',
    required: true,
    name: 'enclosure_mode',
    label : 'Modalidad de Recintos:',
    cols:"col-sm-7 col-md-7 col-lg-7 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigHousingComplexes
