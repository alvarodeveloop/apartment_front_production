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
import InputFieldRef from 'components/input/InputComponentRef'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

let enclosure_columns = []

const PrecintPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [enclosures, setEnclosures] = useState([])
  const [enclosureForm, setEnclosureForm] = useState({
    name: '',
    state: true
  })

  const inputRef = useRef(null)

  useEffect(() => {
    fetchData()
    inputRef.current.focus()
    return () => {
      enclosure_columns = []
    }
  },[])

  useMemo(() => {
    enclosure_columns = [

          {
            Header: 'Código',
            accessor: 'id'
          },
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'Estado',
            accessor: props1 => [props1.state ? 'Activo' : 'Inactivo']
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
    setEnclosureForm({
      name: '',
      state : true
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'master_precint/'+id).then(result => {
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
    axios.get(API_URL+'master_precint').then(result => {
      setEnclosures(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setEnclosureForm({
      name: data.name,
      id: data.id,
      state: data.state
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    if(e.target.name === "state"){
      let val = e.target.value === "false"  ? false : true
      setEnclosureForm({...enclosureForm, [e.target.name] : val})
    }else{
      setEnclosureForm({...enclosureForm, [e.target.name] : e.target.value})
    }
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},enclosureForm)
    if(objectPost.id){
      axios.put(API_URL+'master_precint/'+objectPost.id,objectPost).then(result => {
        toast.success('Registro Modificado')
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
      axios.post(API_URL+'master_precint',objectPost).then(result => {
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
  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="">
          <h4 className="title_principal">Áreas</h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                ref={inputRef}
                {...props.inputName}
                value={enclosureForm.name}
                handleChange={onChange}
              />
              <Col sm={6} md={6} lg={6}>
                <label className="form-control-label">Estado</label>
                <Row>
                  <Col sm={3} md={3} lg={3}>
                    <label>
                      <input type="checkbox" name="state" onChange={onChange} value={true} checked={enclosureForm.state  ? true : false} />
                      &nbsp;&nbsp;Activo
                    </label>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <label>
                      <input type="checkbox" name="state" onChange={onChange} value={false} checked={enclosureForm.state ? false : true} />
                      &nbsp;&nbsp;Inactivo
                    </label>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={6} md={6} lg={6}>
                <br/>
                <Button type="submit" variant="primary" block={true}>Guardar Datos</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <br/><br/>
          <Table data={enclosures} columns={enclosure_columns} />
        </Col>
      </Row>
    </Container>
  )
}

PrecintPage.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Área',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default PrecintPage
