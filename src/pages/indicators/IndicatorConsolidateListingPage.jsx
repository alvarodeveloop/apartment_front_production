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
import { ARRAY_COLORS } from 'utils/constants'

const IndicatorConsolidateListingPage = (props) => {
  const [formData,setFormData] = useState({
    id_housing_complexe: '',
    date_from : '',
    date_to: '',
    id_status : ''
  })
  const [textButton, setTextButton] = useState('Buscar...')
  const [validated, setValidated] = useState(false)
  const [housingComplexes, setHousingComplexes] = useState([])
  const [listingConsolidate, setListingConsolidate] = useState([])
  const [statusSS, setStatusSS] = useState([])
  const [showForm,setShowForm] = useState(true)
  const [showButtons,setShowButtons] = useState(true)

  useEffect(() => {
    
    fetchData()

  },[])


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

    axios.post(API_URL+'indicators_listing_consolidate',objectPost).then(result => {
      setListingConsolidate(result.data.consolidate_listing)
      console.log(result.data.consolidate_listing,'aui');
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
    setShowForm(true)
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
          <h4 className="text-center title_principal">INDICADORES DE POSTVENTA (Listado de Consolidado)</h4>
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
        {/* tabla fallas tipologia y estatus ================== */}
          <br/>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={12}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="header_th_classs" colSpan="8">Fallas por Estado</th>
                  </tr>
                  <tr>
                    <th className="th_class">Nombre</th>
                    <th className="th_class">Tipo</th>
                    <th className="th_class">Pendiente</th>
                    <th className="th_class">Inspeccion</th>
                    <th className="th_class">Ejecución</th>
                    <th className="th_class">Cerrada</th>
                    <th className="th_class">Total</th>
                    <th className="th_class">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="">
                  {listingConsolidate.map((v,i) => {
                    return (
                      <tr key={i} className={v.nivel == 1 ? "tr_principal" : ""}>
                        <td className="">{v.nombre}</td>
                        <td className="">{v.nivel == 1 ? "Tipologia" : "Falla Puntual"}</td>
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

export default IndicatorConsolidateListingPage
