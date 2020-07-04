import React from 'react'
import PropTypes from 'prop-types'
import ClientFormComponent from 'components/ClientFormComponent'
import {
  Row,
  Col
} from 'react-bootstrap'

const ClientFormPage = (props) => {
  return (
    <Row className="containerDiv">
      <Col sm={12} md={12} lg={12}>
        <ClientFormComponent isModal={false} showTable={() => {}} {...props}/>
      </Col>
    </Row>
  )
}

export default ClientFormPage
