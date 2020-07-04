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
let total_tipology_housing_failure = 0
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
  title: {
   display: true,
   text: "Total Solicitudes por Proyecto"
  }
}

let data_housing_ss_by_status = {
  labels: ['Pendiente','Inspección','Ejecución','No Aplica','Cerrada'],
  datasets: []
};

let data_housing_tipology_failure = {
  labels: [],
  datasets: []
}

let data_housing_status_failure = {
  labels: ['Pendiente','Ejecución','No Aplica','Cerrada'],
  datasets: []
}

const IndicatorByMultipleProyectsPage = (props) => {
  const [formData,setFormData] = useState({
    id_housing_complexe: [],
    date_from : '',
    date_to: '',
    id_status : ''
  })
  const [textButton, setTextButton] = useState('Buscar...')
  const [validated, setValidated] = useState(false)
  const [housingComplexes, setHousingComplexes] = useState([])
  const [housingData, setHousingData] = useState({})
  const [housingSsByStatus, setHousingSsByStatus] = useState({
    data: [],
    totales: []
  })
  const [failureByTipology, setFailureByTipology] = useState([])
  const [failureByTipologyStatus, setFailureByTipologyStatus] = useState([])
  const [redraw,setRedraw] = useState(false)
  const [chargeDataCharts,setChargeDataCharts] = useState(false)
  const [statusSS, setStatusSS] = useState([])
  const [tipolgiesTable, setTipolgiesTable] = useState([])
  const [showForm,setShowForm] = useState(true)
  const [failureStatus, setFailureStatus] = useState([])
  const [showButtons, setShowButtons] = useState(true)

  useEffect(() => {
    
    fetchData()
    return () => {

      data_housing_ss_by_status = {
        labels: ['Pendiente','Inspección','Ejecución','No Aplica','Cerrada'],
        datasets: []
      };

      data_housing_ss_by_status = {
        labels: ['Pendiente','Inspección','Ejecución','No Aplica','Cerrada'],
        datasets: []
      };

      data_housing_tipology_failure = {
        labels: [],
        datasets: []
      }

      data_housing_status_failure = {
        labels: ['Pendiente','Ejecución','No Aplica','Cerrada'],
        datasets: []
      }

      total_tipology_housing_failure = 0
    }
  },[])

  useEffect(() => {
    if(chargeDataCharts){
      handleBarFailuresByTipology()
      handleBarFailuresByTipologyHousing()
      handleBarFailuresByStatus()
      setTimeout(function () {
        setRedraw(true)
      },500);
    }
  },[chargeDataCharts])

  const fetchData = () => {

    let promises = [
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'get_status_close'),
      axios.get(API_URL+'params_manage_problems_tipology_by_type/'+1),
    ]

    Promise.all(promises).then(result => {
      setHousingComplexes(result[0].data)
      setStatusSS(result[1].data)
      setTipolgiesTable(result[2].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })

  }

  const handleBarFailuresByStatus = () => {

    failureStatus.forEach((v,i) => {
      data_housing_status_failure.datasets.push({
        label: v.housing,
        backgroundColor: ARRAY_COLORS[i],
        borderColor: ARRAY_COLORS[i],
        borderWidth: 1,
        hoverBackgroundColor: ARRAY_COLORS[i],
        hoverBorderColor: ARRAY_COLORS[i],
        data: [v.pendiente1,v.ejecucion1,v.no_aplica1,v.cerrada1]
      });
    })
  }

  const handleBarFailuresByTipology = () => {

    housingSsByStatus.data.forEach((v,i) => {
      data_housing_ss_by_status.datasets.push({
        label: v.name,
        backgroundColor: ARRAY_COLORS[i],
        borderColor: ARRAY_COLORS[i],
        borderWidth: 1,
        hoverBackgroundColor: ARRAY_COLORS[i],
        hoverBorderColor: ARRAY_COLORS[i],
        data: [v.ss_pendiente,v.ss_inspeccion,v.ss_ejecucion,v.ss_no_aplica,v.ss_cerrada]
      });
    })
  }

  const handleBarFailuresByTipologyHousing = () => {

    tipolgiesTable.forEach((item, i) => {
      data_housing_tipology_failure.labels.push(item.name)
    });
    let arreglo_data_columna = []

    failureByTipology.forEach((v,i) => {
      arreglo_data_columna = []
      tipolgiesTable.forEach((item, i) => {
        arreglo_data_columna.push(v[item.name+"1"])
      })

      data_housing_tipology_failure.datasets.push({
        label: v.housing,
        backgroundColor: ARRAY_COLORS[i],
        borderColor: ARRAY_COLORS[i],
        borderWidth: 1,
        hoverBackgroundColor: ARRAY_COLORS[i],
        hoverBorderColor: ARRAY_COLORS[i],
        data: arreglo_data_columna
      });

      arreglo_data_columna = []

    })
  }

  const onChange = e => {
    e.persist()
    if(e.target.name === "id_housing_complexe"){
      let arreglo = []
      for (var i = 0; i < e.target.options.length; i++) {
        if(e.target.options[i].selected){
          arreglo.push(e.target.options[i].value)
        }
      }
      setFormData({...formData, [e.target.name] : arreglo})
    }else{
      setFormData({...formData, [e.target.name] : e.target.value})
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

    let objectPost = Object.assign({},formData)

    axios.post(API_URL+'indicators_by_multiple_proyect',objectPost).then(result => {
      setHousingSsByStatus({data: result.data.housing_ss_by_status, totales: result.data.housing_ss_by_status_totales})
      setFailureByTipology(result.data.tipology_by_multiple_housings)
      setFailureStatus(result.data.failures_by_status)
      setFailureByTipologyStatus(result.data.tipology_by_status)
      setShowForm(false)
      setTimeout(function () {
        setChargeDataCharts(true)
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

    data_housing_ss_by_status = {
      labels: ['Pendiente','Inspección','Ejecución','No Aplica','Cerrada'],
      datasets: []
    };
    data_housing_tipology_failure = {
      labels: [],
      datasets: []
    }
    data_housing_status_failure = {
      labels: ['Pendiente','Ejecución','No Aplica','Cerrada'],
      datasets: []
    }
    total_tipology_housing_failure= 0
    setShowForm(true)
    setRedraw(false)
    setChargeDataCharts(false)
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

  const displayTrTipologyMultipleHousing = tipology => {
    let total_total = 0
    let html = ""
    let td = ""
    if(tipology !== "total"){
      failureByTipology.forEach((item, i) => {
        if(i === 0){
          total_tipology_housing_failure+= parseFloat(item[tipology + "_total"])
          td = (<td className="text-right" key={i+tipology}>{item[tipology + "_total"]}</td>)
        }
      });
    }else{
      failureByTipology.forEach((item, i) => {
        if(i === 0){
          tipolgiesTable.forEach((item1, i1) => {
              total_total+= parseFloat(item[item1.name+"_total"])
          });
          td = (<td className="text-right" key={i+"total"}>{total_total}</td>)
        }
      });
    }

    return td
  }

  const displayTrFailureStatusMultipleHousing = name => {
    let total_total = 0
    let html = ""
    let td = ""
    if(name !== "total"){
      failureStatus.forEach((item, i) => {
        total_total+= parseFloat(item[name+"1"])
      });
      td = (<td className="text-right" key={name+"_1"}>{total_total}</td>)
    }else{
      failureStatus.forEach((item, i) => {
        total_total+= parseFloat(item.total)
      });
      td = (<td className="text-right" key={name+"_1"}>{total_total}</td>)
    }

    return td
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <h4 className="text-center title_principal">INDICADORES DE POSTVENTA (Por Multiples Proyectos y Rango de Fecha)</h4>
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
              multiple={true}
            >
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
              <option value="4">No aplica</option>
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
          </Row>
          {/* Tabla ss estado ============================= */}
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12} className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="10">Total de Solicitudes por Proyecto y Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Proyecto Inmobiliario</th>
                    <th className="th_class">Fecha RM</th>
                    <th className="th_class">Pendiente</th>
                    <th className="th_class">Inspección</th>
                    <th className="th_class">Ejecución</th>
                    <th className="th_class">No Aplica</th>
                    <th className="th_class">Cerrada</th>
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                    <th className="th_class">Anulada</th>
                  </tr>
                </thead>
                <tbody className="">
                  {housingSsByStatus.data.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td>{v.name}</td>
                        <td>{moment(v.date_municipal_reception).format('DD-MM-YYYY')}</td>
                        <td className="text-right">{v.ss_pendiente}</td>
                        <td className="text-right">{v.ss_inspeccion}</td>
                        <td className="text-right">{v.ss_ejecucion}</td>
                        <td className="text-right">{v.ss_no_aplica}</td>
                        <td className="text-right">{v.ss_cerrada}</td>
                        <td className="text-right">{v.total_total}</td>
                        <td className="text-right">{v.porcentaje}%</td>
                        <td className="text-right">0</td>
                      </tr>
                    )
                  })}
                  {housingSsByStatus.totales.length > 0 ? (
                    <tr>
                      <td colSpan="2"><b>Totales</b></td>
                      <td className="text-right">{housingSsByStatus.totales[0].ss_pendiente}</td>
                      <td className="text-right">{housingSsByStatus.totales[0].ss_inspeccion}</td>
                      <td className="text-right">{housingSsByStatus.totales[0].ss_ejecucion}</td>
                      <td className="text-right">{housingSsByStatus.totales[0].ss_no_aplica}</td>
                      <td className="text-right">{housingSsByStatus.totales[0].ss_cerrada}</td>
                      <td className="text-right">{housingSsByStatus.totales[0].total_total}</td>
                      <td className="text-right"><b>100%</b></td>
                      <td></td>
                    </tr>
                  ) : ''}
                  <tr>
                    <td colSpan="10">Se omiten la(s) S.S. Anulada(s): 0</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Bar data={data_housing_ss_by_status} redraw={redraw} options ={optionsBar}/>
            </Col>
          </Row>
          {/* fin tabla housing ss status */}
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12} className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan={tipolgiesTable.length + 4}>Total de Fallas(Observaciones) por Proyecto y Tipologia</th>
                  </tr>
                  <tr>
                    <th className="th_class">Proyecto Inmobiliario</th>
                    <th className="th_class">Fecha RM</th>
                    {tipolgiesTable.map((v,i) => (
                      <th className="th_class" key={i}>{v.name}</th>
                    ))}
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {failureByTipology.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td>{v.housing}</td>
                        <td>{moment(v.date_municipal_reception).format('DD-MM-YYYY')}</td>
                        {tipolgiesTable.map((v1,i1) => {
                          return (<td className="text-right" key={i1}>{v[v1.name+'1']}</td>)
                        })}
                        <td className="text-right">{v.total}</td>
                        <td className="text-right">{v.porcentaje}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan="2"><b>Totales: </b></td>
                    {tipolgiesTable.map((v1,i1) => (
                      displayTrTipologyMultipleHousing(v1.name)
                    ))}
                    {displayTrTipologyMultipleHousing('total')}
                    <td className="text-right"><b>100%</b></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Bar data={data_housing_tipology_failure} redraw={redraw} options ={optionsBar}/>
            </Col>
          </Row>
          {/* fin tabla de fallas por tipologia y proyecto */}
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12} className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="8">Total de Fallas(Observaciones) por Proyecto y Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Proyecto Inmobiliario</th>
                    <th className="th_class">Fecha RM</th>
                    <th className="th_class">Pendiente</th>
                    <th className="th_class">Ejecución</th>
                    <th className="th_class">No Aplica</th>
                    <th className="th_class">Cerrada</th>
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {failureStatus.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td>{v.housing}</td>
                        <td>{moment(v.date_municipal_reception).format('DD-MM-YYYY')}</td>
                        <td className="text-right">{v.pendiente1}</td>
                        <td className="text-right">{v.ejecucion1}</td>
                        <td className="text-right">{v.no_aplica1}</td>
                        <td className="text-right">{v.cerrada1}</td>
                        <td className="text-right">{v.total}</td>
                        <td className="text-right">{v.porcentaje}%</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan="2"><b>Totales: </b></td>
                    {displayTrFailureStatusMultipleHousing('pendiente')}
                    {displayTrFailureStatusMultipleHousing('ejecucion')}
                    {displayTrFailureStatusMultipleHousing('no_aplica')}
                    {displayTrFailureStatusMultipleHousing('cerrada')}
                    {displayTrFailureStatusMultipleHousing('total')}
                    <td className="text-right"><b>100%</b></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Bar data={data_housing_status_failure} redraw={redraw} options ={optionsBar}/>
            </Col>
          </Row>
          {/* fin tabla de fallas por estado y proyecto */}
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12} className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="7">Total de Fallas(Observaciones) por Tipología y Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Tipologias</th>
                    <th className="th_class">Pendiente</th>
                    <th className="th_class">Ejecución</th>
                    <th className="th_class">No Aplica</th>
                    <th className="th_class">Cerrada</th>
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {failureByTipologyStatus.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td>{v.name}</td>
                        <td className="text-right">{v.pendiente}</td>
                        <td className="text-right">{v.ejecucion}</td>
                        <td className="text-right">{v.no_aplica}</td>
                        <td className="text-right">{v.cerrada}</td>
                        <td className="text-right">{v.total}</td>
                        <td className="text-right">{v.porcentaje}%</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
          {/* fin tabla tipologia y status */}
          <br/><br/>
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

export default IndicatorByMultipleProyectsPage
