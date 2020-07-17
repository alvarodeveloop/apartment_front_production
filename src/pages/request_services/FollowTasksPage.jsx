import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal
} from 'react-bootstrap'
import 'styles/pages/requestPropertyForm.css'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { toast } from 'react-toastify';
import axios from 'axios'
import { API_URL } from 'utils/constants'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import { following_columns_failure } from 'utils/columns/followingColumns'
let columns_table = []

const ManagementFailuresPropertyPage = (props) => {

  const [data, setData] = useState({
    id_reason_close: '',
    to: '',
    from: '',
    id_status_ss: '',
    number_ownership: '',
    number_ss: '',
    type_worker: '',
    id_worker: '',
    radio_option: '',
  })

  const [validated,setValidated] = useState(false)
  const [status, setStatus] = useState([])
  const [statusFailure,setStatusFailure] = useState([])
  const [housingComplexe,setHosingComplexe] = useState([])
  const [priorities,setPriorities] = useState([])
  const [precints,setPrecints] = useState([])
  const [tipologies,setTipologies] = useState([])
  const [pointFailures,setPointFailures] = useState([])
  const [reasonFailures,setReasonFailures] = useState([])
  const [reasonClose,setReasonClose] = useState([])
  const [failures,setFailures] = useState([])
  const [followings,setFollowings] = useState([])
  const [isOpenModal,setIsOpenModal] = useState(false)
  const [personals,setPersonals] = useState([])
  const [contractors,setContractors] = useState([])
  const [tasks,setTasks] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    
    fetchData(true)

    return () => {
      columns_table = []
    }
  },[])

  useMemo(() => {
    columns_table = [
      {
        Header: 'Nro.SS',
        accessor: props1 => [props1.ownership_ss.id]
      },
      {
        Header: 'Fecha Emisión',
        accessor: props1 => [moment(props1.ownership_ss.date_request).format('DD-MM-YYYY')]
      },
      {
        Header: 'Cliente',
        accessor: props1 => [props1.ownership_ss.client.name+' '+props1.ownership_ss.client.last_names]
      },
      {
        Header: 'Depto.',
        accessor: props1 => [props1.ownership_ss.housing.number]
      },
      {
        Header: 'Block/Mzna.',
        accessor: props1 => []
      },
      {
        Header: 'Proyecto',
        accessor: props1 => [props1.ownership_ss.housing.name]
      },
      {
        Header: 'Tipología de Falla',
        accessor: props1 => []
      },
      {
        Header: 'Recinto',
        accessor: props1 => []
      },
      {
        Header: 'Falla de Puntual',
        accessor: props1 => []
      },
      {
        Header: 'Prioridad',
        accessor: props1 => []
      },
      {
        Header: 'Usuario Crea',
        accessor: props1 => [props1.user.email]
      },
      {
        Header: 'Tarea',
        accessor: props1 => [props1.task.description]
      },
      {
        Header: 'Operadores',
        Cell: props1 => {
          return (<span></span>)
        }

      },
      {
        Header: 'Fecha Inicio',
        accessor: props1 => [moment(props1.initial_date).format('DD-MM-YYYY')+' '+props1.block_initial.block]
      },
      {
        Header: 'Fecha Termino',
        accessor: props1 => [moment(props1.final_date).format('DD-MM-YYYY')+' '+props1.block_final.block]
      },
      {
        Header: 'Fecha Cierre',
        accessor: props1 => props1.date_close ? [moment(props1.date_close).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Estado Tarea',
        accessor: props1 => props1.status == 1 ? ['Activa'] : ['Cerrada']
      },
      {
        Header: 'Observación Cierre',
        accessor: props1 => props1.reason_close
      },
    ]
  },[])

  const fetchData = (type = false) => {
    let promises = [
      axios.get(API_URL+'get_status'),
      axios.get(API_URL+'get_status_failure'),
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'params_service_priority'),
      axios.get(API_URL+'master_precint'),
      axios.get(API_URL+'params_manage_problems_tipology'),
      axios.get(API_URL+'params_manage_problems_point_failures'),
      axios.get(API_URL+'get_reason_failures'),
      axios.get(API_URL+'params_service_reason_close'),
    ]

    let promises1 = [
      axios.get(API_URL+'ownership_ss_task'),
    ]

    if(type){
      promises1 = promises1.concat(promises)
    }


    Promise.all(promises1).then(result => {

      setTasks(result[0].data)

      if(type){
        setStatus(result[1].data)
        setStatusFailure(result[2].data)
        setHosingComplexe(result[3].data)
        setPriorities(result[4].data)
        setPrecints(result[5].data)
        setTipologies(result[6].data)
        setPointFailures(result[7].data)
        setReasonFailures(result[8].data)
        setReasonClose(result[9].data)
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

  const displayFollowings = dataFollow => {
      setFollowings(dataFollow)
      openModalFollowing()
  }

  const openModalFollowing = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const objectPost = Object.assign({},data)
    axios.post(API_URL+'ownership_ss_task_by_filter',objectPost).then(result => {
      setTasks(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange = e => {
    if(e.target.name === 'radio_option'){
      setData({...data, [e.target.name] : e.target.checked})
    }else if(e.target.name === "type_worker"){
      let val = e.target.value === "true" ? true : false
      setData({...data, [e.target.name] : val})
      getWorkers(val)
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
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
    <Container fluid={true}>
      <Row  className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Row className="">
            <Col sm={12} md={12} lg={12}>
              <h4 className="text-center title_principal">SEGUIMIENTO DE TAREAS</h4>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                  <Row>
                    <InputFieldRef
                      {...props.inputSS}
                      value={data.number_ss}
                      handleChange={onChange}
                      ref={inputRef}
                      />
                    <InputField
                      {...props.inputProperty}
                      value={data.number_ownership}
                      handleChange={onChange}
                      />
                    <InputField
                      {...props.inputProyect}
                      value={data.id_housing_complexe}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {housingComplexe.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                  </Row>
                  <Row>
                    <InputField
                      {...props.inputStatusSS}
                      value={data.id_status_ss}
                      handleChange={onChange}
                      >
                      <option value=''>Todas...</option>
                      {status.map((v,i) => (
                        <option key={i} value={v.id}>{v.status}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputFrom}
                      value={data.from}
                      handleChange={onChange}
                      />
                    <InputField
                      {...props.inputTo}
                      value={data.to}
                      handleChange={onChange}
                      />
                  </Row>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <b>Operador Asignado</b>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                      <label forhtml="radio1">
                        <input type="radio" id="radio1" name="type_worker" value={true} onChange={onChange} checked={data.type_worker}  />
                        &nbsp;Personal de Postventa
                      </label>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                      <label forhtml="radio2">
                        <input type="radio" id="radio2" name="type_worker" value={false} onChange={onChange} checked={data.type_worker === false}  />
                        &nbsp;Contratistas
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <InputField
                      type="select"
                      name="id_worker"
                      required={false}
                      label=""
                      handleChange={onChange}
                      cols={'col-md-6 col-sm-6 col-lg-6'}
                      messageErrors={[]}
                    >
                      <option value="">--Seleccione--</option>
                      {personals.map((v,i) => (
                        <option value={v.id} key={i}>{v.name} {v.last_names}</option>
                      ))}
                      {contractors.map((v,i) => (
                        <option value={v.id} key={i}>{v.name}</option>
                      ))}
                    </InputField>
                    <Col sm={3} md={3} lg={3}>
                      <label forhtml="check1">
                        <input type="checkbox" id="check1" name="radio_option" checked={data.radio_option} onChange={onChange} />
                        &nbsp;Mostrar Todos
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={3} md={3} lg={3}>
                      <Button size="sm" type="submit" variant="secondary" block={true}>Buscar</Button>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                      <Button size="sm" type="button" variant="secondary" block={true}>Exportar a Excel</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal">Listado de S.S</h5>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal text-right">N° de Registros: 0</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Table columns={columns_table} data={tasks} displayPaginationUp={true} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

ManagementFailuresPropertyPage.defaultProps = {
  inputSS:{
    type: 'text',
    required: false,
    name: 'number_ss',
    label : 'Número SS:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputProperty:{
    type: 'text',
    required: false,
    name: 'number_ownership',
    label : 'Propiedad Número:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputProyect:{
    type: 'select',
    required: false,
    name: 'id_housing_complexe',
    label : 'Proyecto:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputStatusSS:{
    type: 'select',
    required: false,
    name: 'id_status_ss',
    label : 'Estado S.S:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputFrom:{
    type: 'date',
    required: false,
    name: 'from',
    label : 'Desde:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputTo:{
    type: 'date',
    required: false,
    name: 'to',
    label : 'Hasta:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default ManagementFailuresPropertyPage
