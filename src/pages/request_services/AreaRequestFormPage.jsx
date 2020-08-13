import React, { useEffect, useState, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal
} from 'react-bootstrap'
import {
  FaSearch,
  FaPlusCircle,
  FaRegCheckCircle,
  FaSave
} from 'react-icons/fa'
import 'styles/pages/requestPropertyForm.css'
import 'styles/components/modalComponents.css'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import Table from 'components/Table'
import { toast } from 'react-toastify';
import { API_URL } from 'utils/constants'
import axios from 'axios'
import ClientFormComponent from 'components/ClientFormComponent'
import * as moment from 'moment-timezone'
let client_columns = []
let failureColumns = []

const AreaRequestFormPage = (props) => {

  const [data,setData] = useState({
    date_request: moment().format('YYYY-MM-DD'),
    id_housing_complexe: '',
    id_origin: '',
    rut_request_person: '',
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
    id_tipology_failure: '',
    id_point_failure: ''
  })

  const [validated, setValidated] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalFailure, setIsOpenModalFailure] = useState(false)
  const [nameClientRequest, setNameClientRequest] = useState('')
  const [clientData, setClientData] = useState([])
  const [isCreateClient, setIsCreateClient] = useState(false)
  const [blocks,setBlocks] = useState([])
  const [housingComplexes, setHousingComplexes] = useState([])
  const [ownerships, setOwnerships] = useState([])
  const [origins, setOrigins] = useState([])
  const [precints, setPrecints] = useState([])
  const [relatedFailures, setRelatedFailures] = useState([])
  const [pointFailures, setPointFailures] = useState([])
  const [tipologyFailures, setTipologyFailures] = useState([])
  const [failureData, setFailureData] = useState([])
  const [dataHousing, setDataHousing] = useState({
    date_delivery_onwership: '',
    date_inscription_conservate: '',
    ownership: '',
    phone: '',
    email: ''
  })

  const inputRef = useRef(null)

  useEffect(() => {

    fetchData()
    removeAllFailuresByIp()
    inputRef.current.focus()
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
        Header: 'Tipología de Falla',
        accessor: props1 => [props1.tipology.name]
      },
      {
        Header: 'Falla Puntual',
        accessor: props1 => [props1.point.name]
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

  const clientSelected = dataClient => {
    setData({...data, rut_request_person: dataClient.rut})
    setNameClientRequest(dataClient.name+' '+dataClient.last_names)
    setIsOpenModal(false)
  }

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'client'),
      axios.get(API_URL+'get_block_hour'),
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'params_service_origin'),
      axios.get(API_URL+'params_manage_problems_tipology_by_type/'+1),
      axios.get(API_URL+'params_manage_problems_point_failures'),
      axios.get(API_URL+'params_manage_problems_related_failures'),
      axios.get(API_URL+'master_config_ss'),
    ]

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'area_failure_ss_by_id_area_ss')
      )
    }

    Promise.all(promises).then(result => {
      if(result[7].data){
        setClientData(result[0].data)
        setBlocks(result[1].data)
        setHousingComplexes(result[2].data)
        setOrigins(result[3].data)
        setTipologyFailures(result[4].data)
        setPointFailures(result[5].data)
        setRelatedFailures(result[6].data)
        if(props.match.params.id){
          setFailureData(result[8].data)
        }
      }else{
        toast.error('Debe hacer la configuración de las s.s primero')
        setTimeout(function () {
          props.history.replace('/masters/config')
        }, 1000);

      }

    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err,'aqui');
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const handleInputBlockHasta = () => {
      let option_array = blocks.slice(1,blocks.length)
      return option_array.map((v,i) => (
        <option key={i} value={v.id}>{v.block}</option>
      ))
  }

  const handleShowClientForm = (submit = false) => {
    if(submit){
      fetchData()
    }
    setIsCreateClient(!isCreateClient)
  }

  const onChange = e => {
    e.persist()
    if(e.target.name === "week_days"){
      if(e.target.checked){
        setData({...data, [e.target.name] : [...data.week_days, e.target.value]})
      }else{
        setData({...data, [e.target.name] : data.week_days.filter(v => v !== e.target.value)})
      }
    }else if(e.target.name === "id_housing_complexe"){
      setData({...data, [e.target.name] : e.target.value})
      setDataHousing(housingComplexes.find(v => v.id == e.target.value))
      getPrecints(e.target.value)
    }else if(e.target.name === "rut_request_person"){
      let clientFrinchi = clientData.find(v => v.rut === e.target.value)
      if(clientFrinchi) setNameClientRequest(clientFrinchi.name+' '+clientFrinchi.last_names)
      setData({...data, [e.target.name] : e.target.value})
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
  }

  const onChange1 = e => {
    if(e.target.name === "id_tipology_failure"){
      if(e.target.value){
        getPointFailures(e.target.value)
        setData1({...data1, [e.target.name] : e.target.value})
      }else{
        setData1({...data1, [e.target.name] : e.target.value})
      }
    }else{
      setData1({...data1, [e.target.name] : e.target.value})
    }

  }

  const getPointFailures = id => {

    axios.get(API_URL+'params_manage_problems_point_failures_by_tipology/'+id).then(result => {
      setPointFailures(result.data)
    }).catch(err => {
     	 if(err.response){
         toast.error(err.response.data.message)
       }else{
         console.log(err);
         toast.error('Error,contacte con soporte')
       }
    })

  }

  const getPrecints = id => {
    axios.get(API_URL+'master_precint_by_area_ss/'+id).then(result => {
      setPrecints(result.data)
    }).catch(err => {
     	 if(err.response){
         toast.error(err.response.data.message)
       }else{
         console.log(err);
         toast.error('Error,contacte con soporte')
       }
    })
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},data)

    if(objectPost.id){
      axios.put(API_URL+'area_ss/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')
        fetchData()
        clearForm()
        clearForm1()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'area_ss',objectPost).then(result => {
        toast.success('Registro Creado')
        fetchData()
        clearForm()
        clearForm1()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }

  }

  const openModalClient = () => {
    setIsOpenModal(!isOpenModal)
  }

  const openModalFailure = () => {
    setIsOpenModalFailure(!isOpenModalFailure)
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

    if(!data1.id_tipology_failure){
      toast.error('Debe agregar una tipologia de falla')
      return false
    }

    if(!data1.id_point_failure){
      toast.error('Debe agregar una falla puntual')
      return false
    }

    if(!data1.description){
      toast.error('Debe agregar una descripción de la falla')
      return false
    }

    let objectPost = Object.assign({},data1,{
      id_ownership_ss: props.match.params.id ? props.match.params.id : null
    })
    axios.post(API_URL+'area_failure_ss',objectPost).then(result => {
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
      axios.get(API_URL+'area_failure_ss_by_id_area_ss/'+props.match.params.id).then(result => {
        setFailureData(result.data)
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })

    }else{
      axios.get(API_URL+'area_failure_ss_creating').then(result => {
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
      id_tipology_failure: '',
      id_point_failure: ''
    })
  }

  const clearForm = () => {
    setData({
      date_request: moment().format('YYYY-MM-DD'),
      id_housing_complexe: '',
      id_origin: '',
      rut_request_person: '',
      week_days: [],
      id_block_hour_from: '',
      id_block_hour_to: '',
      id: '',
      note:'',
    })
    setValidated(false)
    setDataHousing({
      date_delivery_onwership: '',
      date_inscription_conservate: '',
      ownership: '',
      phone: '',
      email: ''
    })
    inputRef.current.focus()
    setNameClientRequest('')
  }

  const removeAllFailuresByIp = () => {
    axios.delete(API_URL+'area_failure_ss_by_ip').then(result => {
      console.log('registros borrados');
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const removeFailure = id => {
    axios.delete(API_URL+'area_failure_ss/'+id).then(result => {
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

  const goToTable = () => {
    props.history.replace('/request/property/managment')
  }

  return (
    <Container fluid={true} className="containerDiv">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h4 className="text-center title_principal">Solicitud de Servicio Áreas comunes - PostVenta</h4>
        </Col>
      </Row>
      <br/>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Form onSubmit={onSubmit} noValidate validated={validated}>
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4} xs={6}>
                  <br/>
                  Número: <span className="alert alert-danger">no asignado</span>
              </Col>
              <InputField
                {...props.inputDateRequest}
                handleChange={onChange}
                value={data.date_request}
                />
            </Row>
            <Row>
              <InputFieldRef
                ref={inputRef}
                {...props.inputProyect}
                handleChange={onChange}
                value={data.id_housing_complexe}
                >
                <option>--Seleccione--</option>
                {housingComplexes.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputFieldRef>
              <Col sm={3} md={3} lg={3}>
                <b>Nombre:</b>
                <br/>
                {dataHousing.name_client_administration}
              </Col>
              <Col sm={3} md={3} lg={3}>
                <b>Teléfono:</b>
                <br/>
                {dataHousing.phone_client_administration}
              </Col>
              <Col sm={3} md={3} lg={3}>
                <b>Mail:</b>
                <br/>
                {dataHousing.email_client_administration}
              </Col>
            </Row>
            <Row>

            </Row>
            <hr/>
            <Row>
              <InputField
                {...props.inputOrigin}
                value={data.id_origin}
                handleChange={onChange}
                >
                <option value="">--Seleccione--</option>
                {origins.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputSolicita}
                value={data.rut_request_person}
                handleChange={onChange}
                />
              <Col sm={1} md={1} lg={1}>
                <br/>
                <Button variant="secondary" onClick={openModalClient}><FaSearch/></Button>
              </Col>
              <Col sm={5} md={5} lg={5}>
                <br/>
                {
                  nameClientRequest ? (
                    <p className="alert alert-warning">Solicitante: {nameClientRequest}</p>
                  ) : ''
                }
              </Col>
            </Row>
            <hr/>
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
                  <option value={v.id_precint} key={i}>{v.precint.name}</option>
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
              <InputField
                {...props.inputTipologyFail}
                value={data1.id_tipology_failure}
                handleChange={onChange1}
              >
                <option value="">--Seleccione--</option>
                {tipologyFailures.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputPointFailure}
                value={data1.id_point_failure}
                handleChange={onChange1}
              >
                <option value="">--Seleccione--</option>
                {pointFailures.map((v,i) => (
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
      </Container>

      <Modal
        show={isOpenModal}
        onHide={openModalClient}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="header_dark">
          <Modal.Title id="contained-modal-title-vcenter">
            Clientes registrados
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {
              isCreateClient ? (
                <Col sm={12} md={12} lg={12}>
                  <ClientFormComponent isModal={true} showTable={handleShowClientForm} {...props} />
                </Col>
              ) : (
                <Col sm={12} md={12} lg={12}>
                  <Row className="justify-content-center">
                    <Col sm={4} md={4} lg={4} xs={6}>
                      <Button variant="secondary" block={true} onClick={handleShowClientForm}>Crear Cliente <FaPlusCircle /></Button>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Table columns={[
                        {
                          Header : 'Rut',
                          accessor: 'rut',
                          Cell: props1 => {
                            const { original } = props1.cell.row
                            return(
                              <Button variant="link" onClick={() => { clientSelected(original) } }>{original.rut}</Button>
                            )
                          }
                        },
                        {
                          Header : 'Nombre',
                          accessor: props1 => [props1.name+' '+props1.last_names],
                        },
                        {
                          Header : 'Dirección',
                          accessor: 'address',
                        },
                        {
                          Header : 'Email',
                          accessor: 'email',
                        }
                      ]} data={clientData} />
                    </Col>
                  </Row>
                </Col>
              )
            }
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openModalClient}>cerrar</Button>
        </Modal.Footer>
      </Modal>

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

AreaRequestFormPage.defaultProps = {
  inputDateRequest:{
    type: 'date',
    required: true,
    name: 'date_request',
    label : 'Fecha:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputProyect:{
    type: 'select',
    required: true,
    name: 'id_housing_complexe',
    label : 'Proyecto:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputOrigin:{
    type: 'select',
    required: true,
    name: 'id_origin',
    label : 'Origen:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputSolicita:{
    type: 'text',
    required: true,
    name: 'rut_request_person',
    label : 'Solicita:',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-2 col-md-2 col-lg-2 col-xs-2"
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

export default AreaRequestFormPage
