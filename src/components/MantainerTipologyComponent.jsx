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
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

let dataColumns = []
let dataColumns1 = []
let dataColumns2 = []

const MantainerTipologyComponent = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState([])
  const [dataForm, setForm] = useState({
    name: '',
    type_failure: '',
    is_active: false
  })
  const [data1, setData1] = useState([])
  const [dataForm1, setForm1] = useState({
    name: '',
    type_failure: '',
    is_active: false
  })
  const [data2, setData2] = useState([])
  const [dataForm2, setForm2] = useState({
    name: '',
    type_failure: '',
    is_active: false
  })

  const inputRef = useRef(null)
  const inputRef1 = useRef(null)

  useEffect(() => {

    fetchData()
    inputRef.current.focus()
    return () => {
      dataColumns = []
    }
  },[])

  useMemo(() => {
    dataColumns = [
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'Tipo',
            accessor: props1 => props1.type_failure == 1 ? 'Propiedades' : 'Áreas Comunes'
          },
          {
            Header: 'Activo',
            accessor: props1 => props1.is_active ? ['Si'] : ['No']
          },
          {
            Header: 'Acciones',
            Cell: props1 => {
              const id = props1.cell.row.original.id
              return(
                <DropdownButton id={'drop'+id} title="Seleccione"  block="true">
                  <Dropdown.Item onClick={() => addFailuresPuntuals(props1.cell.row.original)}>Agregar Fallas Puntuales</Dropdown.Item>
                  <Dropdown.Item onClick={() => modifyRegister(props1.cell.row.original)}>Modificar</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteRegister(id)}>Eliminar</Dropdown.Item>
                </DropdownButton>
              )
            }
          }
      ]
  },[])

  const addFailuresPuntuals = dataOrigin => {
    props.displaySection(2,dataOrigin.id)
  }

  const clearForm = () => {
    setForm({
      name: '',
      type_failure: '',
      is_active: false
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'params_manage_problems_tipology/'+id).then(result => {
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
    axios.get(API_URL+'params_manage_problems_tipology').then(result => {
      setData(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setForm({
      name: data.name,
      type_failure: data.type_failure,
      is_active: data.is_active,
      id: data.id,
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    if(e.target.name === "is_active"){
      setForm({...dataForm, [e.target.name] : e.target.checked})
    }else{
      setForm({...dataForm, [e.target.name] : e.target.value})
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

    let objectPost = Object.assign({},dataForm)
    if(objectPost.id){
      axios.put(API_URL+'params_manage_problems_tipology/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'params_manage_problems_tipology',objectPost).then(result => {
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

      <Row>
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <Row>
            <Col sm={12} md={12} lg={12} xs={12}>
              <h4 className="text-center">Tipología de Fallas</h4>
            </Col>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Form onSubmit={onSubmit} noValidate validated={validated}>
                <Row>
                    <InputFieldRef
                      ref={inputRef}
                      { ...props.inputName}
                      handleChange={onChange}
                      value={dataForm.name}
                    />
                    <InputField
                      { ...props.inputTypeFailure}
                      handleChange={onChange}
                      value={dataForm.type_failure}
                    >
                      <option value="">--Seleccione--</option>
                      <option value="1">Propiedades</option>
                      <option value="2">Áreas Comunes</option>
                    </InputField>
                </Row>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <label for="checkbox_visible">
                      <input type="checkbox" name="is_active" id="checkbox_visible" checked={dataForm.is_active} onChange={onChange} />
                      &nbsp; Activa
                    </label>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <Button type="submit" variant="primary" block={true}>Guardar Datos</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col sm={12} md={12} lg={12} xs={12}>
              <br/><br/>
              <Table data={data} columns={dataColumns} />
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

MantainerTipologyComponent.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Nombre',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputTypeFailure: {
    type: 'select',
    required: true,
    name: 'type_failure',
    label : 'Tipo',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default MantainerTipologyComponent
