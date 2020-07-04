import React, { useRef, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Accordion,
  Modal,
  Tabs,
  Tab
} from 'react-bootstrap'
import {
  MdSend,
  MdRemoveCircle,
  MdAddCircle,
  MdPersonAdd,
  MdPlaylistAdd
} from 'react-icons/md'
import 'styles/pages/managementSolicitudePropertyFormPage.css'
import { API_URL } from 'utils/constants'
import { NotificationManager } from 'react-notifications'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import axios from 'axios'
import ModalTaskComponent from 'components/ModalTaskComponent'
import ModalTaskWorkerComponent from 'components/ModalTaskWorkerComponent'
import ModalFollowingTaskComponent from 'components/ModalFollowingTaskComponent'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import { following_columns } from 'utils/columns/followingColumns'
import ManagementSolicitudeFailureFormComponent from 'components/ManagementSolicitudeFailureFormComponent'
import FileSaver from 'file-saver'


const AreaFormSolicitudePage = (props) => {

  const [validated1, setValidated1] = useState(false)
  const [validated3, setValidated3] = useState(false)
  const [form1,setForm1] = useState({
    id_status: '',
    id_priority: '',
    id_time_limit_service: '',
    date: moment().tz('America/Santiago').format('YYYY-MM-DD'),
    id_reason_close: ''
  })
  const [form2, setForm2] = useState({
    is_private_file: true,
    name_file: '',
    file: ''
  })
  const [form3, setForm3] = useState({
    date_close: moment().tz('America/Santiago').format('YYYY-MM-DD'),
    reason_close: '',
  })

  const [data,setData] = useState({})
  const [statuses, setStatuses] = useState([])
  const [priorities, setPriorities] = useState([])
  const [reasonCloses, setReasonCloses] = useState([])
  const [limitServices, setLimitServices] = useState([])
  const [isOpenModalTask,setIsOpenModalTask] = useState(false)
  const [isOpenModalTaskWorker,setIsOpenModalTaskWorker] = useState(false)
  const [isOpenModalTaskClose,setIsOpenModalTaskClose] = useState(false)
  const [isOpenModalFollowing,setIsOpenModalFollowing] = useState(false)
  const [taskActive, setTaskActive] = useState({})
  const [followings, setFollowings] = useState([])
  const [objectFailures,setObjectFailures] = useState({
    statusFailure: [],
    reasonFailure: [],
    typologys: []
  })

  const inputRef = useRef(null)

  useEffect(() => {
    
    fetchData(true)
    inputRef.current.focus()
  },[])

  const searchDateForm1 = datos => {

    if(datos.id_status == '1'){
      return moment().format('YYYY-MM-DD')
    }else if(datos.id_status == '2'){
      return moment(datos.date_inspection).format('YYYY-MM-DD')
    }else if(datos.id_status == '3'){
      return moment(datos.date_execution).format('YYYY-MM-DD')
    }else{
      return moment(datos.date_close).format('YYYY-MM-DD')
    }
  }

  const fetchData = (typeFetch = false) => {
    const id = props.match.params.id
    let promises = [
      axios.get(API_URL+'area_ss/'+id),
      axios.get(API_URL+'area_ss_task_active/'+id),
      axios.get(API_URL+'area_ss_following/'+id),
    ]

    if(typeFetch){
      promises.push(axios.get(API_URL+'get_status_close'))
      promises.push(axios.get(API_URL+'params_service_priority'))
      promises.push(axios.get(API_URL+'params_service_reason_close'))
      promises.push(axios.get(API_URL+'params_service_time_limit_service'))
      promises.push(axios.get(API_URL+'get_status_failure'))
      promises.push(axios.get(API_URL+'get_reason_failures'))
      promises.push(axios.get(API_URL+'params_manage_problems_tipology'))
    }

    Promise.all(promises).then(result => {

      setData(result[0].data)
      let form1Object = Object.assign({},form1,{
        id_priority: result[0].data.id_priority,
        id_status: result[0].data.id_status,
        id_time_limit_service: result[0].data.id_time_limit_service,
        id_reason_close: result[0].data.id_reason_close,
        date: searchDateForm1(result[0].data)
      })
      setForm1(form1Object)
      setForm2(Object.assign({},form2,{
        is_private_file: result[0].data.is_private_file,
        name_file: result[0].data.file,
        file: ''
      }))
      setTaskActive( propsTask => {
        return result[1].data ? result[1].data : {}
      })
      setFollowings(result[2].data)


      if(typeFetch){
        setStatuses(result[3].data)
        setPriorities(result[4].data)
        setReasonCloses(result[5].data)
        setLimitServices(result[6].data)
        setObjectFailures({statusFailure: result[7].data, reasonFailure: result[8].data, typologys: result[9].data})
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

  const displayData = type => {
    if(Object.keys(data).length > 0){
      let val = ""
      switch (type) {
        case "number":
          val = data.id
        break;
        case "crea":
          val = data.client.name+' '+data.client.last_names
        break;
        case "solicita":
          val = data.client.name+' '+data.client.last_names
        break;
        case "contact_to":
          val = data.housing.name_client_administration
        break;
        case "origen":
          val = data.origin.name
        break;
        case "proyecto":
          val = data.housing.name
        break;
        case "fecha_emision":
          val = moment(data.date_request).format('DD-MM-YYYY')
        break;
        case "fecha_inspeccion":
          val = data.date_inspection ? moment(data.date_inspection).format('DD-MM-YYYY') : '-'
        break;
        case "fecha_ejecucion":
          val = data.date_execution ? moment(data.date_execution).format('DD-MM-YYYY') : '-'
          break;
        case "fecha_close":
          val = data.date_close ? moment(data.date_close).format('DD-MM-YYYY') : '-'
        break;
        case "email":
          val = data.housing.email_client_administration
        break;
        case "phone":
          val = data.housing.phone_client_administration
        break;
      }

      return val
    }else{
      return ''
    }
  }

  const onChange = () => {

  }

  const handleChangeForm1 = e => {
    setForm1({...form1,[e.target.name] : e.target.value})
  }

  const handleChangeForm2 = e => {
    setForm2({...form2, [e.target.name] : e.target.checked })

  }

  const handleChangeForm3 = e => {
    setForm3({...form3, [e.target.name] : e.target.value })

  }

  const openInputFiles = typeInput => {
    if(typeInput === "principal"){
      document.getElementById('file_principal').click()
    }
  }

  const handleChangeInputFile = (e,typeInput) => {
    e.persist()
    if(typeInput === "principal"){
      let formData = new FormData
      formData.append('is_private_file',form2.is_private_file)
      formData.append('document',e.target.files[0])
      const id = props.match.params.id
      axios.put(API_URL+'area_ss_file/'+id,formData).then(result => {
        NotificationManager.success('Archivo subido con éxito')
        fetchData()
        e.target.value = ""
      }).catch(err => {
        e.target.value = ""
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          NotificationManager.error('Error,contacte con soporte')
        }
      })
    }
  }

  const checkedWeekDays = day => {
    if(Object.keys(data).length > 0){
      return !!data.week_days.find(v => v.day == day)
    }else{
      return false
    }
  }

  const onSubmitForm1 = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated1(true);
      return
    }

    let object_put = Object.assign({},form1)
    let id_put = props.match.params.id
    axios.put(API_URL+'area_ss_status/'+id_put,object_put).then(result => {
      NotificationManager.success('Datos modificados')
      fetchData()
      inputRef.current.focus()
    }).catch(err => {
     	 if(err.response){
         NotificationManager.error(err.response.data.message)
       }else{
         NotificationManager.error('Error, contacte con soporte')
       }
    })
  }

  const openModalTask = () => {
    setIsOpenModalTask(!isOpenModalTask)
  }

  const handleSubmitTaskModal = dataTask => {
    return new Promise((resolved,rejected) => {
      dataTask.id_area_ss = props.match.params.id
      axios.post(API_URL+'area_ss_task',dataTask).then(result => {
        fetchData()
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

  const removeWorkerTask = (id,id_area_ss_task) => {
    axios.delete(API_URL+'area_ss_task_worker/'+id+'/'+id_area_ss_task).then(result => {
      NotificationManager.success('Trabajador removido')
      fetchData()
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const openModalTaskWorker = () => {
    setIsOpenModalTaskWorker(!isOpenModalTaskWorker)
  }

  const handleSubmitTaskModalWorker = dataTask => {

    return new Promise((resolved,rejected) => {
      dataTask.id_area_ss_task = taskActive.id
      axios.post(API_URL+'area_ss_task_worker',dataTask).then(result => {
        fetchData()
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

  const openModalCloseTask = () => {
    setIsOpenModalTaskClose(!isOpenModalTaskClose)
  }

  const handleSubmitForm3 = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated3(true);
      return
    }

    let objectPost = Object.assign({},form3)
    objectPost.status = 2
    axios.put(API_URL+'area_ss_task/'+taskActive.id,objectPost).then(result => {
      NotificationManager.success('Tarea Cerrada')
      fetchData()
      openModalCloseTask()
      clearForm3()
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const clearForm3 = () => {
    setForm3({
      date_close: moment().tz('America/Santiago').format('YYYY-MM-DD'),
      reason_close: '',
    })
  }

  const openModalFollowing = () => {
    setIsOpenModalFollowing(!isOpenModalFollowing)
  }

  const downloadFile = () => {
    axios.get(API_URL+"area_ss_file/"+data.file,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,data.file)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const handleSubmitFollowing = dataFollowing => {
    return new Promise((resolved,rejected) => {
      dataFollowing.id_area_ss = props.match.params.id
      axios.post(API_URL+'area_ss_following',dataFollowing).then(result => {
        fetchData()
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

  const goToTable = ()  => {
    props.history.replace('/request/area/managment')
  }

  const generate_orden_post_venta = () => {
    axios.get(API_URL+'area_ss_download_orden_post_venta/'+props.match.params.id,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,'orden_post_venta_area.pdf')
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  return (
      <Container fluid>
        <Row className="containerDiv">
          <Col sm={12} md={12} lg={12}>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <h4 className="title_principal" style={{ textDecoration: 'underline'}}>Gestion Servicios - Postventa</h4>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <br/>
                    <Button variant="secondary" block={true} type="button" size="sm" onClick={generate_orden_post_venta}>Generar Order</Button>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <br/>
                    <Button variant="danger" block={true} type="button" size="sm" onClick={goToTable}>Salir</Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Emisión:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                            { displayData('fecha_emision') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Inspección:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('fecha_inspeccion') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Ejecución:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('fecha_ejecucion') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Cierre:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('fecha_close') }
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={2} md={2} lg={2}>
                    <b>Numero:</b>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="">
                    <div className="div_number">{ displayData('number') }</div>
                  </Col>
                  <Col sm={{
                      offset: 1,
                      span:1
                    }}
                    md={{
                      offset: 1,
                      span:1
                    }}
                    lg={{
                      offset: 1,
                      span:1
                    }}>
                    <b>Crea: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado">
                    { displayData('crea') }
                  </Col>
                  <Col sm={1} md={1} lg={1}>
                    <b>Solicita: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado">
                    { displayData('solicita') }
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <b>Origen: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado" style={{ paddingLeft: '20px'}}>
                    { displayData('origen') }
                  </Col>
                  <Col sm={1} md={1} lg={1}>
                    <b>Proyecto: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado" style={{ paddingLeft: '20px'}}>
                    { displayData('proyecto') }
                  </Col>
                  <Col sm={1} md={1} lg={1}>
                    <b>Correo Electrónico: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado" style={{ paddingLeft: '20px'}}>
                    { displayData('email') }
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <b>Teléfono: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado" style={{ paddingLeft: '20px'}}>
                    { displayData('phone') }
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <b>Contactar Con: </b>
                  </Col>
                  <Col sm={3} md={3} lg={3} className="subrayado" style={{ paddingLeft: '20px'}}>
                    { displayData('contact_to') }
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <br/>
                <h4 className="title_principal">Uso interno de Postventa</h4>
                <hr/>
              </Col>
              <Col sm={7} md={7} lg={7}>
                <Row>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="lunes">
                      <input id="lunes" type="checkbox" value={1} checked={ checkedWeekDays(1) } onChange={onChange} name="week_days" disabled=""/>
                      <br/>&nbsp;Lunes
                    </label>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="martes">
                      <input id="martes" type="checkbox" value={2} checked={ checkedWeekDays(2) } onChange={onChange} name="week_days" disabled=""/>
                      &nbsp;Martes
                    </label>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="miercoles">
                      <input id="miercoles" type="checkbox" value={3} checked={ checkedWeekDays(3) } onChange={onChange} name="week_days" disabled=""/>
                      &nbsp;Miercoles
                    </label>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="jueves">
                      <input id="jueves" type="checkbox" value={4} checked={ checkedWeekDays(4) } onChange={onChange} name="week_days" disabled=""/>
                      &nbsp;Jueves
                    </label>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="viernes">
                      <input id="viernes" type="checkbox" value={5} checked={ checkedWeekDays(5) } onChange={onChange} name="week_days" disabled=""/>
                      &nbsp;Viernes
                    </label>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <label forhtml="sabado">
                      <input id="sabado" type="checkbox" value={6} checked={ checkedWeekDays(6)} onChange={onChange} name="week_days" />
                      &nbsp;Sabado
                    </label>
                  </Col>
                  <Col sm={12} md={12} lg={12}>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <label>De:</label>
                        <select className="form-control form-control-sm" disabled="">
                        </select>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <label>Hasta:</label>
                        <select className="form-control form-control-sm" disabled="">
                        </select>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} md={12} lg={12}>
                    <label><b>Notas:</b></label>
                    <textarea rows="2" className="form-control form-control-sm" disabled="" onChange={() => {}} value={Object.keys(data).length > 0 ? data.note : ''}/>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col sm={12} md={12} lg={12} className="text-center">
                    <h5 className="title_principal" style={{ textDecoration: 'underline'}}>Agregar Documento</h5>
                    <br/>
                  </Col>
                  <Col sm={12} md={12} lg={12}>
                    <Row className="justify-content-center">
                      <Col sm={3} md={3} lg={3}>
                        <label>
                          <b>Privado</b>&nbsp;
                          <input type="checkbox" checked={form2.is_private_file} name="is_private_file" onChange={handleChangeForm2} />
                        </label>
                      </Col>
                      <Col sm={5} md={5} lg={5}>
                        <Button variant="secondary" block={true} size="sm" type="button" onClick={() => openInputFiles('principal')}>
                          Seleccionar
                        </Button>
                        <input type="file"
                          id="file_principal"
                          onChange={(e) => handleChangeInputFile(e,'principal')}
                          style={{ display: 'none'}}
                          accept=".rar,.pdf,.jpg,.jpeg,.png"
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col sm={10} md={10} lg={10}>
                        {data.file ? (
                          <Button variant="link" block={true} size="sm" onClick={downloadFile}>{data.file}</Button>
                        ) : ''}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={5} md={5} lg={5} style={{ borderLeft: '1px solid lightgray'}}>
                <Form onSubmit={onSubmitForm1} noValidate validated={validated1}>
                  <Row>
                    <InputFieldRef
                      ref={inputRef}
                      type="select"
                      required={true}
                      name="id_status"
                      label="Estado:"
                      cols="col-md-12 col-sm-12 col-lg-12"
                      messageErrors={[
                        'Requerido'
                      ]}
                      handleChange={handleChangeForm1}
                      value={form1.id_status}
                    >
                      {statuses.map((v,i) => (
                        <option value={v.id} key={i}>{v.status}</option>
                      ))}
                    </InputFieldRef>
                    {form1.id_status > 1 ? (
                      <InputField
                        type="date"
                        required={false}
                        name="date"
                        label="Fecha:"
                        cols="col-md-12 col-sm-12 col-lg-12"
                        messageErrors={[

                        ]}
                        handleChange={handleChangeForm1}
                        value={form1.date}
                        />
                    ) : ''}
                    {form1.id_status == 5 ? (
                      <InputField
                        type="select"
                        required={true}
                        name="id_reason_close"
                        label="Motivo de Cierre:"
                        cols="col-md-12 col-sm-12 col-lg-12"
                        messageErrors={[

                        ]}
                        handleChange={handleChangeForm1}
                        value={form1.id_reason_close}
                        >
                        {reasonCloses.map((v,i) => (
                          <option value={v.id} key={i}>{v.name}</option>
                        ))}
                      </InputField>
                    ) : ''}
                    <InputField
                      type="select"
                      required={true}
                      name="id_priority"
                      label="Prioridad:"
                      cols="col-md-12 col-sm-12 col-lg-12"
                      messageErrors={[
                        'Requerido'
                      ]}
                      handleChange={handleChangeForm1}
                      value={form1.id_priority}
                    >
                      {priorities.map((v,i) => (
                        <option value={v.id} key={i}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      type="select"
                      required={true}
                      name="id_time_limit_service"
                      label="Plazo Ejecución:"
                      cols="col-md-12 col-sm-12 col-lg-12"
                      messageErrors={[
                        'Requerido'
                      ]}
                      handleChange={handleChangeForm1}
                      value={form1.id_time_limit_service}
                    >
                      {limitServices.map((v,i) => (
                        <option value={v.id} key={i}>{v.name}</option>
                      ))}
                    </InputField>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={8} md={8} lg={8}>
                      <Button variant="success" block={true} type="submit" size="sm">Guardar <MdSend /></Button>
                    </Col>
                  </Row>
                </Form>
                <hr/>
                <Row className="justify-content-center">
                  {Object.keys(taskActive).length > 0 ? (
                    <Col sm={12} md={12} lg={12}>
                      <Accordion>
                        <Card>
                          <Card.Header style={{ backgroundColor: 'rgb(50, 110, 153)'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              <span style={{color: 'white'}}>Tarea Pendiente</span>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <Row>
                                <Col sm={12} md={12} lg={12}>
                                  <table className="table table-striped">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b>Asignado A: </b>
                                          <div style={{width: '100%'}} className="text-center">
                                            <Button variant="success" size="sm" type="button" onClick={openModalTaskWorker}><MdAddCircle /></Button>
                                          </div>
                                        </td>
                                        <td>
                                          {taskActive.workers.map((v,i) => {
                                            if(v.personal){
                                              return(
                                                <React.Fragment key={i}>
                                                  {v.personal.name+' '+v.personal.last_names}
                                                  &nbsp;
                                                  {taskActive.workers.length > 1 ? (
                                                    <Button variant="danger" size="sm" type="button" onClick={() => removeWorkerTask(v.id,v.id_area_ss_task)} >
                                                      <MdRemoveCircle />
                                                    </Button>
                                                  ) : ''}
                                                  <br/>
                                                </React.Fragment>
                                              )
                                            }else{
                                              return(
                                                <React.Fragment key={i}>
                                                  {v.contractor.name}
                                                  &nbsp;
                                                  {taskActive.workers.length > 1 ? (
                                                    <Button variant="danger" size="sm" type="button" onClick={() => removeWorkerTask(v.id,v.id_area_ss_task)} >
                                                      <MdRemoveCircle />
                                                    </Button>
                                                  ) : ''}
                                                  <br/>
                                                </React.Fragment>
                                              )
                                            }
                                          })}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><b>Tarea: </b></td>
                                        <td>{taskActive.task.name}</td>
                                      </tr>
                                      <tr>
                                        <td><b>Fecha Inicial:</b></td>
                                        <td>
                                          {moment(taskActive.initial_date).format('DD-MM-YYYY')}
                                          <br/>
                                          {taskActive.block_initial.block}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><b>Fecha Final: </b></td>
                                        <td>
                                          {moment(taskActive.final_date).format('DD-MM-YYYY')}
                                          <br/>
                                          {taskActive.block_final.block}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><b>Solicitud de Material: </b></td>
                                        <td>
                                          {taskActive.solicitude}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><b>Descripción: </b></td>
                                        <td>
                                          {taskActive.description}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </Col>
                              </Row>
                              <Row className="justify-content-center">
                                <Col sm={7} md={7} lg={7}>
                                  <Button variant="secondary" size="sm" type="button" onClick={openModalCloseTask} block={true}>Cerrar Tarea</Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                  ) : (
                    <Col sm={8} md={8} lg={8}>
                      <Button size="sm" variant="secondary" block={true} onClick={openModalTask}>Planificación de Tareas</Button>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
            <hr/>
            <Tabs defaultActiveKey="following" id="uncontrolled-tab-example" variant="pills">
              <Tab eventKey="following" title="Seguimientos">
                <Row>
                  <Col sm={12} md={12} lg={12} className="text-center">
                    <Button variant="link" onClick={openModalFollowing} type="button" size="sm">Agregar Seguimiento</Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Table columns={following_columns} data={followings} letrasChicas={true}/>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="failures" title="Fallas">
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <br/>
                    <Accordion>
                      {Object.keys(data).length > 0 ? data.failures.map((v,i) => (
                        <Card key={i}>
                          <Card.Header style={{ backgroundColor: 'rgb(64, 64, 163)'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={i} style={{color: 'white'}}>
                              #{i + 1}.-Recinto: {v.precint.name} | Relación de Falla: {v.related.name} | Falla Puntual: {v.point.name}
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                              <ManagementSolicitudeFailureFormComponent
                                failure={v}
                                statusFailure={objectFailures.statusFailure}
                                reasonFailure={objectFailures.reasonFailure}
                                typologys={objectFailures.typologys}
                                key={i}
                                fetchData={fetchData}
                                reasonCloses={reasonCloses}
                                area={true}
                              />
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      )) : '' }
                    </Accordion>
                  </Col>
                </Row>
              </Tab>
            </Tabs>

          </Col>
        </Row>
        <ModalTaskComponent
          show={isOpenModalTask}
          onHide={openModalTask}
          submit={handleSubmitTaskModal}
        />
        <ModalTaskWorkerComponent
          show={isOpenModalTaskWorker}
          onHide={openModalTaskWorker}
          submit={handleSubmitTaskModalWorker}
          task={taskActive}
        />
        <ModalFollowingTaskComponent
          show={isOpenModalFollowing}
          onHide={openModalFollowing}
          submit={handleSubmitFollowing}
          title="Agregar Nuevo Seguimiento"
        />
        <Modal
          show={isOpenModalTaskClose}
          onHide={openModalCloseTask}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop='static'
        >
        <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white'}}>
          <Modal.Title id="contained-modal-title-vcenter">
             Cierre de Tarea <MdPlaylistAdd />
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitForm3} noValidate validated={validated3}>
              <Row>
                <InputField
                  type="date"
                  required={true}
                  name="date_close"
                  value={form3.date_close}
                  handleChange={handleChangeForm3}
                  label="Fecha de Cierre:"
                  messageErrors={[
                    'Requerido*'
                  ]}
                  cols='col-md-6 col-sm-6 col-lg-6'
                />
                <InputField
                  type="textarea"
                  required={true}
                  name="reason_close"
                  value={form3.reason_close}
                  handleChange={handleChangeForm3}
                  label="Ingrese Motivo/Detalle:"
                  messageErrors={[
                    'Requerido*'
                  ]}
                  cols='col-md-6 col-sm-6 col-lg-6'
                />
              </Row>
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4}>
                  <Button variant="primary" block={true} size="sm" type="submit">
                    Guardar
                  </Button>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <Button variant="danger" block={true} size="sm" type="button" onClick={openModalCloseTask}>
                    Cerrar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
  )
}

export default AreaFormSolicitudePage
