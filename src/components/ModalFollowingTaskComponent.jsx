import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Form,
  Modal,
  Button
} from 'react-bootstrap'
import {
  FaEye
} from 'react-icons/fa'
import { NotificationManager } from 'react-notifications';
import { API_URL } from 'utils/constants'
import axios from 'axios'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'

const ModalFollowingTaskComponent = (props) => {

  const [data, setData] = useState({
    detail: '',
    id_origin: '',
    is_private: true,
  })
  const [validated, setValidated] = useState(false)
  const [origins,setOrigins] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const onChange = e => {
    if(e.target.name === "is_private"){
      let val = e.target.value === "true" ? true : false
      setData({...data,[e.target.name] : val, id_worker: ''})
    }else{
      setData({...data,[e.target.name] : e.target.value})
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

    props.submit(objectPost).then(result => {
      NotificationManager.success('Seguimiento Agregado')
      clearForm()
      props.onHide()
    }).catch(err => {
      NotificationManager.error(err)
    })
  }

  const clearForm = () => {
    setData({
      detail: '',
      id_origin: '',
      is_private: true,
    })
  }

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'params_service_origin'),
    ]
    Promise.all(promises).then(result => {
      setOrigins(result[0].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop='static'
    >
      <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white'}}>
        <Modal.Title id="contained-modal-title-vcenter">
           {props.title} <FaEye />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Row>
            <Col
              sm={{
                span: 3,
                offset: 9
              }}
              md={{
                span: 3,
                offset: 9
              }}
              lg={{
                span: 3,
                offset: 9
              }}
            >
              <p style={{ color: 'red'}}>Campos requeridos*</p>
            </Col>
          </Row>
          <Row>
            <InputField
              type="textarea"
              required={true}
              name="detail"
              value={data.detail}
              handleChange={onChange}
              label="Detalle Seguimiento"
              rows={3}
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-6 col-sm-6 col-lg-6'
            />
            <InputField
              type="select"
              required={true}
              name="id_origin"
              value={data.id_origin}
              handleChange={onChange}
              label="Origen:"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-6 col-sm-6 col-lg-6'
            >
              <option value=''>--Seleccione--</option>
              {origins.map((v,i) => (
                <option key={i} value={v.id}>{v.name}</option>
              ))}
            </InputField>
          </Row>
          <Row>
            <InputField
              type="select"
              required={true}
              name="is_private"
              value={data.is_private}
              handleChange={onChange}
              label="Privado:"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-6 col-sm-6 col-lg-6'
            >
              <option value=''>--Seleccione--</option>
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </InputField>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button size="sm" type="submit" variant="primary" block={true}>
                Agregar
              </Button>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Button size="sm" type="button" variant="danger" block={true} onClick={props.onHide}>
                Cerrar
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

ModalFollowingTaskComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ModalFollowingTaskComponent
