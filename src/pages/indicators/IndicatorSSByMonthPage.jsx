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
import { toast } from 'react-toastify'
import * as moment from 'moment-timezone'
import 'styles/pages/indicatorPage.css'
import {Bar} from 'react-chartjs-2';
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
  title: {
   display: true,
   text: "Cantidad S.S Emitidas por Mes"
  }
}

let data_bar_ss_month = {
	labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	datasets: []
};

const IndicatorSSByMonthPage = (props) => {
  const [formData,setFormData] = useState({
    id_housing_complexe: '',
    year : '',
  })

  const [textButton, setTextButton] = useState('Buscar...')
  const [validated, setValidated] = useState(false)
  const [housingComplexes, setHousingComplexes] = useState([])
  const [years, setYears] = useState([])
  const [ssByMonth, setSsByMonth] = useState([])
  const [redraw,setRedraw] = useState(false)
  const [chargeDataCharts,setChargeDataCharts] = useState(false)
  const [showForm,setShowForm] = useState(true)
  const [showButtons,setShowButtons] = useState(true)

  useEffect(() => {
    
    fetchData()
    return () => {
      data_bar_ss_month = {
      	labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      	datasets: []
      };
    }
  },[])

  useEffect(() => {
    if(chargeDataCharts){
      handleBarFailuresByTipology()
    }
  },[chargeDataCharts])

  const handleBarFailuresByTipology = () => {

    ssByMonth.forEach((v,i) => {
      data_bar_ss_month.datasets.push({
        label: v.name,
        backgroundColor: ARRAY_COLORS[i],
        borderColor: ARRAY_COLORS[i],
        borderWidth: 1,
        hoverBackgroundColor: ARRAY_COLORS[i],
        hoverBorderColor: ARRAY_COLORS[i],
        data: [v.enero,v.febrero,v.marzo,v.abril,v.mayo,v.junio,v.julio,v.agosto,v.septiembre,v.octubre,v.noviembre,v.diciembre]
      });
    })

    setRedraw(true)
  }

  const fetchData = () => {

    let promises = [
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'ownership_ss_years_service'),
    ]

    Promise.all(promises).then(result => {
      setHousingComplexes(result[0].data)
      setYears(result[1].data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })

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

    axios.post(API_URL+'indicators_ss_by_month',objectPost).then(result => {
      setSsByMonth(result.data.ss_by_month)
      setChargeDataCharts(true)
      setShowForm(false)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const handleShowForm = () => {
    data_bar_ss_month = {
    	labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    	datasets: []
    };
    setShowForm(true)
    setRedraw(false)
    setChargeDataCharts(false)
  }

  const printIndicator = () => {
    setShowButtons(false)
    console.log(ssByMonth,'aquimenor');
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
          <h4 className="text-center title_principal">INDICADORES DE POSTVENTA (Cantidad S.S Emitidas por Mes)</h4>
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
              type="select"
              name="year"
              label="Año"
              required={true}
              cols="col-md-4 col-sm-4 col-lg-4"
              messageErrors={[
                'Requerido*'
              ]}
              value={formData.year}
              handleChange={onChange}
            >
              <option value="">--Seleccione--</option>
              {years.map((v,i) => (
                <option value={v.year} key={i}>{v.year}</option>
              ))}
            </InputField>
            <Col sm={4} md={4} lg={4}>
              <br/>
              <Button variant="secondary" block={true} size="sm" type="submit">{textButton}</Button>
            </Col>
          </Row>
         </Form>
        </Col>
        {/* Fin col 12 del formulario ==================== */}
        <Col sm={12} md={12} lg={12} style={{display : showForm ? "none" : "block"}}>
        {/* tabla fallas tipologia y estatus ================== */}
          <br/>
          <Row>
            <Col sm={10} md={10} lg={10} className="title_font">
              <h5>Cantidad de S.S Emitidas por Mes</h5>
            </Col>
            <Col sm={2} md={2} lg={2} className="title_font">
              <h5>Año: {formData.year}</h5>
            </Col>
          </Row>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="th_class">Proyecto Inmobiliario</th>
                    <th className="th_class">Enero</th>
                    <th className="th_class">Febrero</th>
                    <th className="th_class">Marzo</th>
                    <th className="th_class">Abril</th>
                    <th className="th_class">Mayo</th>
                    <th className="th_class">Junio</th>
                    <th className="th_class">Julio</th>
                    <th className="th_class">Agosto</th>
                    <th className="th_class">Septiembre</th>
                    <th className="th_class">Octubre</th>
                    <th className="th_class">Noviembre</th>
                    <th className="th_class">Diciembre</th>
                  </tr>
                </thead>
                <tbody className="">
                  {ssByMonth.map((v,i) => {
                    return (
                      <tr key={i}>
                        <td className="">{v.name}</td>
                        <td className="text-right">{v.enero}</td>
                        <td className="text-right">{v.febrero}</td>
                        <td className="text-right">{v.marzo}</td>
                        <td className="text-right">{v.abril}</td>
                        <td className="text-right">{v.mayo}</td>
                        <td className="text-right">{v.junio}</td>
                        <td className="text-right">{v.julio}</td>
                        <td className="text-right">{v.agosto}</td>
                        <td className="text-right">{v.septiembre}</td>
                        <td className="text-right">{v.octubre}</td>
                        <td className="text-right">{v.noviembre}</td>
                        <td className="text-right">{v.diciembre}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
          <br/>
          {
            !showForm ? (
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Bar
                    data={data_bar_ss_month}
                    redraw={redraw} options={optionsBar}
                    />
                </Col>
              </Row>
            ) : ''
          }
          <br/><br/>
          {/* fin tabla tipology failure by status too */}
          {
            showButtons ? (
              <Row className="justify-content-center">
                <Col sm={4} md={4} lg={4}>
                  <Button type="button" variant="secondary" size="sm" block={true} onClick={printIndicator}>Imprimir Pdf</Button>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <Button type="button" variant="secondary" size="sm" block={true} onClick={handleShowForm}>Nueva Consulta</Button>
                </Col>
              </Row>
            ) : ''
          }
        </Col>
      </Row>
    </Container>
  )
}

export default IndicatorSSByMonthPage
