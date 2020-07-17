import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import{
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Card,
  Form
} from 'react-bootstrap'
import Table from 'components/Table'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import DescriptionOwnershipComponent from 'components/DescriptionOwnershipComponent'
import * as moment from 'moment-timezone'
import 'styles/pages/dashboard.css'

const QueryPage = (props) => {

  const [queryForm,setQueryForm] = useState({
    reason: '',
    description: ''
  })
  const [validated, setValidated] = useState(false)
  const [queryData, setQueryData] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    fetchData()
  },[props.id_ownership_selected])

  useEffect(() => {
    inputRef.current.focus()
    fetchData()
  },[props.id_ownership_selected])

  const fetchData = () => {
    axios.get(API_URL+'query_ownership/'+props.id_ownership_selected+"/"+props.ownership.id_user).then(result => {
      setQueryData(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange = e => {
    setQueryForm({...queryForm,[e.target.name] : e.target.value})
  }

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},queryForm,{
      id_ownership: props.id_ownership_selected,
      id_user: props.ownership.id_user
    })

    axios.post(API_URL+'query_ownership',objectPost).then(result => {
      toast.success('Registro Creado')
      fetchData()
      clearForm()
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const clearForm = () => {
    setQueryForm({
      reason: '',
      description: ''
    })
    setValidated(false)
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <DescriptionOwnershipComponent ownership={props.ownership} user={props.user} />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                ref={inputRef}
                type="select"
                name="reason"
                label="Motivo"
                required={true}
                cols="col-md-6 col-sm-6 col-lg-6"
                messageErrors={[
                  'Requerido*'
                ]}
                handleChange={onChange}
                value={queryForm.reason}
              >
                <option value=''>--Seleccione--</option>
                <option value='1'>Consulta</option>
                <option value='2'>Reclamo</option>
                <option value='3'>Otros</option>
              </InputFieldRef>
            </Row>
            <Row>
              <InputField
                type="textarea"
                name="description"
                label="Descripción"
                required={true}
                cols="col-md-12 col-sm-12 col-lg-12"
                messageErrors={[
                  'Requerido*'
                ]}
                handleChange={onChange}
                value={queryForm.description}
              />
            </Row>
            <Row className="justify-content-center">
              <Col sm={6} md={6} lg={6}>
                <Button variant="primary" size="sm" block={true} type="submit">Enviar</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Table columns={[
              {
                Header: 'Razon',
                accessor: props1 => props1.reason == 1 ? ['Consulta'] : props1.reason == 2 ? ['Reclamo'] : ['Otros']
              },
              {
                Header: 'Descripción',
                accessor: 'description'
              },
              {
                Header: 'Creación',
                accessor: props1 => [moment(props1.createdAt).format('DD-MM-YYYY')]
              },
          ]} data={queryData}/>
        </Col>
      </Row>
    </Container>
  )
}

function mapDispatchToProps(state){

  return {
    id_ownership_selected: state.ownership.ownership_selected,
    ownership : state.ownership.ownerships.find(v => v.id_ownership == state.ownership.ownership_selected),
    user: state.auth.user
  }
}

export default connect(mapDispatchToProps,{})(QueryPage)
