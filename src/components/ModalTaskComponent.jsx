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
import { toast } from 'react-toastify'
import { API_URL } from 'utils/constants'
import axios from 'axios'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'

const ModalTaskComponent = (props) => {

  const [data, setData] = useState({
    assigned_to: '',
    id_worker: '',
    id_task: '',
    solicitude: '',
    description: '',
    id_block_hour_final: '',
    id_block_hour_initial: '',
    initial_date: '',
    final_date: '',
  })
  const [validated, setValidated] = useState(false)
  const [tasks,setTasks] = useState([])
  const [blocks,setBlocks] = useState([])
  const [personals,setPersonals] = useState([])
  const [contractors,setContractors] = useState([])

  useEffect(() => {
    fetchData()
  },[])

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
      toast.error('Debe elegir a que tipo de Invididuo se le asignará la tarea')
      return
    }

    props.submit(objectPost).then(result => {
      toast.success('Tarea Agregada')
      clearForm()
      props.onHide()
    }).catch(err => {
      toast.error(err)
    })
  }

  const clearForm = () => {
    setData({
      assigned_to: '',
      id_worker: '',
      id_task: '',
      solicitude: '',
      description: '',
      id_block_hour_final: '',
      id_block_hour_initial: '',
      initial_date: '',
      final_date: '',
    })
    setContractors([])
    setPersonals([])
  }

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'params_service_type_task'),
      axios.get(API_URL+'get_block_hour')
    ]
    Promise.all(promises).then(result => {
      setTasks(result[0].data)
      setBlocks(result[1].data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const getWorkers = type => {
    let url = type ? API_URL+'personal_enterprise' : API_URL+'master_contractor'
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
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
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
           Agrega Nueva Tarea <FaTasks />
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
          <Row>
            <InputField
              type="select"
              required={true}
              name="id_task"
              value={data.id_task}
              handleChange={onChange}
              label="Tarea"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-4 col-sm-4 col-lg-4'
            >
              <option value=''>--Seleccione--</option>
              {tasks.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputField>
            <InputField
              type="text"
              required={true}
              name="solicitude"
              value={data.solicitude}
              handleChange={onChange}
              label="Solicitud de Material:"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-4 col-sm-4 col-lg-4'
            />
            <InputField
              type="textarea"
              required={true}
              name="description"
              value={data.description}
              handleChange={onChange}
              label="Descripción"
              rows={3}
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-4 col-sm-4 col-lg-4'
            />
          </Row>
          <Row>
            <InputField
              type="date"
              required={true}
              name="initial_date"
              value={data.initial_date}
              handleChange={onChange}
              label="Fecha Inicial"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-3 col-sm-3 col-lg-3'
            />
            <InputField
              type="select"
              required={true}
              name="id_block_hour_initial"
              value={data.id_block_hour_initial}
              handleChange={onChange}
              label="Bloque"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-3 col-sm-3 col-lg-3'
            >
              <option value=''>--Seleccione--</option>
              {blocks.map((v,i) => (
                <option value={v.id} key={i}>{v.block}</option>
              ))}
            </InputField>
            <InputField
              type="date"
              required={true}
              name="final_date"
              value={data.final_date}
              handleChange={onChange}
              label="Fecha Final"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-3 col-sm-3 col-lg-3'
            />
            <InputField
              type="select"
              required={true}
              name="id_block_hour_final"
              value={data.id_block_hour_final}
              handleChange={onChange}
              label="Bloque"
              messageErrors={[
                'Requerido*'
              ]}
              cols='col-md-3 col-sm-3 col-lg-3'
            >
              <option value=''>--Seleccione--</option>
                {blocks.map((v,i) => (
                  <option value={v.id} key={i}>{v.block}</option>
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

ModalTaskComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default ModalTaskComponent
