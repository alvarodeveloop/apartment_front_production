import React, { useState , useEffect } from 'react'
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
import MantainerTipologyComponent from 'components/MantainerTipologyComponent'
import MantainerFailurePointComponent from 'components/MantainerFailurePointComponent'
import MantainerFailureSolutionComponent from 'components/MantainerFailureSolutionComponent'

const MantainerFailuresPage = (props) => {

  const [showDisplaySection2, setShowDisplaySection2] = useState(false)
  const [idSection2, setIdSection2] = useState(null)
  const [showDisplaySection3, setShowDisplaySection3] = useState(false)
  const [idSection3, setIdSection3] = useState(null)

  const handleDisplaySections = (section,id) => {
    if(section == 2){
      setShowDisplaySection2(true)
      setIdSection2(id)
    }else{
      setShowDisplaySection3(true)
      setIdSection3(id)
    }
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12}>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <MantainerTipologyComponent displaySection={handleDisplaySections} />
            </Col>
            {showDisplaySection2 ? (
              <Col sm={6} md={6} lg={6}>
                <MantainerFailurePointComponent  displaySection={handleDisplaySections} id={idSection2} />
              </Col>
            ) : ''}
          </Row>
          {showDisplaySection3 ? (
            <Row>
              <Col sm={6} md={6} lg={6}>
                <MantainerFailureSolutionComponent displaySection={handleDisplaySections} id={idSection3} />
              </Col>
            </Row>
            ) : ''}
        </Col>
      </Row>
    </Container>
  )
}

export default MantainerFailuresPage
