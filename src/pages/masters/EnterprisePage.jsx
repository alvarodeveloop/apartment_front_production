import React, { useEffect , useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import {
  FaPlusCircle
} from 'react-icons/fa'
import Table from 'components/Table'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios'
import { toast } from 'react-toastify';
import { API_URL } from 'utils/constants'
let enterprise_columns = []

const EnterprisePage = (props) => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetchData()
    return () => {
      enterprise_columns = []
    }

  },[])

  useMemo(() => {
    enterprise_columns = [{

          Header : 'Rut',
          accessor: 'rut',
          Cell: props1 => {
            return (
              <Button variant="link" onClick={() => {modifyRegister(props1.cell.row.original)}}>{props1.cell.row.original.rut}</Button>
            )
          }
        },
        {
          Header : 'Nombre',
          accessor: 'name',
        },
        {
          Header : 'Dirección',
          accessor: 'address'
        },
        {
          Header : 'Email',
          accessor: 'email'
        },
        {
          Header : 'Activa',
          accessor: props1 =>  props1.is_active ? ['Si'] : ['No']
        },
        {
          Header: 'Acciones',
          Cell : props1 => {
            const id = props1.cell.row.original.id
            return(
              <DropdownButton id={'drop'+id} title="Seleccione"  block="true" size="sm">
                <Dropdown.Item onClick={() => modifyRegister(props1.cell.row.original)}>Modificar</Dropdown.Item>
                <Dropdown.Item onClick={() => deleteRegister(id)}>Eliminar</Dropdown.Item>
              </DropdownButton>
            )
          }
        }
      ]
  },[])

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'enterprise/'+id).then(result => {
      toast.success('Registro Eliminado')
      fetchData()
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const deleteRegister = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui-edit'>
            <h1>¿Esta seguro?</h1>
            <p className="font-alert">¿Desea realmente borrar este registro?</p>
            <button className="button-alert"
              onClick={() => {
                confirmDeleteRegister(id);
                onClose();
              }}
            >
              Si, Aceptar
            </button>
            <button className="button-alert" onClick={onClose}>No</button>
          </div>
        );
      }
    });
  }

  const fetchData = () => {
    axios.get(API_URL+'enterprise').then(result => {
      setData(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const goToForm = () => {
    props.history.replace('/masters/enterprise/form')
  }

  const modifyRegister = datos => {
    props.history.replace('/masters/enterprise/form/'+datos.id)
  }

  return (
    <Container fluid={true}>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button variant="secondary" size="sm" block={true} onClick={goToForm}>Crear Empresa <FaPlusCircle/></Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Table data={data} columns={enterprise_columns} />
        </Col>
      </Row>
    </Container>
  )
}

export default EnterprisePage
