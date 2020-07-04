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
  FaTasks
} from 'react-icons/fa'
import { NotificationManager } from 'react-notifications';
import { API_URL } from 'utils/constants'
import axios from 'axios'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'

const ModalTaskWorkerComponent = (props) => {

  const [data, setData] = useState({
    assigned_to: '',
    id_worker: '',
  })
  const [validated, setValidated] = useState(false)
  const [personals,setPersonals] = useState([])
  const [contractors,setContractors] = useState([])

  const onChange = e => {
    if(e.target.name === "assigned_to"){
      let val = e.target.value === "true" ? true : false
      getWorkers(val)
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
    if(objectPost.assigned_to === ""){
      NotificationManager.error('Debe elegir a que tipo de Invididuo se le asignará la tarea')
      return
    }

    props.submit(objectPost).then(result => {
      NotificationManager.success('Tarea Agregada')
      clearForm()
      props.onHide()
    }).catch(err => {
      NotificationManager.error(err)
    })
  }

  const clearForm = () => {
    setData({
      assigned_to: '',
      id_worker: '',
    })
    setContractors([])
    setPersonals([])
  }

  const getWorkers = type => {
    let type_number = type ? 1 : 2
    let url = API_URL+'ownership_ss_task_personal_contractor_task/'+type_number+'/'+props.task.id

    axios.get(url).then(result => {
      if(type){
        setPersonals(result.data)
        setContractors([])
      }else{
        setPersonals([])
        setContractors(result.data)
      }
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
           Agregar personal a la Tarea <FaTasks />
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
            <Col sm={7} lg={7} md={7}>
              <Row>
                <Col sm={12} lg={12} md={12}>
                  <b>Asignado A:</b>
                </Col>
              </Row>
              <Row>
                <Col sm={6} lg={6} md={6}>
                  <label>
                    <input type="radio" name="assigned_to" id="assigned_to1" value={true} onChange={onChange}/>
                    Personal de Postventa
                  </label>
                </Col>
                <Col sm={6} lg={6} md={6}>
                  <label>
                    <input type="radio" name="assigned_to" id="assigned_to2" value={false} onChange={onChange}/>
                    Contratistas
                  </label>
                </Col>
              </Row>
            </Col>
            <InputField
              type="select"
              required={true}
              name="id_worker"
              value={data.id_worker}
              handleChange={onChange}
              label="Invididuo"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-5 col-sm-5 col-lg-5'
            >
              <option value=''>--Seleccione--</option>
              {personals.map((v,i) => (
                <option value={v.id} key={i}>{v.name+' '+v.last_names}</option>
              ))}
              {contractors.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
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

ModalTaskWorkerComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

export default ModalTaskWorkerComponent
