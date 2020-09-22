import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Card
} from 'react-bootstrap'
import {
  FaPlusCircle,
  FaTrash,
  FaRegCheckCircle,
  FaSearch
} from 'react-icons/fa'
import 'styles/pages/requestPropertyForm.css'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { toast } from 'react-toastify';
import axios from 'axios'
import { API_URL } from 'utils/constants'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import 'styles/pages/deliverys.css'
import ModalFollowingTaskComponent from 'components/ModalFollowingTaskComponent'
import { following_columns } from 'utils/columns/followingColumns'
import ModalAnulateDeliveryComponent from 'components/ModalAnulateDeliveryComponent'
import ModalCloseDeliveryComponent from 'components/ModalCloseDeliveryComponent'
import FileSaver from 'file-saver'
import ClientFormComponent from 'components/ClientFormComponent'
let failureColumns = []


const ManagementDeliveryFormPage = (props) => {

  const [data, setData] = useState({
    id_housing_complexe: '',
    id_ownership: '',
    rut_ownership_client: '',
    rut_deputy: '',
    name_deputy: '',
    id_city: '',
    parkings: [],
    cellars: [],
    date_request: moment().tz('America/Santiago').format('YYYY-MM-DD'),
    name_file: '',
    file: null,
    date_v_b_client: '',
    date_solution_observation: '',
    number_electricity: '',
    reading_electricity: '',
    number_water: '',
    reading_water: '',
    number_gas: '',
    reading_gas: '',
    date_delivery_key: '',
    note: '',
    date_close_delivery: '',
    reason_anulate: '',
    id_status: 7,
    id: '',
  })

  const [data1, setData1] = useState({
    description : '',
    id_precint: '',
    id_related_failure: '',
    id_tipology_failure: '',
    id_point_failure: ''
  })

  const [housings,setHousings] = useState([])
  const [ownerships,setOwnerships] = useState([])
  const [ownershipSelected, setOwnershipSelected] = useState({})
  const [citys, setCitys] = useState([])
  const [validated,setValidated] = useState(false)
  const [precints, setPrecints] = useState([])
  const [relatedFailures, setRelatedFailures] = useState([])
  const [pointFailures, setPointFailures] = useState([])
  const [tipologyFailures, setTipologyFailures] = useState([])
  const [failureData, setFailureData] = useState([])
  const [isOpenModalFailure, setIsOpenModalFailure] = useState(false)
  const [onlyRead, setOnlyRead] = useState(false)
  const inputRef = useRef(null)
  const [registerUpdate,setRegisterUpdate] = useState({})
  const [isOpenModalFollowing,setIsOpenModalFollowing] = useState(false)
  const [isOpenModalAnulate,setIsOpenModalAnulate] = useState(false)
  const [isOpenModalCloseDelivery,setIsOpenModalCloseDelivery] = useState(false)
  const [disabledButtons,setDisableButtons] = useState(false)
  const [isOpenModal,setIsOpenModal] = useState(false)
  const [nameClientRequest, setNameClientRequest] = useState('')
  const [clientData, setClientData] = useState([])
  const [isCreateClient, setIsCreateClient] = useState(false)

  useEffect(() => {
    if(props.config_ss && Object.keys(props.config_ss).length > 0){
      fetchData(true)
      removeAllFailuresByIp()
      inputRef.current.focus()
    }else{
      toast.error('Debe hacer su configuración primero')
      setTimeout(function () {
        props.history.replace('/masters/config')
      }, 1000);
    }
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
    ]
    if(!props.match.params.id){
      failureColumns.push({
        Header: 'Acción',
        Cell: props1 => {

          const original = props1.cell.row.original

          return (
            <Button variant="danger" block={true} onClick={() => removeFailure(original.id)}>Remover</Button>
          )
        }
      })
    }

  },[])

  const removeAllFailuresByIp = () => {
    axios.delete(API_URL+'failures_delivery_by_ip').then(result => {
      console.log('registros borrados');
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })

  }

  const fetchData = (type = false) => {

    let promises = []

    if(type = true){
      promises = [
        axios.get(API_URL+'housing_complexe'),
        axios.get(API_URL+'master_cities'),
        axios.get(API_URL+'master_precint'),
        axios.get(API_URL+'params_manage_problems_tipology_by_type/'+1),
        axios.get(API_URL+'params_manage_problems_related_failures'),
        axios.get(API_URL+'client'),
      ]
    }

    if(props.match.params.id){
      promises.push(
        axios.get(API_URL+'delivery/'+props.match.params.id)
      )
    }

    Promise.all(promises).then(result => {
      if(type){
        setHousings(result[0].data)
        setCitys(result[1].data)
        setPrecints(result[2].data)
        setTipologyFailures(result[3].data)
        setRelatedFailures(result[4].data)
        setClientData(result[5].data)
        if(props.match.params.id){
          setData({
            id_housing_complexe: result[6].data.id_housing_complexe,
            id_ownership: result[6].data.id_ownership,
            date_request: moment(result[6].data.date_request).format('YYYY-MM-DD'),
            rut_ownership_client: result[6].data.rut_ownership_client,
            rut_deputy: result[6].data.rut_deputy,
            name_deputy: result[6].data.name_deputy,
            id_city: result[6].data.id_city,
            parkings: result[6].data.parkings.filter(v => v.type == 2).map(v => v.name),
            cellars: result[6].data.parkings.filter(v => v.type == 1).map(v => v.name),
            name_file: result[6].data.name_file,
            file: null,
            date_v_b_client: result[6].data.date_v_b_client ? moment(result[6].data.date_v_b_client).format('YYYY-MM-DD') : '',
            date_solution_observation: result[6].data.date_solution_observation ? moment(result[6].data.date_solution_observation).format('YYYY-MM-DD') : '',
            number_electricity: result[6].data.number_electricity,
            reading_electricity: result[6].data.reading_electricity,
            number_water: result[6].data.number_water,
            reading_water: result[6].data.reading_water,
            number_gas: result[6].data.number_gas,
            reading_gas: result[6].data.reading_gas,
            date_delivery_key: result[6].data.date_delivery_key ? moment(result[6].data.date_delivery_key).format('YYYY-MM-DD') : '',
            note: result[6].data.note,
            date_close_delivery: result[6].data.date_close_delivery ? moment(result[6].data.date_close_delivery).format('YYYY-MM-DD') : '',
            id: result[6].data.id,
            id_status: result[6].data.id_status,
            reason_anulate: result[6].data.reason_anulate
          })
          setRegisterUpdate(result[6].data)

          setOnlyRead(true)
        }

      }else{

        if(props.match.params.id){
          setData({
            id_housing_complexe: result[0].data.id_housing_complexe,
            id_ownership: result[0].data.id_ownership,
            date_request: moment(result[0].data.date_request).format('YYYY-MM-DD'),
            rut_ownership_client: result[0].data.rut_ownership_client,
            rut_deputy: result[0].data.rut_deputy,
            name_deputy: result[0].data.name_deputy,
            id_city: result[0].data.id_city,
            parkings: result[0].data.parkings.filter(v => v.type == 2).map(v => v.name),
            cellars: result[0].data.parkings.filter(v => v.type == 1).map(v => v.name),
            name_file: result[0].data.name_file,
            file: null,
            date_v_b_client: result[0].data.date_v_b_client ? moment(result[0].data.date_v_b_client).format('YYYY-MM-DD') : '',
            date_solution_observation: result[0].data.date_solution_observation ? moment(result[0].data.date_solution_observation).format('YYYY-MM-DD') : '',
            number_electricity: result[0].data.number_electricity,
            reading_electricity: result[0].data.reading_electricity,
            number_water: result[0].data.number_water,
            reading_water: result[0].data.reading_water,
            number_gas: result[0].data.number_gas,
            reading_gas: result[0].data.reading_gas,
            date_delivery_key: result[0].data.date_delivery_key ? moment(result[0].data.date_delivery_key).format('YYYY-MM-DD') : '',
            note: result[0].data.note,
            date_close_delivery: result[0].data.date_close_delivery ? moment(result[0].data.date_close_delivery).format('YYYY-MM-DD') : '',
            id: result[5].data.id
          })
          setRegisterUpdate(result[0].data)
          setOnlyRead(true)
        }

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

  const removeFailure = id => {
    axios.delete(API_URL+'delivery_failure/'+id).then(result => {
      getFailures()
      toast.success('Falla eliminada')
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const openModalFailure = () => {
    setIsOpenModalFailure(!isOpenModalFailure)
  }

  const get_ownerships = id_housing => {
    axios.get(API_URL+'masters_ownership_by_housing_complexe/'+id_housing).then(result => {
      setOwnerships(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
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
        case "fecha_emision":
          val = moment(data.date_request).format('DD-MM-YYYY')
        break;
        case "fecha_limite_cierre":
          val = Object.keys(registerUpdate).length > 0  ? registerUpdate.date_limit_close ? moment(registerUpdate.date_limit_close).format('DD-MM-YYYY') : '-' : '-'
        break;
        case "fecha_cierre":
          val = Object.keys(registerUpdate).length > 0  ? registerUpdate.date_close ? moment(registerUpdate.date_close).format('DD-MM-YYYY') : '-' : '-'
        break;
        case "dias_atraso":
          val = '-'
        break;
        case "estado":
          val = Object.keys(registerUpdate).length > 0 ? registerUpdate.status.status : '-'
        break;
      }

      return val
    }else{
      return '-'
    }
  }

  const onChange = e => {
    e.persist()
    if(e.target.name === "id_housing_complexe"){
      get_ownerships(e.target.value)
      setData({...data, id_ownership: '', [e.target.name]: e.target.value})
    }else if(e.target.name === "id_ownership"){
      displayOwnershipProperty(e.target.value)
    }else if(e.target.name === "input_file"){
      if(props.config_ss.valid_format_documents.indexOf(e.target.files[0].type.split('/')[1]) !== -1){
        setData({...data, file: e.target.files[0], name_file: e.target.files[0].name })
      }else{
        toast.error('El tipo de archivo no es valido')
        document.getElementById('input_file').value = ""
        document.getElementById('input_file').src = ""
      }
    }else{
      setData({...data, [e.target.name]: e.target.value})

    }
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
      id_delivery: null
    })
    axios.post(API_URL+'delivery_failure',objectPost).then(result => {
      clearForm1()
      getFailures()
      toast.success('Falla Agregada')
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange1 = e => {
    e.persist()
    if(e.target.name === "id_housing_complexe"){
      get_ownerships(e.target.value)
      setData({...data, id_ownership: '', [e.target.name]: e.target.value})
    }else if(e.target.name === "id_ownership"){
      displayOwnershipProperty(e.target.value)
    }else{
      setData({...data, [e.target.name]: e.target.value})
    }
  }

  const onChange2 = e => {
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

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},data)
    let formData = new FormData
    Object.keys(objectPost).forEach((v, i) => {
      formData.append(v,objectPost[v])
    });


    if(objectPost.id){
      axios.put(API_URL+'delivery/'+objectPost.id,formData).then(result => {
        toast.success('Registro Modificado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'delivery',formData).then(result => {
        toast.success('Registro Creado')
        fetchData()
        clearForm()
        inputRef.current.focus()
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

  const clearForm = () => {
    setData({
      id_housing_complexe: '',
      id_ownership: '',
      date_request: '',
      rut_ownership_client: '',
      rut_deputy: '',
      name_deputy: '',
      id_city: '',
      parkings: [],
      cellars: [],
      date_request: moment().tz('America/Santiago').format('YYYY-MM-DD'),
      name_file: '',
      file: null,
      date_v_b_client: '',
      date_solution_observation: '',
      number_electricity: '',
      reading_electricity: '',
      number_water: '',
      reading_water: '',
      number_gas: '',
      reading_gas: '',
      date_delivery_key: '',
      note: '',
      date_close_delivery: '',
      reason_anulate: '',
      id_status: 7,
      id: '',
    })
    setValidated(false)
    setOwnershipSelected({})
  }

  const displayOwnershipProperty = id_ownership => {
    let owner = ownerships.find(v => v.id == id_ownership)
    setOwnershipSelected(owner)
    if(owner.ownership_client){
      setNameClientRequest(owner.ownership_client.name+' '+owner.ownership_client.last_names)
    }
    setData({...data, id_ownership, rut_ownership_client: owner.id_client_ownership})
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

  const clearForm1 = () => {
    setData1({
      description : '',
      id_precint: '',
      id_related_failure: '',
      id_tipology_failure: '',
      id_point_failure: ''
    })
  }

  const getFailures = () => {
    if(props.match.params.id){
      axios.get(API_URL+'delivery_failures/'+props.match.params.id).then(result => {
        setFailureData(result.data)
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })

    }else{
      axios.get(API_URL+'delivery_failures').then(result => {
        setFailureData(result.data)
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

  const openFileInput = () => {
    document.getElementById('input_file').click()
  }

  const cleanInput = () => {
    if(data.id && !data.file){
      axios.delete(API_URL+'delivery_delete_file/'+data.id).then(result => {
        toast.success('Archivo Eliminado')
        setData( propsData => {
          return Object.assign({},data,{
            name_file: '',
          })
        })
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          console.log(err);
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      setData( propsData => {
        return Object.assign({},data,{
          name_file: '',
          file: null
        })
      })
      document.getElementById('input_file').value = ""
      document.getElementById('input_file').src = ""
    }

  }

  const openModalFollowing = () => {
    setIsOpenModalFollowing(!isOpenModalFollowing)
  }

  const openModalAnulate = () => {
    setIsOpenModalAnulate(!isOpenModalAnulate)
  }

  const handleSubmitFollowing = dataFollowing => {
    return new Promise((resolved,rejected) => {
      dataFollowing.id_delivery = props.match.params.id
      axios.post(API_URL+'delivery_following',dataFollowing).then(result => {
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

  const handleSubmitAnulate = dataAnulate => {
    return new Promise((resolved,rejected) => {
      axios.put(API_URL+'delivery_anulate/'+data.id,dataAnulate).then(result => {
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

  const handleSubmitCloseDelivery = dataClose => {
    return new Promise((resolved,rejected) => {
      axios.put(API_URL+'delivery_close/'+data.id,dataClose).then(result => {
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

  const goToTable = () => {
    props.history.replace('/delivery/management')
  }

  const openModalCloseDelivery = () => {
    setIsOpenModalCloseDelivery(!isOpenModalCloseDelivery)
  }

  const print_acta = () => {
    setDisableButtons(true)
    axios.get(API_URL+'delivery_print_acta/'+props.match.params.id,{
      responseType: 'blob'
    }).then(result => {
      setDisableButtons(false)
      FileSaver.saveAs(result.data,'acta_entrega.pdf')
    }).catch(err => {
      setDisableButtons(false)
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const print_observation = () => {
    setDisableButtons(true)
    axios.get(API_URL+'delivery_print_observation/'+props.match.params.id,{
      responseType: 'blob'
    }).then(result => {
      setDisableButtons(false)
      FileSaver.saveAs(result.data,'observaciones.pdf')
    }).catch(err => {
      setDisableButtons(false)
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const send_observation = () => {
    setDisableButtons(true)
    axios.get(API_URL+'delivery_send_observation/'+props.match.params.id).then(result => {
      setDisableButtons(false)
      toast.success('Obseraciones Enviadas')
    }).catch(err => {
      setDisableButtons(false)
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const sendActa = () => {
    setDisableButtons(true)
    axios.get(API_URL+'delivery_send_acta/'+props.match.params.id).then(result => {
      setDisableButtons(false)
      toast.success('Acta entregada a los destinatarios')
    }).catch(err => {
      setDisableButtons(false)
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const openModalClient = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleShowClientForm = (submit = false) => {
    if(submit){
      fetchData()
    }
    setIsCreateClient(!isCreateClient)
  }

  const clientSelected = dataClient => {
    setData({...data, rut_ownership_client: dataClient.rut})
    setNameClientRequest(dataClient.name+' '+dataClient.last_names)
    setIsOpenModal(false)
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>

            <Row>
              <Col sm={6} md={6} lg={6}>
                <h4 style={{ textDecoration: 'underline'}} className="title_principal text-center">Acta de Entrega</h4>
                <Row style={{paddingTop: '3px'}} className="justify-content-center">
                  <Col sm={3} md={3} lg={3}>
                    <b>Número:</b>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <div className="div_number subrayado">
                        { displayData('number') }
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <div style={{ paddingTop: '30px'}}><b>Fecha Emisión:</b></div>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <InputField
                          type="date"
                          label=""
                          required={false}
                          messageErrors={[
                            'Requerido*'
                          ]}
                          name="date_request"
                          handleChange={onChange}
                          value={data.date_request}
                          cols="col-md-12 col-lg-12 col-sm-12"
                          readonly={onlyRead}
                        />
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Límite Cierre:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('fecha_limite_cierre') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Fecha Cierre:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('fecha_cierre') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Días Atraso:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('dias_atraso') }
                        </div>
                      </Col>
                    </Row>
                    <Row style={{paddingBottom: '3px'}}>
                      <Col sm={6} md={6} lg={6}>
                        <b>Estado:</b>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div className="div_number subrayado">
                          { displayData('estado') }
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col> { /* fin del col */ }
            </Row> { /* fin del row principal del titulo y las fechas */ }
            <br/>
            <Row>
              <InputFieldRef
                type="select"
                name="id_housing_complexe"
                label="Proyecto"
                required={true}
                cols="col-md-3 col-sm-3 col-lg-3"
                messageErrors={[
                  'Requerido*'
                ]}
                value={data.id_housing_complexe}
                handleChange={onChange}
                ref={inputRef}
                disabled={onlyRead}
              >
                <option value="">--Seleccione--</option>
                {housings.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputFieldRef>
              <InputField
                type="select"
                name="id_ownership"
                label="Propiedad"
                required={true}
                cols="col-md-3 col-sm-3 col-lg-3"
                messageErrors={[
                  'Requerido*'
                ]}
                value={data.id_ownership}
                handleChange={onChange}
                disabled={onlyRead}
              >
                <option value="">--Seleccione--</option>
                {ownerships.map((v,i) => (
                  <option value={v.id} key={i}>{v.number}</option>
                ))}
              </InputField>
              <Col sm={3} md={3} lg={3}>
                <Row>
                  <InputField
                    type="text"
                    name="rut_ownership_client"
                    readonly={true}
                    label="Propietario"
                    required={true}
                    cols="col-md-12 col-sm-12 col-lg-12"
                    messageErrors={[
                      ''
                    ]}
                    value={data.rut_ownership_client}
                    handleChange={onChange}
                    readonly={onlyRead}
                  />
                </Row>
                {Object.keys(ownershipSelected).length > 0 ? (
                  <>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <b>Nombre Cliente:</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <br/>
                        <h6 style={{ borderBottom: '1px solid black'}}>{nameClientRequest}</h6>
                      </Col>
                    </Row>
                  </>
                ) : ''}

              </Col>
              <Col sm={3} md={3} lg={3}>
                <br/>
                <Button variant="secondary" onClick={openModalClient}><FaSearch/></Button>
                <br/><br/>
                {Object.keys(ownershipSelected).length > 0 ? (
                  <React.Fragment>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <b>Tipo de Propiedad:</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h6 style={{ borderBottom: '1px solid black', paddingTop: '10px'}}>{ownershipSelected.typeOwnership.name}</h6>
                      </Col>
                    </Row>
                  </React.Fragment>
                ) : ''}
              </Col>
            </Row>
            <Row>
              <InputField
                type="text"
                name="rut_deputy"
                label="Rut Representante"
                required={false}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
                value={data.rut_deputy}
                handleChange={onChange}
                readonly={onlyRead}
              />
              <InputField
                type="text"
                name="name_deputy"
                label="Nombre Representante"
                required={false}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
                value={data.name_deputy}
                handleChange={onChange}
                readonly={onlyRead}
              />
              <InputField
                type="select"
                name="id_city"
                label="Ciudad:"
                required={true}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*'
                ]}
                value={data.id_city}
                handleChange={onChange}
                disabled={onlyRead}
              >
                <option value="">--Seleccione--</option>
                {citys.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <h5 className="title_principal">Ingreso de Bodegas y Estacionamiento</h5>
                <br/>
              </Col>
              <Col sm={5} md={5} lg={5}>
                <label><b>Bodega</b></label>
                <input
                  type='text'
                  name='name_celler'
                  label='Bodega'
                  id="name_celler"
                  className="form-control form-control-sm"
                  size="sm"
                  readOnly={onlyRead}
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
                  readOnly={onlyRead}
                />
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button type="button" variant="success" className="margin_col" size="sm" block={true} onClick={() => { pushParkingCeller('parking') }}><FaPlusCircle /></Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={6} lg={6} className="div_bodega_parking">
                <br/>
                <ul className="list-group">
                  {data.cellars.map((v,i) => (

                    <li className="list-group-item" key={i}>{v} <Button style={{ display: props.match.params.id ? 'none' : 'inline'}} variant="danger" size="sm" onClick={() => { removeParkinCellar('cellar',v) } }><FaTrash /></Button></li>
                  ))}
                </ul>
              </Col>
              <Col sm={6} md={6} lg={6} className="div_bodega_parking">
                <br/>
                <ul className="list-group">
                  {data.parkings.map((v,i) => (
                    <li className="list-group-item" key={i}>{v} <Button style={{ display: props.match.params.id ? 'none' : 'inline'}} variant="danger" size="sm" onClick={() => { removeParkinCellar('parking',v) } }><FaTrash /></Button></li>
                  ))}
                </ul>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <Card>
                  <Card.Header style={{ backgroundColor: 'rgb(95, 104, 228)'}}>
                    <Card.Title className="text-center" style={{color: 'white'}}>
                      Proceso de Levantamiento y Gestión de Observaciones
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h5 className="title_principal">INGRESO DE FALLAS:</h5>
                        <hr/>
                          <Row>
                            <InputField
                              type='select'
                              required={false}
                              name='id_precint'
                              label='Recinto:'
                              messageErrors= {[
                                'Requerido*'
                              ]}
                              cols="col-sm-3 col-md-3 col-lg-3 col-xs-3"
                              value={data1.id_precint}
                              handleChange={onChange2}
                              disabled={onlyRead}
                            >
                              <option value="">--Seleccione--</option>
                              {precints.map((v,i) => (
                                <option value={v.id} key={i}>{v.name}</option>
                              ))}
                            </InputField>
                            <InputField
                              type='select'
                              required={false}
                              name='id_related_failure'
                              label='Relacione su Falla con:'
                              messageErrors={[
                                'Requerido*'
                              ]}
                              cols="col-sm-3 col-md-3 col-lg-3 col-xs-3"
                              value={data1.id_related_failure}
                              handleChange={onChange2}
                              disabled={onlyRead}
                            >
                              <option value="">--Seleccione--</option>
                              {relatedFailures.map((v,i) => (
                                <option value={v.id} key={i}>{v.name}</option>
                              ))}
                            </InputField>
                            <InputField
                              type='select'
                              required={false}
                              name='id_tipology_failure'
                              label='Tipología de Falla:'
                              messageErrors={[
                                'Requerido*'
                              ]}
                              cols="col-sm-3 col-md-3 col-lg-3 col-xs-3"
                              value={data1.id_tipology_failure}
                              handleChange={onChange2}
                              disabled={onlyRead}
                            >
                              <option value="">--Seleccione--</option>
                              {tipologyFailures.map((v,i) => (
                                <option value={v.id} key={i}>{v.name}</option>
                              ))}
                            </InputField>
                            <InputField
                              type='select'
                              required={false}
                              name='id_point_failure'
                              label='Falla Puntual:'
                              messageErrors={[
                                'Requerido*'
                              ]}
                              cols="col-sm-3 col-md-3 col-lg-3 col-xs-3"
                              value={data1.id_point_failure}
                              handleChange={onChange2}
                              disabled={onlyRead}
                            >
                              <option value="">--Seleccione--</option>
                              {pointFailures.map((v,i) => (
                                <option value={v.id} key={i}>{v.name}</option>
                              ))}
                            </InputField>
                          </Row>
                          <Row>
                            <InputField
                              type='textarea'
                              required={false}
                              name='description'
                              label='Descripción de la Falla:'
                              messageErrors={[
                                'Requerido*'
                              ]}
                              cols="col-sm-12 col-md-12 col-lg-12 col-xs-12"
                              value={data1.description}
                              handleChange={onChange2}
                              readonly={onlyRead}
                              />
                            <Col sm={8} md={8} lg={8}>
                            </Col>

                            <Col sm={2} md={2} lg={2}>
                              {Object.keys(registerUpdate).length > 0 ? ''  : (
                                <Button size="sm" variant="danger" block={true} type="button" onClick={openModalFailure}>Ver fallas</Button>
                              )}
                            </Col>
                            <Col sm={2} md={2} lg={2}>
                              {Object.keys(registerUpdate).length > 0 ? ''  : (
                                <Button variant="secondary" block={true} type="button" size="sm" onClick={addFailure}>Agregar <FaRegCheckCircle /></Button>
                              )}
                            </Col>
                          </Row>
                      </Col>
                    </Row>
                    {props.match.params.id > 0 ? (
                      <React.Fragment>
                        { Object.keys(registerUpdate).length > 0 && registerUpdate.failures.length > 0 ? (
                          <Row>
                            <Col sm={12} md={12} lg={12}>
                              <br/>
                              <h5 className="text-center title_principal">Fallas Registradas</h5>
                              <Table columns={failureColumns} data={registerUpdate.failures}  />
                            </Col>
                          </Row>
                        ): ''}
                        <Row>
                          <Col sm={12} md={12} lg={12}>
                            <hr/>
                            {registerUpdate.id_status != 5 && registerUpdate.id_status != 6 ? (
                              <h5 className="text-center title_principal"><a href="javascript:void(0)" onClick={openModalFollowing}>Agregar Seguimiento</a></h5>
                            ) : (
                              <h5 className="text-center title_principal">Seguimientos Agregados</h5>
                            )}
                            <Table columns={following_columns} data={registerUpdate.followings ? registerUpdate.followings : []} letrasChicas={true}/>
                            <hr/>
                          </Col>
                        </Row>
                      </React.Fragment>
                    ) : ''}
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h5 className="title_principal">Solución a Observaciones:</h5>
                        <hr/>
                      </Col>
                      <InputField
                        type="date"
                        label="Fecha de solución a observaciones"
                        required={false}
                        cols="col-md-6 col-sm-6 col-lg-6"
                        name="date_solution_observation"
                        messageErrors={[
                          'Requerido*'
                        ]}
                        handleChange={onChange}
                        value={data.date_solution_observation}
                      />
                      <InputField
                        type="date"
                        label="Fecha V°B° de Cliente"
                        required={false}
                        cols="col-md-6 col-sm-6 col-lg-6"
                        name="date_v_b_client"
                        messageErrors={[
                          'Requerido*'
                        ]}
                        handleChange={onChange}
                        value={data.date_v_b_client}
                      />
                    </Row>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header style={{ backgroundColor: 'rgb(95, 104, 228)'}}>
                    <Card.Title className="text-center" style={{color: 'white'}}>
                      PROCESO DE ENTREGA DEFINITIVA
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h5 className="title_principal">Estado de Medidores</h5>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} md={4} lg={4}>
                        <b>a) Eléctricidad</b>
                      </Col>
                      <InputField
                        type="text"
                        name="number_electricity"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Número"
                        handleChange={onChange}
                        value={data.number_electricity}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                      <InputField
                        type="text"
                        name="reading_electricity"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Lectura"
                        handleChange={onChange}
                        value={data.reading_electricity}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                    </Row>
                    <Row>
                      <Col sm={4} md={4} lg={4}>
                        <b>b) Agua Potable</b>
                      </Col>
                      <InputField
                        type="text"
                        name="number_water"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Número"
                        handleChange={onChange}
                        value={data.number_water}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                      <InputField
                        type="text"
                        name="reading_water"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Lectura"
                        handleChange={onChange}
                        value={data.reading_water}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                    </Row>
                    <Row>
                      <Col sm={4} md={4} lg={4}>
                        <b>c) Gas</b>
                      </Col>
                      <InputField
                        type="text"
                        name="number_gas"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Número"
                        handleChange={onChange}
                        value={data.number_gas}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                      <InputField
                        type="text"
                        name="reading_gas"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Lectura"
                        handleChange={onChange}
                        value={data.reading_gas}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h5 className="title_principal">Adjuntos:</h5>
                        <hr/>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} md={4} lg={4}>
                        <Button variant="secondary" block={true} size="sm" type="button" onClick={openFileInput}>Seleccionar Adjunto</Button>
                        <input accept={props.config_ss ? props.config_ss.valid_format_documents : ''} type="file" name="input_file" id="input_file" style={{ display: 'none'}} onChange={onChange} />
                      </Col>
                      <Col sm={4} md={4} lg={4}>
                        { data.name_file ? (
                          <React.Fragment>
                            <b>{data.name_file}</b>&nbsp;
                            {(Object.keys(registerUpdate).length > 0) && ( registerUpdate.id_status == 5 || registerUpdate.id_status == 6) ? '' : (
                              <Button size="sm" variant="danger" onClick={cleanInput}><FaTrash /></Button>
                            )}
                          </React.Fragment>
                        ) : ''}
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <InputField
                        type="textarea"
                        name="note"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Nota (uso interno):"
                        handleChange={onChange}
                        value={data.note}
                        cols="col-md-12 col-sm-12 col-lg-12"
                        rows={2}
                      />
                    </Row>
                    <hr/>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h5 className="title_principal">Entrega de llaves y cierre de proceso de entrega</h5>
                        <hr/>
                      </Col>
                      <InputField
                        type="date"
                        name="date_delivery_key"
                        required={false}
                        messageErrors={[
                          ''
                        ]}
                        label="Fecha Entrega de Llaves:"
                        handleChange={onChange}
                        value={data.date_delivery_key}
                        cols="col-md-4 col-sm-4 col-lg-4"
                      />
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
            {data.id ? (
              <React.Fragment>
                {data.id_status == 6 ? (
                  <Row className="justify-content-center">
                    <Col sm={3} md={3} lg={3}>
                      <Button type="button" variant="danger" block={true} size="sm" onClick={goToTable}>Volver</Button>
                    </Col>
                  </Row>

                ) : data.id_status == 5 ? (
                  <Row className="justify-content-center">
                    <Col sm={2} md={2} lg={2}>
                      <Button onClick={sendActa} disabled={disabledButtons} type="button" variant="secondary" block={true} size="sm">Enviar Acta</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button disabled={disabledButtons} type="button" onClick={print_acta} variant="secondary" block={true} size="sm">Imprimir Acta</Button>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                      <Button disabled={disabledButtons} type="button" variant="secondary" block={true} size="sm" onClick={send_observation}>Enviar Observaciones</Button>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                      <Button disabled={disabledButtons} type="button" variant="secondary" block={true} size="sm" onClick={print_observation}>Imprimir Observaciones</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button disabled={disabledButtons} type="button" variant="danger" block={true} size="sm" onClick={goToTable}>Volver</Button>
                    </Col>
                    {disabledButtons ? (
                      <Col sm={12} md={12} lg={12}>
                        <br/>
                        <p className="alert alert-danger text-center">Realizando Operaciones...</p>
                      </Col>
                    ) : ''}
                  </Row>
                ) : (
                  <Row className="justify-content-center">
                    <Col sm={2} md={2} lg={2}>
                      <Button type="submit" variant="secondary" block={true} size="sm">Guardar</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button type="button" onClick={openModalAnulate} variant="secondary" block={true} size="sm">Anular</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button disabled={disabledButtons} type="button" variant="secondary" block={true} size="sm" onClick={send_observation}>Enviar Observaciones</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button disabled={disabledButtons} type="button" variant="secondary" block={true} size="sm" onClick={print_observation}>Imprimir Observaciones</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button type="button" variant="secondary" onClick={openModalCloseDelivery} block={true} size="sm">Cerrar Entrega</Button>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                      <Button type="button" variant="danger" block={true} size="sm" onClick={goToTable}>Volver</Button>
                    </Col>
                  </Row>
                )}
              </React.Fragment>
            ) : (
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4}>
                  <Button type="submit" variant="primary" block={true} size="sm">Guardar</Button>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <Button type="button" variant="danger" block={true} size="sm" onClick={goToTable}>Volver al Menú de Entrega</Button>
                </Col>
              </Row>
            )}
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
        <Modal.Header closeButton className="header_dark" style={{ backgroundColor: 'black'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'white'}}>
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
      {/* modal de los correos =====================
      <Modal
        show={isOpenModalEmail}
        onHide={openModalEmail}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="header_dark" style={{ backgroundColor: 'black'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'white'}}>
            Emails Receptores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Row>
                <InputField
                  type="text"
                  name="email_receptors"
                  required={false}
                  label="Correos de Confirmación separados por comas,  (sin dejar espacios en blanco)"
                  handleChange={onChangeInputMailReceptors}
                  value={mailReceptors}
                  messageErrors={[]}
                  cols="col-md-8 col-sm-8 col-lg-8"
                />
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openModalEmail}>cerrar</Button>
        </Modal.Footer>
      </Modal>
      { /* otras modales ================ */}
      <ModalFollowingTaskComponent
        show={isOpenModalFollowing}
        onHide={openModalFollowing}
        submit={handleSubmitFollowing}
        title="Agregar Nuevo Seguimiento"
      />
    <ModalAnulateDeliveryComponent
      show={isOpenModalAnulate}
      onHide={openModalAnulate}
      submit={handleSubmitAnulate}
      title="Anular Entrega"
    />
  <ModalCloseDeliveryComponent
      show={isOpenModalCloseDelivery}
      onHide={openModalCloseDelivery}
      submit={handleSubmitCloseDelivery}
      title="Cerrar Entrega"
    />
    </Container>
  )
}

function mapStateToProps(state){
  return {
    config_ss : state.configs.config
  }
}

export default connect(mapStateToProps,{})(ManagementDeliveryFormPage)
