import React, { useMemo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import{
  Container,
  Row,
  Col,
  Button,
  Badge
} from 'react-bootstrap'
import Table from 'components/Table'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import * as moment from 'moment-timezone'

let columns_failures = []

const FailureManagePage = (props) => {

  const [failures, setFailures] = useState([])

  useEffect(() => {
    fetchData()
  },[props.id_ownership_selected])

  useMemo(() => {
    columns_failures = [
      {
        Header: 'Nro S.S',
        accessor: 'id_ownership_ss'
      },
      {
        Header: 'Fecha Emisión',
        accessor: props1 => [moment(props1.ownership_ss.date_request).format('DD-MM-YYYY')]
      },
      {
        Header: 'Tipología de Falla',
        accessor: props1 =>  props1.tipology ? [props1.tipology.name] : []
      },
      {
        Header: 'Área',
        accessor: props1 => [props1.precint.name]
      },
      {
        Header: 'Falla Puntual',
        accessor: props1 => props1.point ? [props1.point.name] : []
      },
      {
        Header: 'Estado',
        accessor: props1 => [props1.status.status],
        Cell: props1 => {
          const original = props1.cell.row.original
          return(
            <Badge className="font-badge" variant="danger">{original.status.status}</Badge>
          )
        }
      },
    ]
  },[])

  const fetchData = () => {
    axios.get(API_URL+'get_failure_ownership_ss_by_housing/'+props.housing.id_housing).then(result => {
      setFailures(result.data)
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
          <h4 className="title_principal">Estado de Servicios</h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Table columns={columns_failures} data={failures} />
        </Col>
      </Row>
    </Container>
  )
}

function mapDispatchToProps(state){

  return {
    housing : state.housing.housing,
    user: state.auth.user
  }
}

export default connect(mapDispatchToProps,{})(FailureManagePage)
