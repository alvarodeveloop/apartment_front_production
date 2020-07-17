
//Página de ss en el profile de propiedades
import React, { useMemo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal
} from 'react-bootstrap'
import {
  FaRegCheckCircle,
  FaSave
} from 'react-icons/fa'
import Table from 'components/Table'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import DescriptionOwnershipComponent from 'components/DescriptionOwnershipComponent'
import * as moment from 'moment-timezone'
let failureColumns = []

const SolicitudeSSPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [isOpenModalFailure, setIsOpenModalFailure] = useState(false)
  const [data,setData] = useState({
    date_request: moment().format('YYYY-MM-DD'),
    contact_to: '',
    week_days: [],
    id_block_hour_from: '',
    id_block_hour_to: '',
    note: '',
    id: '',
  })

  const [data1, setData1] = useState({
    description : '',
    id_precint: '',
    id_related_failure: '',
  })

  const [blocks,setBlocks] = useState([])
  const [precints, setPrecints] = useState([])
  const [relatedFailures, setRelatedFailures] = useState([])
  const [failureData, setFailureData] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    //fetchData()
  },[props.id_ownership_selected])

  useEffect(() => {
    //inputRef.current.focus()
    removeAllFailuresByIp()
    fetchData()
  },[])

  useMemo(() => {

    failureColumns = [
      {
        Header: 'Recinto',
        accessor: props1 => [props1.precint.name]
      },
      {
        Header: 'Falla Relacionada',
        accessor: props1 => [props1.related.name]
      },
      {
        Header: 'Descripción',
        accessor: props1 => [props1.description]
      },
      {
        Header: 'Acción',
        Cell: props1 => {
          const { original } = props1.cell.row

          return(
            <Button size="sm" variant="danger" block={true} onClick={() => removeFailure(original.id)}>Remover</Button>
          )
        }
      }
    ]
  },[])

  const openModalFailure = () => {
    setIsOpenModalFailure(!isOpenModalFailure)
  }

  const removeFailure = id => {
    axios.delete(API_URL+'ownership_failure_ss/'+id).then(result => {
      getFailures()
      toast.success('Falla eliminada')
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const removeAllFailuresByIp = () => {
    axios.delete(API_URL+'ownership_failure_ss_by_ip').then(result => {
      console.log('registros borrados');
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const fetchData = () => {

    let promises = [
      axios.get(API_URL+'get_block_hour'),
      axios.get(API_URL+'master_precint'),
      axios.get(API_URL+'params_manage_problems_related_failures'),
      axios.get(API_URL+'master_config_ss'),
    ]

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'ownership_failure_ss_by_id_ownership_ss')
      )
    }

    Promise.all(promises).then(result => {
      if(result[3].data){
        setBlocks(result[0].data)
        setPrecints(result[1].data)
        setRelatedFailures(result[2].data)
        if(props.match.params.id){
          setFailureData(result[5].data)
        }
      }else{
        toast.error('Aún no se encuentra hecha la configuración de esta empresa')
        setTimeout(function () {
          props.history.replace('/dashboard')
        }, 1000);
      }

    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }
  const onChange1 = e => {
    setData1({...data1, [e.target.name] : e.target.value})
  }

  const onChange = e => {

    e.persist()
    if(e.target.name === "week_days"){
      if(e.target.checked){
        setData({...data, [e.target.name] : [...data.week_days, e.target.value]})
      }else{
        setData({...data, [e.target.name] : data.week_days.filter(v => v !== e.target.value)})
      }
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }

  }

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},data,{
      id_ownership: props.id_ownership_selected,
      id_user: props.ownership.id_user
    })

    axios.post(API_URL+'ownership_ss_by_ownership',objectPost).then(result => {
      toast.success('Registro Creado')
      //fetchData()
      clearForm()
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const clearForm = () => {
    setData({
      date_request: moment().format('YYYY-MM-DD'),
      contact_to: '',
      week_days: [],
      id_block_hour_from: '',
      id_block_hour_to: '',
      note: '',
      id: '',
    })
    setValidated(false)
  }

  const handleInputBlockHasta = () => {
      let option_array = blocks.slice(1,blocks.length)
      return option_array.map((v,i) => (
        <option key={i} value={v.id}>{v.block}</option>
      ))
  }

  const addFailure = () => {
    if(!data1.id_precint){
      toast.error('Debe Agregar un recinto')
      return false
    }

    if(!data1.id_related_failure){
      toast.error('Debe agregar una relación de falla')
      return false
    }

    if(!data1.description){
      toast.error('Debe agregar una descripción de la falla')
      return false
    }

    let objectPost = Object.assign({},data1)
    axios.post(API_URL+'ownership_failure_ss',objectPost).then(result => {
      clearForm1()
      getFailures()
      toast.success('Falla Agregada')
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const getFailures = () => {
    if(props.match.params.id){
      axios.get(API_URL+'ownership_failure_ss_by_id_ownership_ss/'+props.match.params.id).then(result => {
        setFailureData(result.data)
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })

    }else{
      axios.get(API_URL+'ownership_failure_ss_creating').then(result => {
        setFailureData(result.data)
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }
  }

  const clearForm1 = () => {
    setData1({
      description : '',
      id_precint: '',
      id_related_failure: '',
    })
  }

  const goToTable = () => {
    props.history.replace('/request/area/status_services')
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <DescriptionOwnershipComponent ownership={props.ownership} user={props.user} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <hr/>
            <Row>
              <InputField
                {...props.inputContactTo}
                value={data.contact_to}
                handleChange={onChange}
                />
            </Row>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <b><span className="asterisk_red">*</span>Días Posibles de Visita:</b>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <b><span className="asterisk_red">*</span>Horario de preferencia:</b>
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="lunes">
                  <input id="lunes" type="checkbox" value={1} checked={data.week_days.find(v => v == '1') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Lunes
                </label>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="martes">
                  <input id="martes" type="checkbox" value={2} checked={data.week_days.find(v => v == '2') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Martes
                </label>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="miercoles">
                  <input id="miercoles" type="checkbox" value={3} checked={data.week_days.find(v => v == '3') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Miercoles
                </label>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="jueves">
                  <input id="jueves" type="checkbox" value={4} checked={data.week_days.find(v => v == '4') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Jueves
                </label>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="viernes">
                  <input id="viernes" type="checkbox" value={5} checked={data.week_days.find(v => v == '5') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Viernes
                </label>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <label forHtml="sabado">
                  <input id="sabado" type="checkbox" value={6} checked={data.week_days.find(v => v == '6') ? true : false} onChange={onChange} name="week_days" />
                  &nbsp;Sabado
                </label>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Row>
                  <InputField
                    {...props.inputBlockDesde}
                    value={data.id_block_hour_from}
                    handleChange={onChange}
                    >
                    <option value=''>--Seleccione--</option>
                    {blocks.map((v,i) => (
                      <option value={v.id} key={i}>{v.block}</option>
                    ))}
                  </InputField>
                  <InputField
                    {...props.inputBlockHasta}
                    value={data.id_block_hour_to}
                    handleChange={onChange}
                    >
                    <option value=''>--Seleccione--</option>
                    {handleInputBlockHasta()}
                  </InputField>
                </Row>
              </Col>
              <InputField
                {...props.inputNote}
                value={data.note}
                handleChange={onChange}
              />
            </Row>
            <hr/>
            <h5 className="title_principal">Ingreso de Fallas</h5>
            <br/>
            <Row>
              <InputField
                {...props.inputPrecint}
                value={data1.id_precint}
                handleChange={onChange1}
              >
                <option value="">--Seleccione--</option>
                {precints.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputRelatedFail}
                value={data1.id_related_failure}
                handleChange={onChange1}
              >
                <option value="">--Seleccione--</option>
                {relatedFailures.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <InputField
                {...props.inputDescriptionFalil}
                value={data1.description}
                handleChange={onChange1}
                />
              <Col sm={10} md={10} lg={10}>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Button variant="secondary" block={true} type="button" size="sm" onClick={addFailure}>Agregar <FaRegCheckCircle /></Button>
              </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
              <Col sm={3} md={3} lg={3}>
                <Button size="sm" variant="primary" block={true} type="submit">Guardar <FaSave /></Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button size="sm" variant="danger" block={true} type="button" onClick={goToTable}>Cancelar</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button size="sm" variant="secondary" block={true} type="button" onClick={openModalFailure}>Ver fallas</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      { /* ========== modal de las fallas ========================*/}

      <Modal
        show={isOpenModalFailure}
        onHide={openModalFailure}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="header_dark">
          <Modal.Title id="contained-modal-title-vcenter">
            Fallas Registradas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Table columns={failureColumns} data={failureData} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openModalFailure}>cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

SolicitudeSSPage.defaultProps = {

  inputContactTo:{
    type: 'text',
    required: false,
    name: 'contact_to',
    label : 'Contactar Con:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputBlockDesde:{
    type: 'select',
    required: true,
    name: 'id_block_hour_from',
    label : 'Desde:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputBlockHasta:{
    type: 'select',
    required: true,
    name: 'id_block_hour_to',
    label : 'Hasta:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputNotas:{
    type: 'textarea',
    required: false,
    name: 'notes',
    label : 'Notas:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },
  inputPrecint:{
    type: 'select',
    required: false,
    name: 'id_precint',
    label : 'Recinto:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputRelatedFail:{
    type: 'select',
    required: false,
    name: 'id_related_failure',
    label : 'Relacione su Falla con:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputTipologyFail:{
    type: 'select',
    required: false,
    name: 'id_tipology_failure',
    label : 'Tipología de Falla:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputPointFailure:{
    type: 'select',
    required: false,
    name: 'id_point_failure',
    label : 'Falla Puntual:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputDescriptionFalil:{
    type: 'textarea',
    required: false,
    name: 'description',
    label : 'Descripción de la Falla:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },
  inputNote:{
    type: 'textarea',
    required: false,
    name: 'note',
    label : 'Notas:',
    messageErrors: [],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },

}

function mapDispatchToProps(state){

  return {
    id_ownership_selected: state.ownership.ownership_selected,
    ownership : state.ownership.ownerships.find(v => v.id_ownership == state.ownership.ownership_selected),
    user: state.auth.user
  }
}

export default connect(mapDispatchToProps,{})(SolicitudeSSPage)
