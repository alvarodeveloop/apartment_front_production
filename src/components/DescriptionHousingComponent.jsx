import React from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
} from 'react-bootstrap'

const DescriptionHousingComponent = (props) => {

  return (
    <Container>
      <Row>
        <Col sm={6} md={6} lg={6}>
          <h4 className="text-center">Propietario</h4>
          <Row>
            <Col sm={12} md={12} lg={12}>
              Solicita<br/>
            <b>{props.housing.housing.name_client_administration}</b>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              Teléfono:<br/>
            <b>{props.housing ? props.housing.housing.phone_client_administration : ''}</b>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              Correo Electrónico:<br/>
              <b>{props.user.email}</b>
              <br/>
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <h4 className="text-center">Propiedad</h4>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Número:<br/>
              <b>Área Común</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Proyecto:<br/>
              <b>{props.housing ? props.housing.housing.name : ''}</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Administración:<br/>
              <b>{props.housing ? props.housing.housing.admin_postventa !== 'null' ? props.housing.housing.admin_postventa : '' : ''}</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Estacionamiento(s):<br/>
                <b>No posee</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Bodega(s):<br/>
                <b>No posee</b>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default DescriptionHousingComponent
