import React from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
} from 'react-bootstrap'

const DescriptionOwnershipComponent = (props) => {

  return (
    <Container>
      <Row>
        <Col sm={6} md={6} lg={6}>
          <h4 className="text-center">Propietario</h4>
          <Row>
            <Col sm={12} md={12} lg={12}>
              Solicita<br/>
              <b>{props.user.name}</b>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} lg={12}>
              Teléfono:<br/>
            <b>{props.ownership ? props.ownership.ownership.ownership_client.phone_1 ? props.ownership.ownership.ownership_client.phone_1 : 'no posee' : ''}</b>
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
              <b>{props.ownership ? props.ownership.ownership.number : ''}</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Proyecto:<br/>
              <b>{props.ownership ? props.ownership.ownership.housing_complexe.name_client_administration : ''}</b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Estacionamiento(s):<br/>
              {props.ownership ? (
                <React.Fragment>
                  {props.ownership.ownership.parkings.filter(v => v.type == 2).map( (v,i) => (
                    <span key={i}><b>{v.name}</b><br/></span>
                  ))}
                </React.Fragment>
              )  : ''}
              <b></b>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col sm={12} md={12} lg={12}>
                Bodega(s):<br/>
              {props.ownership ? (
                <React.Fragment>
                  {
                    props.ownership.ownership.parkings.filter(v => v.type == 1).map(v => (
                      <span><b>{v.name}</b><br/></span>
                  ))}
                </React.Fragment>
              ) : ''}
              <b></b>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default DescriptionOwnershipComponent
