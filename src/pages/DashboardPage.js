import { AnnouncementCard, TodosCard } from 'components/Card';
import Page from 'components/Page';
import React from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Accordion
} from 'react-bootstrap'
import 'styles/pages/dashboard.css'

const DashboardPage = props => {

  const redirectRoute = route => {
    props.history.replace(route)
  }

    return (
      <Page
        className="DashboardPage"
        title="Escritorio"
        breadcrumbs={[{ name: 'Escritorio', active: true }]}
      >
        <Container fluid={true}>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Card>
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  S.S Abiertas por mas de 5 días
                </Card.Header>
                <Card.Body>
                  <h5 className="alert alert-warning text-center">No se encontraron Registros</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Card>
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  S.S. del dia para Constructora.
                </Card.Header>
                <Card.Body>
                  <h5 className="alert alert-warning text-center">No se encontraron Registros</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <br/>
              <Card className="accordeon_dashboard">
                <Card.Header style={{ backgroundColor: 'lightgray', color: 'black'}}>
                  Propidades con primera Garantía vencida (Inscripción a Conservador).
                </Card.Header>
                <Card.Body>
                  <Accordion className="separated_borders">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
                        Condominio1: 0
                      </Accordion.Toggle>
                      <Accordion.Collapse className="separated_borders_accordeon" eventKey="0">
                        <h5 className="text-center">No se encontraron registros</h5>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1" style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
                        Condominio2: 0
                      </Accordion.Toggle>
                      <Accordion.Collapse className="" eventKey="1">
                        <Card.Body>
                          <h5 className="text-center">No se encontraron registros</h5>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2" style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
                        Condominio3: 0
                      </Accordion.Toggle>
                      <Accordion.Collapse className="separated_borders_accordeon" eventKey="2">
                        <h5 className="text-center">No se encontraron registros</h5>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="4" style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
                        Condominio4: 0
                      </Accordion.Toggle>
                      <Accordion.Collapse className="separated_borders_accordeon" eventKey="4">
                        <h5 className="text-center">No se encontraron registros</h5>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Page>
    );

}
export default DashboardPage;
