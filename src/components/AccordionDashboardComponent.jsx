import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
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
import Table from 'components/Table'
import { formatNumber, s2ab } from 'utils/functions'
import { saveAs } from 'file-saver'
import * as xlsx from 'xlsx'
import * as moment from 'moment-timezone'

const AccordionDashboardComponent = (props) => {
  useEffect(() => {
    console.log(props.housing);
  },[])

  const exportToExcel = () => {

    let wb = xlsx.utils.book_new()
    let bodyTable = [['Nro Propiedad','C. Habitacional','Tipo Propiedad','Propietario','Inscripción a Conservador','Termino de Garantía']]

    wb.Props = {
      Title: "Reporte de Propiedades con garantia vencida (inscripción a conservador)",
      Subject: "Exportación de Data",
      Author: 'Veanx tecnology',
      CreatedDate: moment().format('YYYY-MM-DD')
    };
    wb.SheetNames.push("Propiedades");

    props.housing.ownerships.forEach((v,i) => {
      bodyTable.push([
        v.number,
        v.housing_complexe.name,
        v.typeOwnership.name,
        v.ownership_client.name +' '+v.ownership_client.last_names,
        moment(v.date_inscription_conservative).format('DD-MM-YYYY'),
        moment(v.date_inscription_conservative).add(props.config.garanty_1, 'years').format('DD-MM-YYYY'),
      ])
    })

    var ws = xlsx.utils.aoa_to_sheet(bodyTable);
    wb.Sheets["Propiedades"] = ws;
    var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
    let datos = s2ab(wbout)
    saveAs(new Blob([datos],{type:"application/octet-stream"}), 'Reporte de Propiedades con Garantias Vencidas a Conservador'+moment().format('DD-MM-YYYY')+'.xlsx')

  }

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={props.id} style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
            {props.housing.name} : {props.housing.ownerships.length}
          </Accordion.Toggle>
          <Accordion.Collapse className="separated_borders_accordeon" eventKey={props.id}>

            {props.housing.ownerships ? (
              <Row>
                <Col sm={4} md={4} lg={4}>
                  <Button variant="success" block={true} type="button" size="sm" onClick={exportToExcel}>Exportar a Excel</Button>
                  <br/>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Table columns={props.columns} data={props.housing.ownerships}/>
                </Col>
              </Row>
            ) : (
              <h5 className="text-center">No se encontraron registros</h5>
            )}
          </Accordion.Collapse>
        </Card>
      </Col>
    </Row>
  )
}

AccordionDashboardComponent.propTypes = {
  housing : PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default AccordionDashboardComponent
