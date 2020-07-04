import React, { useState, useEffect, useRef } from 'react'
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
  FaBook
} from 'react-icons/fa'
import { NotificationManager } from 'react-notifications';
import { API_URL } from 'utils/constants'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'

const ModalAnulateDeliveryComponent = (props) => {

  const [data, setData] = useState({
    reason_anulate: ''
  })
  const [validated, setValidated] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if(props.show){
      inputRef.current.focus()
    }
  },[props.show])

  const onChange = e => {
    setData({...data,[e.target.name] : e.target.value})
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
      NotificationManager.success('Entrega Anulada')
      clearForm()
      props.onHide()
    }).catch(err => {
      NotificationManager.error(err)
    })
  }

  const clearForm = () => {
    setData({
      reason_anulate: ''
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
           {props.title} <FaBook />
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
            <InputFieldRef
              ref={inputRef}
              type="textarea"
              required={true}
              name="reason_anulate"
              value={data.reason_anulate}
              handleChange={onChange}
              label="Ingrese Motivo:"
              rows={3}
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-12 col-sm-12 col-lg-12'
            />
          </Row>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button size="sm" type="submit" variant="primary" block={true}>
                Aceptar
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

ModalAnulateDeliveryComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ModalAnulateDeliveryComponent
