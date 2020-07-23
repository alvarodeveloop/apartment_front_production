import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Container
} from 'react-bootstrap'
import 'styles/components/dashboardComponent.css'

const DashboardHousingComponent = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h4 className="title_principal">Bienvenido {props.user.name} - {props.housing.housing.name} - Administración </h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <p>Este servicio web tiene como objetivo facilitar y personalizar el servicio de posventa con el cliente dando un seguimiento y una gestión puntual a cada solicitud de servicio que se genere en su inmueble.</p>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <ul>
            <li className="border_bottom">Realice solicitudes de servicio.</li>
            <li className="border_bottom">Revise el seguimiento y el estatus de la solicitud 100% en línea.</li>
            <li className="border_bottom">Genere cualquier consulta o duda relacionada al inmueble u otros temas.</li>
            <li className="border_bottom">Descargue manuales de operación y los planos del inmueble.</li>
            <li className="border_bottom">Revise los avisos importantes.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardHousingComponent
