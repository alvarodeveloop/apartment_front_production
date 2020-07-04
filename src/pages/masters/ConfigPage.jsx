import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs
} from 'react-bootstrap'
import ConfigSSComponent from 'components/config/ConfigSSComponent'
import ConfigPreDelivery from 'components/config/ConfigPreDelivery'
import ConfigHousingComplexes from 'components/config/ConfigHousingComplexes'
import ConfigPropertyData from 'components/config/ConfigPropertyData'
import ConfigFile from 'components/config/ConfigFile'
import ConfigServerMail from 'components/config/ConfigServerMail'
import ConfigTemplateMail from 'components/config/ConfigTemplateMail'
import ConfigCustomizeSystem from 'components/config/ConfigCustomizeSystem'


const ConfigPage = (props) => {

  useEffect(() => {
    
  },[])

  return (
    <Container fluid={true}>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12}>
          <Tabs defaultActiveKey="config_ss" id="uncontrolled-tab-example">
            <Tab eventKey="config_ss" title="Datos S.S">
              <ConfigSSComponent {...props} />
            </Tab>
            <Tab eventKey="pre_delivery" title="Datos Pre Entrega">
              <ConfigPreDelivery {...props} />
            </Tab>
            <Tab eventKey="housing_complexes" title="Conjuntos Habitacionales">
              <ConfigHousingComplexes {...props} />
            </Tab>
            <Tab eventKey="property_data" title="Datos Propiedad">
              <ConfigPropertyData {...props} />
            </Tab>
            <Tab eventKey="config_file" title="Datos Informes">
              <ConfigFile {...props} />
            </Tab>
            <Tab eventKey="config_server_mail" title="Datos Servidor de Correo">
              <ConfigServerMail {...props} />
            </Tab>
            <Tab eventKey="config_mail_template" title="Datos Firma de Correo">
              <ConfigTemplateMail {...props} />
            </Tab>
            <Tab eventKey="config_system_customize" title="Datos Personalización del Sistema">
              <ConfigCustomizeSystem {...props} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default ConfigPage
