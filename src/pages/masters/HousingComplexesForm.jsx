import React, { useEffect , useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Tab,
  Tabs,
  Card
} from 'react-bootstrap'
import {
  FaPlusCircle, FaTrash
} from 'react-icons/fa'
import axios from 'axios'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import { toast } from 'react-toastify';
import { API_URL } from 'utils/constants'
import * as moment from 'moment-timezone'
import FileSaver from 'file-saver'

const HousingComplexesForm = (props) => {
  const inputRef = useRef(null)

  const [form1,setForm1] = useState({
    name: '',
    id_enterprise: '',
    id_city: '',
    street: '',
    number: '',
    stage : '',
    number_living: '',
    date_municipal_reception: '',
    acronym: '',
    type_proyect: '',
    block_mza: false,
    manager_postventa: '',
    admin_postventa: '',
    name_admin_postventa: '',
    phone_admin_postventa: '',
    dir_proyect_postventa: '',
    name_dir_proyect_postventa: '',
    other_destinatary_postventa: '',
    manager_email: false,
    admin_email: false,
    dir_email: false,
    other_email: false,
    precint_by_housing_complexes: [],
    precint_by_housing_complexes_model: [],
    hard_data: false,
    hard_data_information_limit_date: false,
    totales_año_1: false,
    totales_año_2: false,
    totales_año_3: false,
    totales_año_4: false,
    solicitude_year_1: '',
    solicitude_year_2: '',
    solicitude_year_3: '',
    solicitude_year_4: '',
    observation_year_1: '',
    observation_year_2: '',
    observation_year_3: '',
    observation_year_4: '',
    rut_administration_client: '',
    user_client_administration: '',
    password_client_administration: '',
    name_client_administration: '',
    email_client_administration: '',
    phone_client_administration: '',
    fileAdjunt:'',
    id_model_precint: ''
  })

  const [name_file_adjunt, setNameFileAdjunt] = useState('')
  const [enterprise, setEnterprise] = useState([])
  const [cities,setCities] = useState([])
  const [precints,setPrecints] = useState([])
  const [precintsModel,setPrecintsModel] = useState([])
  const [config, setConfig] = useState(null)
  const [validated, setValidated] = useState(false)
  const [fileAdjuntRegistered, setFileAdjuntRegistered] = useState([])
  const [models, setModels] = useState([])

  useEffect(() => {
    if(props.config_ss && Object.keys(props.config_ss).length > 0){
      inputRef.current.focus()
      fetchData()
      if(props.match.params.id){
        fetchDataToModified(props.match.params.id)
      }
    }else{
      toast.error('Debe hacer la configuración primero')
      setTimeout(function () {
        props.history.replace('/masters/config')
      }, 1000);
    }
  },[])

  const onChange = e => {
    if(e.target.name === "block_mza" || e.target.name === "manager_email" || e.target.name === "admin_email" || e.target.name === "dir_email" || e.target.name === "other_email" || e.target.name === "hard_data" || e.target.name === "hard_data_information_limit_date" || e.target.name.indexOf('totales_año') !== -1){
      setForm1({...form1, [e.target.name] : e.target.checked})
    }else{
      setForm1({...form1, [e.target.name] : e.target.value})
    }
  }

  const clearForm = () => {

    setForm1({
      name: '',
      id_enterprise: '',
      id_city: '',
      street: '',
      number: '',
      stage : '',
      number_living: '',
      date_municipal_reception: '',
      acronym: '',
      type_proyect: '',
      block_mza: false,
      manager_postventa: '',
      admin_postventa: '',
      name_admin_postventa: '',
      phone_admin_postventa: '',
      dir_proyect_postventa: '',
      name_dir_proyect_postventa: '',
      other_destinatary_postventa: '',
      manager_email: false,
      admin_email: false,
      dir_email: false,
      other_email: false,
      precint_by_housing_complexes: [],
      precint_by_housing_complexes_model: [],
      hard_data: false,
      hard_data_information_limit_date: false,
      totales_año_1: false,
      totales_año_2: false,
      totales_año_3: false,
      totales_año_4: false,
      solicitude_year_1: '',
      solicitude_year_2: '',
      solicitude_year_3: '',
      solicitude_year_4: '',
      observation_year_1: '',
      observation_year_2: '',
      observation_year_3: '',
      observation_year_4: '',
      rut_administration_client: '',
      user_client_administration: '',
      password_client_administration: '',
      name_client_administration: '',
      email_client_administration: '',
      phone_client_administration: '',
      fileAdjunt: '',
      id_model_precint: ''
    })
    setValidated(false)
    document.getElementById('file_adjunt').value = ""
    inputRef.current.focus()
    setNameFileAdjunt('')
  }

  const deleteFile = dataFile => {

    axios.delete(API_URL+'housing_complexe_destroy_file/'+dataFile.id).then(result => {
      toast.success('Archivo Eliminado')
      fetchDataToModified(props.match.params.id)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })

  }

  const downloadFile = dataFile => {
    axios.get(API_URL+'housing_complexe_download_file/'+dataFile.id,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,dataFile.name);
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const  fetchData = () => {

    let promises = [
      axios.get(API_URL+'master_cities'),
      axios.get(API_URL+'enterprise'),
      axios.get(API_URL+'master_enclosure'),
      axios.get(API_URL+'master_config_file'),
      axios.get(API_URL+'params_model_property'),
    ]

    Promise.all(promises).then(result => {

      setCities(result[0].data)
      setEnterprise(result[1].data)
      setPrecints(result[2].data)
      setConfig(result[3].data)
      setModels(result[4].data)

    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const fetchDataToModified = id => {
    axios.get(API_URL+'housing_complexe/'+id).then(result => {
      setForm1({
        name: result.data.name,
        id_enterprise: result.data.id_enterprise,
        id_city: result.data.id_city,
        street: result.data.street,
        number: result.data.number,
        stage : result.data.stage,
        number_living: result.data.number_living,
        date_municipal_reception: moment(result.data.date_municipal_reception).format('YYYY-MM-DD'),
        acronym: result.data.acronym,
        type_proyect: result.data.type_proyect,
        block_mza: result.data.block_mza,
        manager_postventa: result.data.manager_postventa,
        admin_postventa: result.data.admin_postventa,
        name_admin_postventa: result.data.name_admin_postventa,
        phone_admin_postventa: result.data.phone_admin_postventa,
        dir_proyect_postventa: result.data.dir_proyect_postventa,
        name_dir_proyect_postventa: result.data.name_dir_proyect_postventa,
        other_destinatary_postventa: result.data.other_destinatary_postventa,
        manager_email: result.data.manager_email,
        admin_email: result.data.admin_email,
        dir_email: result.data.dir_email,
        other_email: result.data.other_email,
        precint_by_housing_complexes: result.data.precints.filter(v => !v.is_by_model).map(v => v.id_precint),
        precint_by_housing_complexes_model: result.data.precints.filter(v => v.is_by_model).map(v => v.id_precint),
        hard_data: result.data.hard_data,
        hard_data_information_limit_date: result.data.hard_data_information_limit_date,
        totales_año_1: result.data.totales_año_1,
        totales_año_2: result.data.totales_año_2,
        totales_año_3: result.data.totales_año_3,
        totales_año_4: result.data.totales_año_4,
        solicitude_year_1: result.data.solicitude_year_1,
        solicitude_year_2: result.data.solicitude_year_2,
        solicitude_year_3: result.data.solicitude_year_3,
        solicitude_year_4: result.data.solicitude_year_4,
        observation_year_1: result.data.observation_year_1,
        observation_year_2: result.data.observation_year_2,
        observation_year_3: result.data.observation_year_3,
        observation_year_4: result.data.observation_year_4,
        rut_administration_client: result.data.rut_administration_client,
        user_client_administration: result.data.user_client_administration,
        password_client_administration: result.data.password_client_administration,
        name_client_administration: result.data.name_client_administration,
        email_client_administration: result.data.email_client_administration,
        phone_client_administration: result.data.phone_client_administration,
        fileAdjunt: '',
        id: result.data.id,
        id_model_precint: result.data.id_model_precint
      })

      if(result.data.files){
        setFileAdjuntRegistered(result.data.files)
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

  const gotBackToTable = () => {
    props.history.push('/masters/housing_complexes')
  }

  const handleChangeSelectModel = e => {
    let val = e.target.value

    setForm1({...form1, id_model_precint: val, precint_by_housing_complexes_model: []})
    if(val){
      setPrecintsModel()
    }else{
      setPrecintsModel([])
    }
  }

  const handleShowYearHardData = () => {
    return config.date_hard_data.split('-')[0]
  }

  const onChangePrecintHousingComplexe = e => {
    e.persist()
    if(e.target.name.indexOf('model') !== -1){
      if(e.target.checked){
        setForm1({...form1, precint_by_housing_complexes_model : [...form1.precint_by_housing_complexes_model,e.target.value]})
      }else{
        setForm1({...form1, precint_by_housing_complexes_model: form1.precint_by_housing_complexes_model.filter(v => v != e.target.value) })
      }
    }else{
      if(e.target.checked){
        setForm1({...form1, precint_by_housing_complexes: [...form1.precint_by_housing_complexes,e.target.value]})
      }else{
        setForm1({...form1, precint_by_housing_complexes: form1.precint_by_housing_complexes.filter(v => v != e.target.value) })
      }
    }
  }

  const onChangeFile = e => {

    if(props.config_ss.valid_format_documents.indexOf(e.target.files[0].type.split('/')[1]) !== -1){
      setForm1({...form1, fileAdjunt: e.target.files[0] })
      setNameFileAdjunt(e.target.files[0].name)
    }else{
      toast.error('El tipo de archivo no es valido')
      document.getElementById('file_adjunt').value = ""
      document.getElementById('file_adjunt').src = ""
    }
  }



  const openFileInput = () => {
    document.getElementById('file_adjunt').click()
  }

  const onSubmit = e => {

    const form = e.currentTarget;

    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      toast.error('Hay campos que no cumplen con los requisitos, verifique por favor')
      return
    }

    let objectPost = Object.assign({},form1)
    let newFormData = new FormData
    Object.keys(form1).forEach((v, i) => {

      if(v === "fileAdjunt"){
        newFormData.append('documents',form1[v])
      }else{
        newFormData.append(v,form1[v])
      }

    });


    if(objectPost.id){
      axios.put(API_URL+'housing_complexe/'+objectPost.id,newFormData).then(result => {
        toast.success('Registro Modificado')
        gotBackToTable()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'housing_complexe',newFormData).then(result => {
        toast.success('Registro Creado')
        clearForm()
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

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12}>
            <Form onSubmit={onSubmit} noValidate validated={validated}>
              <Row>
                <InputFieldRef
                  {...props.inputName}
                  handleChange={onChange}
                  value={form1.name}
                  ref={inputRef}
                />
                <InputField
                  {...props.inputEnterprise}
                  value={form1.id_enterprise}
                  handleChange={onChange}
                >
                  <option value=''>--Seleccione--</option>
                  {enterprise.map((v,i) => (
                    <option value={v.id} key={i}>{v.name}</option>
                  ))}
                </InputField>
              </Row>
              <Row>
                <InputField
                  {...props.inputCity}
                  value={form1.id_city}
                  handleChange={onChange}
                >
                  <option value=''>--Seleccione--</option>
                  {cities.map((v,i) => (
                    <option value={v.id} key={i}>{v.name}</option>
                  ))}
                </InputField>
                <InputField
                  {...props.inputStreet}
                  value={form1.street}
                  handleChange={onChange}
                />
                <InputField
                  {...props.inputNumber}
                  value={form1.number}
                  handleChange={onChange}
                />
              </Row>
              <Row>
                <InputField
                  {...props.inputStage}
                  value={form1.stage}
                  handleChange={onChange}
                />
                <InputField
                  {...props.inputNumberLiving}
                  value={form1.number_living}
                  handleChange={onChange}
                />
                <InputField
                  {...props.inputDateMunicipalReception}
                  value={form1.date_municipal_reception}
                  handleChange={onChange}
                />
              </Row>
              <Row>
                <InputField
                  {...props.inputAcronym}
                  value={form1.acronym}
                  handleChange={onChange}
                />
                <InputField
                  {...props.inputTypeProyect}
                  value={form1.type_proyect}
                  handleChange={onChange}
                >
                  <option value=''>--Seleccione--</option>
                  <option value='1'>Extensión</option>
                  <option value='2'>Altura</option>
                  <option value='3'>Serviu</option>
                </InputField>
                <Col sm={4} md={4} lg={4}>
                  <br/>
                  <label for="block_mza">
                    <input type="checkbox" name="block_mza" id="block_mza" checked={form1.block_mza} onChange={onChange} />
                    &nbsp;
                    Con Block/Mza.
                  </label>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Card style={{borderColor: 'rgb(87, 154, 223)'}}>
                    <Card.Body>
                      <Tabs defaultActiveKey="email" id="uncontrolled-tab-example" variant="pills" id="aqui_esto">
                        <Tab eventKey="email" title="E-mails" >
                          <br/>
                          <Row>
                            <InputField
                              {...props.inputManagerPostventa}
                              value={form1.manager_postventa}
                              handleChange={onChange}
                            />
                            <Col sm={3} md={3} lg={3} xs={6}>
                              <br/>
                              <label for="check1_postventa">
                                <input id="check1_postventa" type="checkbox" name="manager_email" checked={form1.manager_email} onChange={onChange} />
                                &nbsp;Recibe Correo
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputAdminPostventa}
                              value={form1.admin_postventa !== 'null' ? form1.admin_postventa : ''}
                              handleChange={onChange}
                            />
                            <Col sm={3} md={3} lg={3} xs={6}>
                              <br/>
                              <label for="check2_postventa">
                                <input id="check2_postventa" type="checkbox" name="admin_email" checked={form1.admin_email} onChange={onChange} />
                                &nbsp;Recibe Correo
                              </label>
                            </Col>
                            <InputField
                              {...props.inputNameAdminPostventa}
                              value={form1.name_admin_postventa}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputPhoneAdminPostventa}
                              value={form1.phone_admin_postventa}
                              handleChange={onChange}
                            />
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputDirProyectPostventa}
                              value={form1.dir_proyect_postventa !== 'null' ? form1.dir_proyect_postventa : ''}
                              handleChange={onChange}
                            />
                            <Col sm={3} md={3} lg={3} xs={6}>
                              <br/>
                              <label for="check3_postventa">
                                <input id="check3_postventa" type="checkbox" name="dir_email" checked={form1.dir_email} onChange={onChange} />
                                &nbsp;Recibe Correo
                              </label>
                            </Col>
                            <InputField
                              {...props.inputNameDirProyectPostventa}
                              value={form1.name_dir_proyect_postventa}
                              handleChange={onChange}
                            />
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputOtherDestinatary}
                              value={form1.other_destinatary_postventa !== 'null' ? form1.other_destinatary_postventa : ''}
                              handleChange={onChange}
                            />
                            <Col sm={3} md={3} lg={3} xs={6}>
                              <br/>
                              <label for="check4_postventa">
                                <input id="check4_postventa" type="checkbox" name="other_email" checked={form1.other_email} onChange={onChange} />
                                &nbsp;Recibe Correo
                              </label>
                            </Col>
                          </Row>
                        </Tab>
                        <Tab eventKey="recinto_habitacional" title="Recinto x Conjunto Habitacional">
                          <br/>
                          <Row>
                            {precints.map((v,i) => (
                              <Col sm={3} md={3} lg={3} key={i}>
                                <label for={'check_'+v.name}>
                                  <input id={'check_'+v.name} type="checkbox" name="precint_housing_complexe" checked={!!form1.precint_by_housing_complexes.find(v1 => v1 == v.id )} value={v.id} onChange={onChangePrecintHousingComplexe} />
                                  &nbsp; {v.name}
                                </label>
                              </Col>
                            ))}
                          </Row>
                        </Tab>
                        <Tab eventKey="recinto_habitacional_by_model" title="Recinto x Modelo de Propiedad">
                          <br/>
                          <Row>
                            <Col sm={5} md={5} lg={5}>
                              <label>Modelos</label>
                              <select className="form-control" onChange={handleChangeSelectModel} value={form1.id_model_precint} value={form1.id_model_precint}>
                                <option value="">--Seleccione--</option>
                                {models.map((v,i) => (
                                  <option key={i} value={v.id}>{v.name}</option>
                                ))}
                              </select>
                            </Col>
                          </Row>
                          <br/>
                          {form1.id_model_precint ? (
                            <Row>
                              {precints.map((v,i) => (
                                <Col sm={3} md={3} lg={3} key={i}>
                                  <label forhtml={'check_'+v.name}>
                                    <input id={'check_'+v.name} type="checkbox" name="precint_by_housing_complexes_model" checked={!!form1.precint_by_housing_complexes_model.find(v1 => v1 == v.id )} value={v.id} onChange={onChangePrecintHousingComplexe} />
                                    &nbsp;{v.name}
                                  </label>
                                </Col>
                              ))}
                            </Row>
                          ) : ''}
                        </Tab>
                        <Tab eventKey="adjunt_data" title="Datos Adjuntos">
                          <Row>
                            <Col sm={4} md={4} lg={4} xs={4}>
                              <br/>
                              <Button variant="secondary" block={true} onClick={openFileInput}>Archivos Comunes</Button>
                              <input accept={props.config_ss ? props.config_ss.valid_format_documents : ''} type="file" name="file_adjunt" id="file_adjunt" style={{display: 'none'}} onChange={onChangeFile} />
                            </Col>
                            <Col sm={4} md={4} lg={4} xs={4}>
                              <br/>
                              {name_file_adjunt}
                            </Col>
                          </Row>
                          <br/>
                          <Row>
                            {fileAdjuntRegistered.map((v,i) => (
                              <React.Fragment>
                                <Button size="sm" variant="link" onClick={() => {downloadFile(v)} }>{ v.name }</Button>
                                <Button size="sm" variant="dark" onClick={() => {deleteFile(v)} }><FaTrash /></Button>
                              </React.Fragment>
                            ))}
                          </Row>
                        </Tab>
                        <Tab eventKey="hard_data" title="Datos Duros">
                          <Row>
                            <Col sm={4} md={4} lg={4} xs={4}>
                              <b>Se consideran las S.S emitidas hasta la fecha: { config ? moment(config.date_hard_data).format('DD-MM-YYYY') : ''} </b>
                            </Col>
                            <Col sm={4} md={4} lg={4} xs={4}>
                              <label for="hard_data_checkbox">
                                <input type="checkbox" id="hard_data_checkbox" name="hard_data" checked={form1.hard_data} onChange={onChange} />
                                &nbsp; Con Datos Duros
                              </label>
                            </Col>
                            <Col sm={4} md={4} lg={4} xs={4}>
                              <label for="hard_data_checkbox1">
                                <input type="checkbox" id="hard_data_checkbox1" name="hard_data_information_limit_date" checked={form1.hard_data_information_limit_date} onChange={onChange} />
                                &nbsp; Con información antes del {config ? handleShowYearHardData() : '' }
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={3} md={3} lg={3} xs={3} className="text-center">
                              <label for="totales_año_1">
                                <input type="checkbox" id="totales_año_1" name="totales_año_1" checked={form1.totales_año_1} onChange={onChange} />
                                <br/>
                                <b>TOTALES AÑO 1</b>
                              </label>
                            </Col>
                            <Col sm={3} md={3} lg={3} xs={3} className="text-center">
                              <label for="totales_año_2">
                                <input type="checkbox" id="totales_año_2" name="totales_año_2" checked={form1.totales_año_2} onChange={onChange} />
                                  <br/>
                                  <b>TOTALES AÑO 2</b>
                              </label>
                            </Col>
                            <Col sm={3} md={3} lg={3} xs={3} className="text-center">
                              <label for="totales_año_3">
                                <input type="checkbox" id="totales_año_3" name="totales_año_3" checked={form1.totales_año_3} onChange={onChange} />
                                  <br/>
                                  <b>TOTALES AÑO 3</b>
                              </label>
                            </Col>
                            <Col sm={3} md={3} lg={3} xs={3} className="text-center">
                              <label for="totales_año_4">
                                <input type="checkbox" id="totales_año_4" name="totales_año_4" checked={form1.totales_año_4} onChange={onChange} />
                                  <br/>
                                  <b>TOTALES AÑO 4</b>
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputSolicitudeYear1}
                              value={form1.solicitude_year_1}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputSolicitudeYear2}
                              value={form1.solicitude_year_2}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputSolicitudeYear3}
                              value={form1.solicitude_year_3}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputSolicitudeYear4}
                              value={form1.solicitude_year_4}
                              handleChange={onChange}
                            />
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputObservationYear1}
                              value={form1.observation_year_1}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputObservationYear2}
                              value={form1.observation_year_2}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputObservationYear3}
                              value={form1.observation_year_3}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputObservationYear4}
                              value={form1.observation_year_4}
                              handleChange={onChange}
                            />
                          </Row>
                        </Tab>
                        <Tab eventKey="admin_ss" title="Administración S.S">
                          <br/>
                          <Row>
                            <InputField
                              type='text'
                              required={false}
                              name='name_client_administration'
                              label ='Nombre:'
                              messageErrors={[]}
                              cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                              value={form1.name_client_administration}
                              handleChange={onChange}
                            />
                            <InputField
                              type='text'
                              required={false}
                              name='email_client_administration'
                              label ='Email:'
                              messageErrors={[]}
                              cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                              value={form1.email_client_administration}
                              handleChange={onChange}
                            />
                            <InputField
                              type='text'
                              required={false}
                              name='phone_client_administration'
                              label ='Telefono:'
                              messageErrors={[]}
                              cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                              value={form1.phone_client_administration}
                              handleChange={onChange}
                            />
                          </Row>
                          <Row>
                            <InputField
                              {...props.inputRutAdministrationClient}
                              value={form1.rut_administration_client}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputUserClientAdministration}
                              value={form1.user_client_administration}
                              handleChange={onChange}
                            />
                            <InputField
                              {...props.inputPasswordClientAdministration}
                              value={form1.password_client_administration}
                              handleChange={onChange}
                            />
                          </Row>
                        </Tab>
                      </Tabs>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4} xs={12}>
                  <br/>
                  <Button variant="primary" block={true} size="sm" type="submit">Guardar</Button>
                </Col>
                <Col sm={4} md={4} lg={4} xs={12}>
                  <br/>
                  <Button variant="info" block={true} size="sm" type="button" onClick={gotBackToTable}>Volver</Button>
                </Col>
              </Row>
            </Form>
        </Col>
      </Row>
    </Container>
  )
}

HousingComplexesForm.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Nombre',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputEnterprise: {
    type: 'select',
    required: true,
    name: 'id_enterprise',
    label : 'Empresa',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputCity: {
    type: 'select',
    required: true,
    name: 'id_city',
    label : 'Ciudad',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputStreet: {
    type: 'text',
    required: true,
    name: 'street',
    label : 'Calle',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputNumber: {
    type: 'number',
    required: true,
    name: 'number',
    label : 'Número',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputStage: {
    type: 'number',
    required: true,
    name: 'stage',
    label : 'Etapa',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputNumberLiving: {
    type: 'number',
    required: true,
    name: 'number_living',
    label : 'Cant.Viviendas',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputDateMunicipalReception: {
    type: 'date',
    required: false,
    name: 'date_municipal_reception',
    label : 'Fecha Recepción Municipal',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputAcronym: {
    type: 'text',
    required: false,
    name: 'acronym',
    label : 'Siglas',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputTypeProyect: {
    type: 'select',
    required: true,
    name: 'type_proyect',
    label : 'Tipo Proyecto',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputManagerPostventa: {
    type: 'email',
    required: true,
    name: 'manager_postventa',
    label : 'Encargado Postventa',
    messageErrors: [
      'Requerido*, ','Formato Email*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputAdminPostventa: {
    type: 'email',
    required: false,
    name: 'admin_postventa',
    label : 'Admin',
    messageErrors: [
      'Requerido*, ','Formato Email*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputNameAdminPostventa: {
    type: 'text',
    required: false,
    name: 'name_admin_postventa',
    label : 'Nombre',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputPhoneAdminPostventa: {
    type: 'number',
    required: false,
    name: 'phone_admin_postventa',
    label : 'Teléfono',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputDirProyectPostventa: {
    type: 'email',
    required: false,
    name: 'dir_proyect_postventa',
    label : 'Dir.Proyecto',
    messageErrors: [
      'Requerido*, ','Formato Email*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputNameDirProyectPostventa: {
    type: 'text',
    required: false,
    name: 'name_dir_proyect_postventa',
    label : 'Nombre',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputOtherDestinatary: {
    type: 'email',
    required: false,
    name: 'other_destinatary_postventa',
    label : 'Otro Destinatario',
    messageErrors: [
      'Requerido*, ','Formato Email*'
    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputSolicitudeYear1: {
    type: 'number',
    required: false,
    name: 'solicitude_year_1',
    label : 'Solicitudes',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputObservationYear1: {
    type: 'number',
    required: false,
    name: 'observation_year_1',
    label : 'Observaciones',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputSolicitudeYear2: {
    type: 'number',
    required: false,
    name: 'solicitude_year_2',
    label : 'Solicitudes',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputObservationYear2: {
    type: 'number',
    required: false,
    name: 'observation_year_2',
    label : 'Observaciones',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputSolicitudeYear3: {
    type: 'number',
    required: false,
    name: 'solicitude_year_3',
    label : 'Solicitudes',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputObservationYear3: {
    type: 'number',
    required: false,
    name: 'observation_year_3',
    label : 'Observaciones',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputSolicitudeYear4: {
    type: 'number',
    required: false,
    name: 'solicitude_year_4',
    label : 'Solicitudes',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputObservationYear4: {
    type: 'number',
    required: false,
    name: 'observation_year_4',
    label : 'Observaciones',
    messageErrors: [

    ],
    cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"
  },
  inputRutAdministrationClient: {
    type: 'number',
    required: false,
    name: 'rut_administration_client',
    label : 'RUT de cliente administración:',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputUserClientAdministration: {
    type: 'text',
    required: false,
    name: 'user_client_administration',
    label : 'Usuario:',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPasswordClientAdministration: {
    type: 'password',
    required: false,
    name: 'password_client_administration',
    label : 'Contraseña:',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

function mapStateToProps(state){
  return {
    config_ss : state.configs.config
  }
}

export default connect(mapStateToProps,{})(HousingComplexesForm)
