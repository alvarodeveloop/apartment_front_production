import React, {useState, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import Table from 'components/Table'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { NotificationManager } from 'react-notifications';
import * as moment from 'moment-timezone'
import 'styles/pages/indicatorPage.css'
import {Doughnut,Bar} from 'react-chartjs-2';
import { ARRAY_COLORS } from 'utils/constants'

let optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0
  },
  hover: {
    animationDuration: 0
  },
  responsiveAnimationDuration: 0,
}

let total_estado_ss = 0
let total_failure_by_tipology  = 0
let data_donut_ss_status = {
	labels: [],
	datasets: [{
		data: [],
		backgroundColor: [],
		hoverBackgroundColor: []
	}]
};

let data_bar_failure_tipology = {
  labels: [],
  datasets: [
    {
      label: 'Fallas(Observaciones) por Tipología',
      backgroundColor: 'rgb(63, 27, 184)',
      borderColor: 'rgb(27, 13, 74)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(63, 27, 184)',
      hoverBorderColor: 'rgb(27, 13, 74)',
      data: []
    }
  ]
};

const IndicatorByProyectPage = (props) => {
  const [formData,setFormData] = useState({
    id_housing_complexe: '',
    date_from : '',
    date_to: '',
    id_status : ''
  })
  const [textButton, setTextButton] = useState('Buscar...')
  const [validated, setValidated] = useState(false)
  const [housingComplexes, setHousingComplexes] = useState([])
  const [housingData, setHousingData] = useState({})
  const [ssByStatus, setSsByStatus] = useState([])
  const [failureByTipology, setFailureByTipology] = useState([])
  const [failureByTipologyStatus, setFailureByTipologyStatus] = useState([])
  const [redraw,setRedraw] = useState(false)
  const [redrawBar,setRedrawBar] = useState(false)
  const [statusSS, setStatusSS] = useState([])
  const [showForm,setShowForm] = useState(true)
  const [showButtons,setShowButtons] = useState(true)

  useEffect(() => {
    
    fetchData()
    return () => {

      data_donut_ss_status = {
      	labels: [],
      	datasets: [{
      		data: [],
      		backgroundColor: [],
      		hoverBackgroundColor: []
      	}]
      };

      data_bar_failure_tipology = {
        labels: [],
        datasets: [
          {
            label: 'Fallas(Observaciones) por Tipología',
            backgroundColor: 'rgb(63, 27, 184)',
            borderColor: 'rgb(27, 13, 74)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(63, 27, 184)',
            hoverBorderColor: 'rgb(27, 13, 74)',
            data: []
          }
        ]
      };
    }
  },[])

  useEffect(() => {
    if(redraw){
      handleDataDonutSsStatus()
    }
  },[redraw])

  useEffect(() => {
    if(redrawBar){
      handleBarFailuresByTipology()
    }
  },[redrawBar])


  const fetchData = () => {

    let promises = [
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'get_status_close')
    ]

    Promise.all(promises).then(result => {
      setHousingComplexes(result[0].data)
      setStatusSS(result[1].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })

  }

  const handleDataDonutSsStatus = () => {
    ssByStatus.forEach((v, i) => {
      data_donut_ss_status.labels.push(v.status+"%")
      data_donut_ss_status.datasets[0].data.push(parseFloat(v.porcentaje))
      data_donut_ss_status.datasets[0].backgroundColor.push(ARRAY_COLORS[i])
      data_donut_ss_status.datasets[0].hoverBackgroundColor.push(ARRAY_COLORS[i])
    });


  }

  const handleBarFailuresByTipology = () => {

    failureByTipology.forEach((v, i) => {
      data_bar_failure_tipology.labels.push(v.name)
      data_bar_failure_tipology.datasets[0].data.push(v.total)
    });

  }

  const onChange = e => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},formData)

    axios.post(API_URL+'indicators_by_proyect',objectPost).then(result => {
      setHousingData(result.data.housing_data)
      setSsByStatus(result.data.ss_status)
      setFailureByTipology(result.data.failure_by_tipology)
      setFailureByTipologyStatus(result.data.failure_by_tipology_status)
      setTimeout(function () {
        setRedraw(true)
        setRedrawBar(true)
        setShowForm(false)
      }, 500);
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const displayStatus = () => {
    let val = "Todos los estados"
    switch (parseInt(formData.id_status,10)) {
      case 1:
        val = "Pendiente"
      break;
      case 2:
        val = "Inspección"
      break;
      case 3:
        val = "Ejecución"
      break;
      case 4:
        val = "No Aplica"
      break;
      case 5:
        val = "Cerrada"
      break;
      case 6:
        val = "Anulada"
      break;
      case 7:
        val = "En proceso"
      break;
    }

    return val
  }

  const show_total_registers = (dataRegisters,type = false) => {
    let val = 0
    if(!type){
      dataRegisters.forEach((item, i) => {
        val = val + item.total
      });
      return val
    }else{
      switch (type) {
        case "pendiente":
          dataRegisters.forEach((item, i) => {
            val = val + item.total_pendiente
          });
        break;
        case "ejecucion":
          dataRegisters.forEach((item, i) => {
            val = val + item.total_ejecucion
          });
        break
        case "no_aplica":
          dataRegisters.forEach((item, i) => {
            val = val + item.total_no_aplica
          });
        break
        case "Cerrada":
          dataRegisters.forEach((item, i) => {
            val = val + item.total_cerrada
          });
        break
      }
      return val
    }
  }

  const handleShowForm = () => {

    data_donut_ss_status = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: []
      }]
    };

    data_bar_failure_tipology = {
      labels: [],
      datasets: [
        {
          label: 'Fallas(Observaciones) por Tipología',
          backgroundColor: 'rgb(63, 27, 184)',
          borderColor: 'rgb(27, 13, 74)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgb(63, 27, 184)',
          hoverBorderColor: 'rgb(27, 13, 74)',
          data: []
        }
      ]
    };
    setShowForm(true)
    setRedraw(false)
    setRedrawBar(false)
  }

  const printIndicator = () => {
    setShowButtons(false)
    setTimeout(function () {
      window.print()
    }, 400);
    setTimeout(function () {
      setShowButtons(true)
    }, 1500);
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <h4 className="text-center title_principal">INDICADORES DE POSTVENTA (Por Proyecto y Rango de Fecha)</h4>
        </Col>
        {/* formulario ==================== */}
        <Col sm={12} md={12} lg={12} style={{display: showForm ? "block" : "none"}}>
         <Form onSubmit={onSubmit} noValidate validated={validated}>
          <Row>
            <InputFieldRef
              type="select"
              name="id_housing_complexe"
              label="Proyecto"
              required={true}
              cols="col-md-4 col-sm-4 col-lg-4"
              messageErrors={[
                'Requerido*'
              ]}
              value={formData.id_housing_complexe}
              handleChange={onChange}
            >
              <option value="">--Seleccione--</option>
              {housingComplexes.map((v,i) => (
                <option value={v.id} key={i}>{v.name}</option>
              ))}
            </InputFieldRef>
            <InputField
              type="date"
              name="date_from"
              label="Desde"
              required={true}
              cols="col-md-4 col-sm-4 col-lg-4"
              messageErrors={[
                'Requerido*'
              ]}
              value={formData.date_from}
              handleChange={onChange}
            />
            <InputField
              type="date"
              name="date_to"
              label="Hasta"
              required={true}
              cols="col-md-4 col-sm-4 col-lg-4"
              messageErrors={[
                'Requerido*'
              ]}
              value={formData.date_to}
              handleChange={onChange}
            />
          </Row>
          <Row>
            <InputField
              type="select"
              name="id_status"
              label="Status"
              required={false}
              cols="col-md-4 col-sm-4 col-lg-4"
              messageErrors={[
                ''
              ]}
              value={formData.id_status}
              handleChange={onChange}
            >
              <option value="">--Seleccione--</option>
              {statusSS.map((v,i) => (
                <option key={i} value={v.id}>{v.status}</option>
              ))}
            </InputField>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button variant="secondary" block={true} size="sm" type="submit">{textButton}</Button>
            </Col>
          </Row>
         </Form>
        </Col>
        {/* Fin col 12 del formulario ==================== */}
        <Col sm={12} md={12} lg={12} style={{display : showForm ? "none" : "block"}}>
          <br/>
          <Row>
            <Col sm={4} md={4} lg={4}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <b>Proyecto Inmobiliario:&nbsp;&nbsp;</b> {housingData.name}
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <b>Fecha Recepción Mun.:&nbsp;&nbsp;</b>{moment(housingData.date_municipal_reception).format('DD-MM-YYYY')}
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <b>Nro. Viviendas:&nbsp;&nbsp;</b> {housingData.number_living}
                </Col>
              </Row>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Col sm={12} md={12} lg={12}>
                <b>Estado:&nbsp;&nbsp;</b> {displayStatus()}
              </Col>
              <Col sm={12} md={12} lg={12}>
                <b>Fecha Inicio:&nbsp;&nbsp;</b>{moment(formData.date_from).format('DD-MM-YYYY')}
              </Col>
              <Col sm={12} md={12} lg={12}>
                <b>Fecha Término:&nbsp;&nbsp;</b>{moment(formData.date_to).format('DD-MM-YYYY')}
              </Col>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Col sm={12} md={12} lg={12}>
                <b>IPS: </b> 0
              </Col>
              <Col sm={12} md={12} lg={12}>
                <b>IPC: </b> 0
              </Col>
              <Col sm={12} md={12} lg={12}>
                <b>IPE: </b> 0
              </Col>
            </Col>
          </Row>
          {/* Tabla ss estado ============================= */}
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="3">Solicitudes por Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Estados</th>
                    <th className="th_class">Cantidad</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {ssByStatus.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td>{v.status}</td>
                        <td className="text-right">{v.total}</td>
                        <td className="text-right">{v.porcentaje}%</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td><b>Total</b></td>
                    <td className="text-right">{show_total_registers(ssByStatus)}</td>
                    <td className="text-right"><b>100.00%</b></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Doughnut data={data_donut_ss_status} redraw={redraw} options={optionsBar}/>
            </Col>
          </Row>
          {/* Tabla failure by tipology ============================= */}
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="3">Total de Fallas(Observaciones) por Tipología</th>
                  </tr>
                  <tr>
                    <th className="th_class">Fallas</th>
                    <th className="th_class">Cantidad</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {failureByTipology.map((v1,i) => {
                    return (
                      <tr key={i}>
                        <td>{v1.name}</td>
                        <td className="text-right">{v1.total}</td>
                        <td className="text-right">{v1.porcentaje}%</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td><b>Total</b></td>
                    <td className="text-right">{show_total_registers(failureByTipology)}</td>
                    <td className="text-right"><b>100.00%</b></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Bar
                data={data_bar_failure_tipology}
                options={optionsBar}
                redraw={redraw}
              />
            </Col>
          </Row>
        {/* tabla fallas tipologia y estatus ================== */}
          <br/>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={12}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="7">Total de Fallas(Observaciones) por Tipología y Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Fallas</th>
                    <th className="th_class">Pendiente</th>
                    <th className="th_class">Ejecución</th>
                    <th className="th_class">No Aplica</th>
                    <th className="th_class">Cerrada</th>
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {failureByTipologyStatus.map((v1,i) => {
                    return (
                      <tr key={i}>
                        <td>{v1.name}</td>
                        <td className="text-right">{v1.total_pendiente}</td>
                        <td className="text-right">{v1.total_ejecucion}</td>
                        <td className="text-right">{v1.total_no_aplica}</td>
                        <td className="text-right">{v1.total_cerrada}</td>
                        <td className="text-right">{v1.total}</td>
                        <td className="text-right">{v1.porcentaje}%</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td><b>Total</b></td>
                    <td className="text-right">{show_total_registers(failureByTipologyStatus,'pendiente')}</td>
                    <td className="text-right">{show_total_registers(failureByTipologyStatus,'ejecucion')}</td>
                    <td className="text-right">{show_total_registers(failureByTipologyStatus,'no_aplica')}</td>
                    <td className="text-right">{show_total_registers(failureByTipologyStatus,'cerrada')}</td>
                    <td className="text-right">{show_total_registers(failureByTipologyStatus)}</td>
                    <td className="text-right"><b>100.00%</b></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          {/* fin tabla tipology failure by status too */}
          {
            showButtons ? (
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4}>
                  <Button variant="secondary" size="sm" block={true} onClick={printIndicator}>Imprimir Pdf</Button>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <Button variant="secondary" size="sm" block={true} onClick={handleShowForm}>Nueva Consulta</Button>
                </Col>
              </Row>
            ) : ''
          }
        </Col>
      </Row>
    </Container>
  )
}

export default IndicatorByProyectPage
