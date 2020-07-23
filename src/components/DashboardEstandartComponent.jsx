import { AnnouncementCard, TodosCard } from 'components/Card';
import Page from 'components/Page';
import { connect } from 'react-redux'
import React, { useEffect , useState, useMemo } from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Accordion,
  Tab,
  Tabs,
  Badge
} from 'react-bootstrap'
import 'styles/pages/dashboard.css'
import { API_URL } from 'utils/constants'
import axios from 'axios'
import { toast } from 'react-toastify';
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import AccordionDashboardComponent from 'components/AccordionDashboardComponent'

let ssOpenColumns = []
let columns_table_accordion = []

const DashboardEstandartComponent = props => {

  const [ssOpen, setSSOpen] = useState([])
  const [housings, setHousings] = useState([])
  const [config, setConfig] = useState({})

  useEffect(() => {
    fetchData()
    return () => {
      ssOpenColumns = []
      columns_table_accordion = []
    }
  },[])

  useMemo(() => {
    ssOpenColumns = [
      {
        Header: 'Nro.SS',
        accessor: 'id',
        Cell: props1 => {
          const original = props1.cell.row.original
          return (
            <Button variant="link" size="sm" onClick={() => redirectToFormSS(original.id)}>{original.id}</Button>
          )
        }
      },
      {
        Header: 'Fecha Emisión',
        accessor: props1 => [moment(props1.date_request).format('DD-MM-YYYY')]
      },
      {
        Header: 'Cliente',
        accessor: props1 => props1.client ? [props1.client.name+" "+props1.client.last_names] : []
      },
      {
        Header: 'Depto',
        accessor: props1 => props1.ownership ? [props1.ownership.number] : []
      },
      {
        Header: 'Block/Mzna',
        accessor: props1 => props1.housing.block_mza ? ['Si'] : ['No']
      },
      {
        Header: 'Proyecto',
        accessor: props1 => [props1.housing.name]
      },
      {
        Header: 'Prioridad',
        accessor: props1 => [props1.status.status],
        Cell: props1 => {
          const original = props1.cell.row.original
          return (<Badge variant="danger" className="font-badge">{original.status.status}</Badge>)
        }
      },
    ]

    columns_table_accordion = [
      {
        Header: 'Nro Prop',
        accessor: 'number'
      },
      {
        Header: 'C. Habi',
        accessor: props1 => [props1.housing_complexe.name]
      },
      {
        Header: 'Tipo Propiedad',
        accessor: props1 => [props1.typeOwnership.name]
      },
      {
        Header: 'Propietario',
        accessor: props1 => [props1.ownership_client.name +' '+props1.ownership_client.last_names]
      },
      {
        Header: 'Inscripción a Conservador',
        accessor: props1 => [moment(props1.date_inscription_conservative).format('DD-MM-YYYY')]
      },
      {
        Header: 'Termino de Garantia',
        accessor: props1 => [moment(props1.date_inscription_conservative).add(config.garanty_1, 'years').format('DD-MM-YYYY')],
      },
    ]
  },[config])

  const redirectToFormSS = id => {
    props.history.replace('request/property/managment/form/'+id)
  }

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'dashboard_data'),
      axios.get(API_URL+'master_config_property_data'),
    ]
    Promise.all(promises).then(result => {
      setSSOpen(result[0].data.ss_propiedad)
      setHousings(result[0].data.housing_vencida)
      setConfig(result[1].data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const redirectRoute = route => {
    props.history.replace(route)
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Tabs defaultActiveKey="ss_open" id="uncontrolled-tab-example" variant="pills">
            <Tab eventKey="ss_open" title="S.S Abiertas">
              <br/>
              <Card>
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  S.S Abiertas por mas de 5 días
                </Card.Header>
                <Card.Body>
                  {ssOpen.length > 0 ? (
                    <Table columns={ssOpenColumns} data={ssOpen} />
                  ) : (
                    <h5 className="alert alert-warning text-center">No se encontraron Registros</h5>
                  )}
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="ss_construc" title="S.S para constructora">
              <br/>
              <Card>
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  S.S. del dia para Constructora.
                </Card.Header>
                <Card.Body>
                  <h5 className="alert alert-warning text-center">No se encontraron Registros</h5>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="propiedades" title="Propiedades con Garantía Vencida">
              <br/>
              <Card className="accordeon_dashboard">
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  Propidades con primera Garantía vencida (Inscripción a Conservador).
                </Card.Header>
                <Card.Body>
                  <Accordion className="separated_borders">
                    {housings.map((v,i) => (
                      <AccordionDashboardComponent  columns={columns_table_accordion} id={i} key={i} housing={v} config={config}/>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardEstandartComponent
