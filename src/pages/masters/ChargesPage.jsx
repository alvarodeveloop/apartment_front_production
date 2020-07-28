import React, { useMemo, useState , useEffect, useRef } from 'react'
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
import Table from 'components/Table'
import axios from 'axios'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

let charge_columns = []

const ChargesPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [charges, setCharges] = useState([])
  const [chargeForm, setChargeForm] = useState({
    name: ''
  })

  const inputRef = useRef(null)

  useEffect(() => {
    fetchData()
    inputRef.current.focus()

    return () => {
      charge_columns = []
    }
  },[])

  useMemo(() => {
    charge_columns = [

          {
            Header: 'Código',
            accessor: 'id'
          },
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'Acciones',
            Cell: props1 => {
              const id = props1.cell.row.original.id
              return(
                <DropdownButton id={'drop'+id} title="Seleccione"  block="true">
                  <Dropdown.Item onClick={() => modifyRegister(props1.cell.row.original)}>Modificar</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteRegister(id)}>Eliminar</Dropdown.Item>
                </DropdownButton>
              )
            }
          }
        ]
  },[])

  const clearForm = () => {
    setChargeForm({
      name: ''
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'master_charges/'+id).then(result => {
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
    axios.get(API_URL+'master_charges').then(result => {
      setCharges(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setChargeForm({
      name: data.name,
      id: data.id
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    setChargeForm({...chargeForm, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},chargeForm)
    if(objectPost.id){
      axios.put(API_URL+'master_charges/'+objectPost.id,objectPost).then(result => {
        toast.success('Cargo Modificado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          toast.error(err.response.data.message)
        }else{
          toast.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'master_charges',objectPost).then(result => {
        toast.success('Cargo Creado')
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
  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="">
          <h4 className="title_principal">Cargos</h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <Form.Group>
                  <label className="form-control-label"><span className="asterisk_red">*</span>Nombre Cargo</label>
                  <Form.Control
                    ref={inputRef}
                    { ...props.inputName}
                    onChange={onChange}
                    value={chargeForm.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    <span>Requerido*</span>
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <br/>
                <Button type="submit" variant="primary" block={true}>Guardar Datos</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <br/><br/>
          <Table data={charges} columns={charge_columns} />
        </Col>
      </Row>
    </Container>
  )
}

ChargesPage.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
  },
}

export default ChargesPage
