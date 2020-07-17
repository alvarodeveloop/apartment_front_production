import React, { useRef, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
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
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify';
import axios from 'axios'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import TableTaskAreaComponent from 'components/TableTaskAreaComponent'
import TableTaskOwnershipComponent from 'components/TableTaskOwnershipComponent'

const PlanningPage = (props) => {

  const [taskArea,setTaskArea] = useState([])
  const [taskOwnership, setTaskOwnership] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    const promises = [
      axios.get(API_URL+'ownership_ss_task'),
      axios.get(API_URL+'area_ss_task'),
    ]

    Promise.all(promises).then(result => {
      setTaskArea(result[1].data)
      setTaskOwnership(result[0].data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <h4 className="title_principal text-center">Planificación de Tareas</h4>
          <hr/>
          <Tabs defaultActiveKey="areas" id="uncontrolled-tab-example" variant="pills" className="nav nav-tabs nav-fill">
            <Tab eventKey="areas" title="Areas" key={'areas'}>
              <br/>
              <Tabs defaultActiveKey="today" id="uncontrolled-tab-example_2" variant="pills" className="nav nav-tabs nav-fill">
                <Tab eventKey="today" title="Día de Hoy">
                  <br/>
                  <TableTaskAreaComponent data={taskArea.filter(v => moment(v.initial_date).format('DD-MM-YYYY') === moment().tz('America/Santiago').format('DD-MM-YYYY')) }  history={props.history} />
                </Tab>
                <Tab eventKey="pendientes" title="Pendientes">
                  <br/>
                  <TableTaskAreaComponent data={taskArea.filter(v => v.status == 1)} history={props.history} />
                </Tab>
                <Tab eventKey="cerradas" title="Cerradas">
                  <br/>
                  <TableTaskAreaComponent data={taskArea.filter(v => v.status == 2)} history={props.history} />
                </Tab>
                <Tab eventKey="todas" title="Todas">
                  <br/>
                  <TableTaskAreaComponent data={taskArea} history={props.history} type="prueba"/>
                </Tab>
              </Tabs>
            </Tab>
            <Tab eventKey="propiedades" title="Propiedades" key={'propiedades'}>
              <br/>
              <Tabs defaultActiveKey="today_propiedad" id="uncontrolled-tab-example_1" variant="pills" className="nav nav-tabs nav-fill">
                <Tab eventKey="today_propiedad" title="Día de Hoy">
                  <br/>
                  <TableTaskOwnershipComponent data={taskOwnership.filter(v => moment(v.initial_date).format('DD-MM-YYYY') === moment().tz('America/Santiago').format('DD-MM-YYYY')) }  history={props.history} />
                </Tab>
                <Tab eventKey="pendientes_propiedad" title="Pendientes">
                  <br/>
                  <TableTaskOwnershipComponent data={taskOwnership.filter(v => v.status == 1)} history={props.history} />
                </Tab>
                <Tab eventKey="cerradas_propiedad" title="Cerradas">
                  <br/>
                  <TableTaskOwnershipComponent data={taskOwnership.filter(v => v.status == 2)} history={props.history} />
                </Tab>
                <Tab eventKey="todas_propiedad" title="Todas">
                  <br/>
                  <TableTaskOwnershipComponent data={taskOwnership} history={props.history} type="prueba1"/>
                </Tab>
              </Tabs>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default PlanningPage
