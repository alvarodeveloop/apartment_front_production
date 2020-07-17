import React, { useMemo, useState , useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Accordion,
  Card,
  Modal
} from 'react-bootstrap'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify';
import {
  FaPlusCircle,
  FaTrash
} from 'react-icons/fa'
import Table from 'components/Table'
import ClientFormComponent from 'components/ClientFormComponent'
import * as moment from 'moment-timezone'
let client_columns = []
let is_lesee = false

const OwnershipFormPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [housingComplexes, setHousingComplexes] = useState([])
  const [blocks, setBlocks] = useState([])
  const [typeOwnerships, setTypeOwnerships] = useState([])
  const [models, setModels] = useState([])
  const [name_ownership, setNameOwnership]  = useState('')
  const [name_lesee, setNameLesee]  = useState('')
  const [isCreateClient, setIsCreateClient] = useState(false)
  const [isOpenModalClient, setIsOpenModalClient] = useState(false)
  const [clientData, setClientData] = useState([])
  const [nameParking, setNameParking] = useState('')
  const [nameCeller, setNameCeller] = useState('')
  const [nameFile, setNameFile] = useState('')
  const [documentUpload, setDocumentUpload] = useState(null)
  const [data, setData] = useState({
    number:'',
    id_housing_complexe: '',
    id_block_mzna: '',
    id_type_ownership: '',
    number_rooms: '',
    number_bathrooms: '',
    address: '',
    square_mtr: '',
    id_models: '',
    date_signature_writing:'',
    date_inscription_conservative: '',
    date_delivery_ownership: '',
    id_client_ownership: '',
    id_client_lessee: '',
    file: '',
    parkings: [],
    cellars: [],
    user: '',
    password: '',
    file: '',
  })

  const inputRef = useRef(null)

  useEffect(() => {

    if(props.config_ss && Object.keys(props.config_ss).length > 0){
      fetchData()
      inputRef.current.focus()

      return () => {
        is_lesee = false
      }
    }else{
      toast.error('Debe hacer su configuración primero')
      setTimeout(function () {
        props.history.replace('/masters/config')
      }, 1000);
    }

  },[])

  useMemo(() => {

    client_columns = []

  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'master_block'),
      axios.get(API_URL+'master_models'),
      axios.get(API_URL+'type_ownership'),
      axios.get(API_URL+'client'),
    ]

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'masters_ownership/'+props.match.params.id)
      )
    }

    Promise.all(promises).then(result => {

      setHousingComplexes(result[0].data)
      setBlocks(result[1].data)
      setModels(result[2].data)
      setTypeOwnerships(result[3].data)
      setClientData(result[4].data)

      if(result[5]){
        setData({
          number:result[5].data.number,
          id_housing_complexe: result[5].data.id_housing_complexe,
          id_block_mzna: result[5].data.id_block_mzna,
          id_type_ownership: result[5].data.id_type_ownership,
          number_rooms: result[5].data.number_rooms,
          number_bathrooms: result[5].data.number_bathrooms,
          address: result[5].data.address,
          square_mtr: result[5].data.square_mtr,
          id_models: result[5].data.id_models,
          date_signature_writing: moment(result[5].data.date_signature_writing).format('YYYY-MM-DD'),
          date_inscription_conservative: moment(result[5].data.date_inscription_conservative).format('YYYY-MM-DD'),
          date_delivery_ownership: moment(result[5].data.date_delivery_ownership).format('YYYY-MM-DD'),
          id_client_ownership: result[5].data.id_client_ownership,
          id_client_lessee: result[5].data.id_client_lessee,
          file: result[5].data.file,
          parkings: result[5].data.parkings.length > 0 ? result[5].data.parkings.filter(v => v.type == 2).map(v => v.name) : [],
          cellars: result[5].data.parkings.length > 0 ? result[5].data.parkings.filter(v => v.type == 1).map(v => v.name) : [],
          user: result[5].data.user,
          password: '',
          id: result[5].data.id
        })
        setNameFile(result[5].data.file)
      }

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
    let val = e.target.value
    if(e.target.name === "id_client_lessee" || e.target.name === "id_client_ownership"){
      val = val ? val.split('-').join('') : val
      val = val ? val.substring(0,val.length - 1)+'-'+val.substring(val.length - 1) : val
      setData({...data, [e.target.name]: val})
    }else{
      setData({...data, [e.target.name]: e.target.value})
    }
  }

  const handleShowClientForm = (submit = false) => {
    if(submit){
      fetchData()
    }
    setIsCreateClient(!isCreateClient)
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
    let newFormData = new FormData
    Object.keys(data).forEach((v, i) => {
      newFormData.append(v,data[v])
    });

    if(documentUpload){
      newFormData.append('document',documentUpload)
    }


    if(objectPost.id){
      axios.put(API_URL+'masters_ownership/'+objectPost.id,newFormData).then(result => {
        toast.success('Registro Modificado')
        clearForm()
        setTimeout(function () {
          gotBackToTable()
        }, 1000);
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'masters_ownership',newFormData).then(result => {
        toast.success('Registro Creado')
        clearForm()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }

  }

  const gotBackToTable = () => {
    props.history.replace('/masters/ownerships')
  }

  const clearForm = () => {
    setData({
      number:'',
      id_housing_complexe: '',
      id_block_mzna: '',
      id_type_ownership: '',
      number_rooms: '',
      number_bathrooms: '',
      address: '',
      square_mtr: '',
      id_models: '',
      date_signature_writing:'',
      date_inscription_conservative: '',
      date_delivery_ownership: '',
      id_client_ownership: '',
      id_client_lessee: '',
      file: '',
      parkings: [],
      cellars: [],
      user: '',
      password: '',
      file: '',
    })
    setValidated(false)
    inputRef.current.focus()
    setNameOwnership('')
    setNameLesee('')
    setNameParking('')
    setNameCeller('')
    setNameFile('')
    setDocumentUpload(null)

  }

  const openModalClient = (type = false) => {

    if(type === "lesee"){
      is_lesee = true
    }else if(type === "ownership"){
      is_lesee = false
    }

    if(!isOpenModalClient){
        setIsCreateClient(false)
    }

    setIsOpenModalClient(!isOpenModalClient)
  }

  const clientSelected = value => {
    if(is_lesee){
      setData({...data, id_client_lessee: value.rut})
      setNameLesee(value.name+' '+value.last_names)
    }else{
      setData({...data, id_client_ownership: value.rut})
      setNameOwnership(value.name+' '+value.last_names)
    }
    setIsOpenModalClient(false)
  }

  const searchClientByRut = (e,type) => {
    let val = e.target.value
    let client = clientData.find(v => v.rut === val)
    if(client){
      if(type === "lesee"){
        setNameLesee(client.name+' '+client.last_names)
      }else{
        setNameOwnership(client.name+' '+client.last_names)
      }
    }

  }

  const pushParkingCeller = type => {
    if(type === "parking"){
      let val = document.getElementById('name_parking').value
      document.getElementById('name_parking').value = ''
      if(val){
        setData({...data, parkings: [...data.parkings,val] })
      }else{
        toast.error('El campo estacionamiento no puede estar vacio')
      }
    }else{
      let val = document.getElementById('name_celler').value
      document.getElementById('name_celler').value = ''
      if(val){
        setData({...data, cellars: [...data.cellars,val] })
      }else{
        toast.error('El campo bodega no puede estar vacio')
      }
    }

  }

  const removeParkinCellar = (type,val) => {
    if(type === "parking"){
      setData({...data, parkings:  data.parkings.filter(v => v !== val) })
    }else{
      setData({...data, cellars: data.cellars.filter(v => v !== val) })
    }
  }

  const openFileInput = () => {
    document.getElementById('input_document').click()
  }

  const onChangeFile = e => {
    if(props.config_ss.valid_format_documents.indexOf(e.target.files[0].type.split('/')[1]) !== -1){
      setDocumentUpload(e.target.files[0])
      setNameFile(e.target.files[0].name)
    }else{
      toast.error('El tipo de archivo no es valido')
      document.getElementById('input_document').value = ""
      document.getElementById('input_document').src = ""
    }
  }

  const deleteFile = file => {
    axios.delete(API_URL+'masters_ownership_destroy_file/'+file+'/'+data.id).then(result => {
      toast.success('Archivo eliminado')
      setData({...data, file: ''})
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                type='text'
                required={true}
                name='number'
                label='Número'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.number}
                handleChange={onChange}
                ref={inputRef}
              />
              <InputField
                type='select'
                required={true}
                name='id_housing_complexe'
                label='Conjunto Habitacional'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.id_housing_complexe}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {housingComplexes.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                type='select'
                required={true}
                name='id_type_ownership'
                label='Tipo Vivienda'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.id_type_ownership}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {typeOwnerships.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <InputField
                type='number'
                required={true}
                name='number_rooms'
                label='Cantidad. Dormitorios'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.number_rooms}
                handleChange={onChange}
              />
              <InputField
                type='number'
                required={true}
                name='number_bathrooms'
                label='Cantidad Baños'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.number_bathrooms}
                handleChange={onChange}
              />
              <InputField
                type='textarea'
                required={false}
                name='address'
                label='Dirección'
                rows={1}
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.address}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <InputField
                type='select'
                required={false}
                name='id_block_mzna'
                label='Block Mzna'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.id_block_mzna}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {blocks.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <InputField
                type='number'
                required={false}
                name='square_mtr'
                label='Metros Cuadrados'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-6 col-md-6 col-lg-6 col-xs-6"
                value={data.square_mtr}
                handleChange={onChange}
              />
              <InputField
                type='select'
                required={true}
                name='id_models'
                label='Modelo'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-6 col-md-6 col-lg-6 col-xs-6"
                value={data.id_models}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {models.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>

            </Row>
            <Row>
              <Col sm={5} md={5} lg={5}>
                <label><b>Bodega</b></label>
                <input
                  type='text'
                  name='name_celler'
                  label='Bodega'
                  id="name_celler"
                  className="form-control form-control-sm"
                  size="sm"
                />
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button type="button" variant="success" className="margin_col" size="sm" block={true} onClick={() => { pushParkingCeller('celler') } }><FaPlusCircle /></Button>
              </Col>
              <Col sm={5} md={5} lg={5}>
                <label><b>Estacionamiento</b></label>
                <input
                  type='text'
                  name='name_parking'
                  id="name_parking"
                  className="form-control form-control-sm"
                  size="sm"
                />
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button type="button" variant="success" className="margin_col" size="sm" block={true} onClick={() => { pushParkingCeller('parking') }}><FaPlusCircle /></Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <br/>
                {data.cellars.map((v,i) => (
                  <h6>{v} <Button variant="danger" size="sm" onClick={() => { removeParkinCellar('cellar',v) } }><FaTrash /></Button></h6>
                ))}
              </Col>
              <Col sm={6} md={6} lg={6}>
                <br/>
                {data.parkings.map((v,i) => (
                  <h6>{v} <Button variant="danger" size="sm" onClick={() => { removeParkinCellar('parking',v) } }><FaTrash /></Button></h6>
                ))}
              </Col>
            </Row>
            <br/>
            <Row>
              <InputField
                type='date'
                required={false}
                name='date_signature_writing'
                label='Fecha Firma Escritura'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.date_signature_writing}
                handleChange={onChange}
              />
              <InputField
                type='date'
                required={false}
                name='date_inscription_conservative'
                label='Fecha Inscripción Conservador'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.date_inscription_conservative}
                handleChange={onChange}
              />
              <InputField
                type='date'
                required={false}
                name='date_delivery_ownership'
                label='Fecha Entrega Propietario'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-4 col-md-4 col-lg-4 col-xs-4"
                value={data.date_delivery_ownership}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <Row>
                  <InputField
                    type='text'
                    required={true}
                    name='id_client_ownership'
                    label='Propietario'
                    messageErrors={[
                      'Requerido*'
                    ]}
                    cols="col-sm-12 col-md-12 col-lg-12 col-xs-12"
                    value={data.id_client_ownership}
                    handleChange={onChange}
                    handleOnBlur={(e) => {searchClientByRut(e,'ownership')}}
                    />
                </Row>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    {name_ownership ? (
                      <React.Fragment>
                        {name_ownership}
                        <br/><br/>
                      </React.Fragment>
                    ) : ''}
                  </Col>
                </Row>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button variant="info" className="margin_col" block={true} size="sm" onClick={(() => openModalClient('ownership') )}> <FaPlusCircle /> </Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Row>
                  <InputField
                    type='text'
                    required={false}
                    name='id_client_lessee'
                    label='Arrendatario:'
                    messageErrors={[
                      'Requerido*'
                    ]}
                    cols="col-sm-12 col-md-12 col-lg-12 col-xs-12"
                    value={data.id_client_lessee}
                    handleChange={onChange}
                    handleOnBlur={(e) => {searchClientByRut(e,'lesee')}}
                  />
                </Row>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    {name_lesee ? (
                      <React.Fragment>
                        {name_lesee}
                        <br/><br/>
                      </React.Fragment>
                    ) : ''}
                  </Col>
                </Row>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button variant="info" className="margin_col" block={true} size="sm" onClick={(() => openModalClient('lesee') )}> <FaPlusCircle /> </Button>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <h6 className="margin_col">Mail:</h6>
              </Col>
            </Row>
            <Row>
              <InputField
                type='text'
                required={true}
                name='user'
                label='Usuario Acceso (a sistema online):'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-6 col-md-6 col-lg-6"
                value={data.user}
                handleChange={onChange}
              />
              <InputField
                type='password'
                required={props.match.params.id ? false : true}
                name='password'
                label='Clave Acceso (a sistema online):'
                messageErrors={[
                  'Requerido*'
                ]}
                cols="col-sm-6 col-md-6 col-lg-6"
                value={data.password}
                handleChange={onChange}
              />
            </Row>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <Button block={true} size="sm" variant="secondary" onClick={openFileInput}>Documento Propietario</Button>
                <input accept={props.config_ss ? props.config_ss.valid_format_documents : ''} type="file" id="input_document" style={{ display: 'none'}} onChange={onChangeFile} />
              </Col>
              <Col sm={4} md={4} lg={4}>
                { nameFile ? nameFile : '' }
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                {nameFile ? (
                  <React.Fragment>
                    <b>{data.file}</b>&nbsp;&nbsp;<Button size="sm" variant="danger" type="button" onClick={() => deleteFile(data.file)}><FaTrash /></Button>
                  </React.Fragment>
                ) : ''}
              </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="primary" block={true}>Guardar</Button>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Button type="submit" size="sm" variant="danger" block={true} onClick={gotBackToTable}>Volver</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Modal
        show={isOpenModalClient}
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
    </Container>
  )
}

OwnershipFormPage.defaultProps = {
  inputNumber: {
    type: 'text',
    required: true,
    name: 'rut',
    label : 'Rut',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

function mapStateToProps(state){
  return {
    config_ss : state.configs.config
  }
}

export default connect(mapStateToProps,{})(OwnershipFormPage)
