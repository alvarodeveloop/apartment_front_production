import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Card
} from 'react-bootstrap'
import Table from 'components/Table'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import 'styles/pages/dashboard.css'

const FrequentQuestionPage = (props) => {

  const [asks,setAsks] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(API_URL+'params_frequent_question').then(result => {
      setAsks(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Card>
            <Card.Header  style={{ backgroundColor: 'lightgray', color: 'black'}}>
              <h4>Preguntas Frecuentes</h4>
            </Card.Header>
            <Card.Body>
              <Accordion className="separated_borders">
                {asks.map((v,i) => (
                  <Card key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={i} style={{ backgroundColor: 'rgb(24, 20, 101)', color: 'white'}}>
                      {v.ask}
                    </Accordion.Toggle>
                    <Accordion.Collapse className="separated_borders_accordeon" eventKey={i}>
                      <h5 className="text-center">{v.answer}</h5>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FrequentQuestionPage
