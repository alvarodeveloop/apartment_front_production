import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
} from 'react-bootstrap'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify';
import InputField from 'components/input/InputComponent'
import axios from 'axios'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import { following_columns_failure } from 'utils/columns/followingColumns'
import ModalFollowingTaskComponent from './ModalFollowingTaskComponent'
import FileSaver from 'file-saver'

const ManagementSolicitudeFailureFormComponent = (props) => {

  const [data,setData] = useState({
    id_tipology_failure: '',
    id_point_failure: '',
    id_reason_failure: '',
    id_status: '',
    material_cost: '',
    workforce_cost: '',
    third_party_cost: '',
    filename:'',
    file:'',
    date_close:'',
    id_reason_close:'',
    detail_close: ''
  })

  const [validated,setValidated] = useState(false)
  const [pointFailures, setPointFailures] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    let objectFailure = Object.assign({},props.failure)
    setData({
      id_tipology_failure: objectFailure.id_tipology_failure,
      id_point_failure: objectFailure.id_point_failure,
      id_reason_failure: objectFailure.id_reason_failure,
      id_status: objectFailure.id_status,
      material_cost: objectFailure.material_cost,
      workforce_cost: objectFailure.workforce_cost,
      third_party_cost: objectFailure.third_party_cost,
      filename: objectFailure.filename,
      file:'',
      date_close: objectFailure.date_close ? moment(objectFailure.date_close).format('YYYY-MM-DD') : moment().tz('America/Santiago').format('YYYY-MM-DD'),
      id_reason_close: objectFailure.id_reason_close,
      detail_close: objectFailure.detail_close
    })

    if(props.failure.tipology){
      setPointFailures(props.failure.tipology.point_failures)
    }

  },[props.failure])

  const handleSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let formData = new FormData()
    Object.keys(data).forEach((v, i) => {
      formData.append(v,data[v])
    });
    let route = props.area ? API_URL+'area_failure_ss/' : API_URL+'ownership_failure_ss/'
    axios.put(route+props.failure.id,formData).then(result => {
      toast.success('Falla Modificada')
      props.fetchData()
      clearForm()
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange = e => {
    e.persist()
    if(e.target.name === "id_tipology_failure"){
      getPointFailures(e.target.value)
      setData({ ...data, [e.target.name] : e.target.value, id_point_failure: ''})
    }else{
      if(e.target.name === "id_status"){
        if(e.target.value != 5){
          setData({ ...data, [e.target.name] : e.target.value, id_reason_close: '', detail_close: '', date_close: '' })
        }else{
          setData({ ...data, [e.target.name] : e.target.value})
        }
      }else{
        setData({ ...data, [e.target.name] : e.target.value})
      }
    }
  }

  const getPointFailures = id_tipology => {
    axios.get(API_URL+'params_manage_problems_point_failures_by_tipology/'+id_tipology).then(result => {
      setPointFailures(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const openModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleChangeFile = e => {
    setData({ ...data, file: e.target.files[0], filename:  e.target.files[0].name })
  }

  const openFileInput = () => {
    document.getElementById("file_input"+props.failure.id).click()
  }

  const clearForm = () => {
    setData({...data, file: ''})
    document.getElementById('file_input'+props.failure.id).value = ''
    document.getElementById('file_input'+props.failure.id).src = ''
    setValidated(false)
  }

  const dowloadFile = () => {
    axios.get(API_URL+'ownership_ss_file/'+props.failure.filename,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,props.failure.filename)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const handleSubmitFollowing = dataFollowing => {
    return new Promise((resolved,rejected) => {
      dataFollowing.id_ownership_ss = props.failure.id_ownership_ss
      dataFollowing.id_failure_ownership_ss = props.failure.id
      axios.post(API_URL+'ownership_ss_following',dataFollowing).then(result => {
        props.fetchData()
        resolved({})
      }).catch(err => {
        if(err.response){
          rejected(err.response.data.message)
        }else{
          rejected('Error,contacte con soporte')
        }
      })
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Row className="justify-content-center">
            <Col sm={5} md={5} lg={5}>
              <Button variant="link" size="sm" type="button" block={true} onClick={openModal}>Agregar Seguimiento</Button>
            </Col>
          </Row>
          <br/>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row>
              <InputField
                type="select"
                required={true}
                name="id_tipology_failure"
                id={"id_tipology_failure"+props.failure.id}
                value={data.id_tipology_failure}
                label="Tipologia de Falla:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-3 col-sm-3 col-lg-3"
                >
                <option value="">--Seleccione--</option>
                {props.typologys.map((v,i) => (
                  <option key={i} value={v.id}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                type="select"
                required={true}
                name="id_point_failure"
                id={"id_point_failure"+props.failure.id}
                value={data.id_point_failure}
                label="Falla Puntual:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-3 col-sm-3 col-lg-3"
                >
                <option value="">--Seleccione--</option>
                {pointFailures.map((v,i) => (
                  <option key={i} value={v.id}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                type="select"
                required={true}
                name="id_reason_failure"
                id={"id_reason_failure"+props.failure.id}
                value={data.id_reason_failure}
                label="Motivo de Falla:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-3 col-sm-3 col-lg-3"
                >
                <option value="">--Seleccione--</option>
                  {props.reasonFailure.map((v,i) => (
                    <option key={i} value={v.id}>{v.name}</option>
                  ))}
              </InputField>
              <InputField
                type="select"
                required={true}
                name="id_status"
                id={"id_status"+props.failure.id}
                value={data.id_status}
                label="Estado:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-3 col-sm-3 col-lg-3"
                >
                <option value="">--Seleccione--</option>
                {props.statusFailure.map((v,i) => (
                  <option key={i} value={v.id}>{v.status}</option>
                ))}
              </InputField>
            </Row>
            {
              data.id_status == 5 ? (
                <Row>
                  <InputField
                    type="date"
                    required={true}
                    name="date_close"
                    id={"date_close"+props.failure.id}
                    value={data.date_close}
                    label="Fecha de Cierre:"
                    handleChange={onChange}
                    messageErrors={[
                      'Requerido*'
                    ]}
                    cols="col-md-4 col-sm-4 col-lg-4"
                  />
                  <InputField
                    type="select"
                    required={true}
                    name="id_reason_close"
                    id={"id_reason_close"+props.failure.id}
                    value={data.id_reason_close}
                    label="Motivo de Cierre:"
                    handleChange={onChange}
                    messageErrors={[
                      'Requerido*'
                    ]}
                    cols="col-md-4 col-sm-4 col-lg-4"
                  >
                    <option value="">--Seleccione--</option>
                    {props.reasonCloses.map((v,i) => (
                      <option value={v.id} key={i}>{v.name}</option>
                    ))}
                  </InputField>
                  <InputField
                    type="textarea"
                    required={true}
                    name="detail_close"
                    id={"detail_close"+props.failure.id}
                    value={data.detail_close}
                    label="Ingrese detalle/explicación:"
                    handleChange={onChange}
                    messageErrors={[
                      'Requerido*'
                    ]}
                    cols="col-md-4 col-sm-4 col-lg-4"
                  />
                </Row>
              ) : ''
            }
            <Row>
              <InputField
                type="number"
                required={true}
                name="material_cost"
                id={"material_cost"+props.failure.id}
                value={data.material_cost}
                label="Valor de Materiales:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-4 col-sm-4 col-lg-4"
              />
              <InputField
                type="number"
                required={true}
                name="workforce_cost"
                id={"workforce_cost"+props.failure.id}
                value={data.workforce_cost}
                label="Valor Mano de Obra:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-4 col-sm-4 col-lg-4"
              />
              <InputField
                type="number"
                required={true}
                name="third_party_cost"
                id={"third_party_cost"+props.failure.id}
                value={data.third_party_cost}
                label="Valor de Terceros:"
                handleChange={onChange}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-md-4 col-sm-4 col-lg-4"
              />
            </Row>
            <Row className="">
              <Col sm={2} md={2} lg={2}>
                <Button variant="link" type="button" size="sm" onClick={dowloadFile}>{data.filename ? data.filename : ''}</Button>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Button variant="secondary" block={true} type="button" size="sm" onClick={openFileInput}>Agregar Documento</Button>
                <br/>
                <input type="file" id={"file_input"+props.failure.id} onChange={handleChangeFile} style={{ display: 'none' }} required={false} />
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Button variant="success" size="sm" type="submit" block={true}>Guardar</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Table columns={following_columns_failure} data={props.failure.following_failure} letrasChicas={true}/>
        </Col>
      </Row>
      <ModalFollowingTaskComponent
        show={isOpenModal}
        onHide={openModal}
        submit={handleSubmitFollowing}
        title="Agregar Nuevo Seguimiento a la Falla"
      />
    </Container>
  )
}

ManagementSolicitudeFailureFormComponent.propTypes = {
  failure: PropTypes.object.isRequired,
  statusFailure: PropTypes.array.isRequired,
  reasonFailure: PropTypes.array.isRequired,
  typologys: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  reasonCloses: PropTypes.array.isRequired,
  area: PropTypes.bool,
}

export default ManagementSolicitudeFailureFormComponent
