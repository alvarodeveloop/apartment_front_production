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
import * as moment from 'moment-timezone'

const ConfigFile = (props) => {

  const [data,setData] = useState({
    date_hard_data: '',
  })

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'master_config_file').then(result => {
      if(result.data){
        setData({
          date_hard_data: moment(result.data.date_hard_data).format('YYYY-MM-DD'),
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
      axios.put(API_URL+'master_config_file/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'master_config_file',objectPost).then(result => {
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
            <InputField
              {...props.inputHardData}
              value={data.date_hard_data}
              handleChange={onChange}
            />
            <Col sm={5} md={5} lg={5}>
              <br/><br/>
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

ConfigFile.defaultProps = {
  inputHardData: {
    type: 'date',
    required: true,
    name: 'date_hard_data',
    label : `Fecha de Datos Duros: (Fecha hasta donde se consideran
      los Datos duros de los
      Conjuntos Habitacionales.)`,
    cols:"col-sm-7 col-md-7 col-lg-7 col-12",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default ConfigFile
