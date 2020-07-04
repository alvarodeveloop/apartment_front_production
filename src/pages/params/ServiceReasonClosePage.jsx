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
import { NotificationManager } from 'react-notifications';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

let dataColumns = []

const ServiceReasonClosePage = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState([])
  const [dataForm, setForm] = useState({
    name: '',
    acronym: '',
    type: false,
    report: false,
    is_active: true
  })

  const inputRef = useRef(null)

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
            Header: 'Código',
            accessor: 'id'
          },
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'Sigla',
            accessor: 'acronym'
          },
          {
            Header: 'Para',
            accessor: props1 => props1.type ? 'Fallas' : 'Cierre'
          },
          {
            Header: 'En Reporte',
            accessor: props1 => props1.report ? 'Si' : 'No'
          },
          {
            Header: 'Activo',
            accessor: props1 => props1.is_active ? 'Si' : 'No'
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
    setForm({
      name: '',
      acronym: '',
      type: false,
      report: false,
      is_active: false
    })
    inputRef.current.focus()
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'params_service_reason_close/'+id).then(result => {
      NotificationManager.success('Registro Eliminado')
      fetchData()
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
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
    axios.get(API_URL+'params_service_reason_close').then(result => {
      setData(result.data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setForm({
      name: data.name,
      acronym: data.acronym,
      type: data.type,
      is_active: data.is_active,
      report: data.report,
      id: data.id,
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    if(e.target.name === "is_active" || e.target.name === "report"){
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
      axios.put(API_URL+'params_service_reason_close/'+objectPost.id,objectPost).then(result => {
        NotificationManager.success('Registro Modificado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'params_service_reason_close',objectPost).then(result => {
        NotificationManager.success('Registro Creado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }
  }

  return (
    <Container>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="text-right">
          <span className="text-danger">*Campos Obligatorios</span>
          <br/><br/>
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
                type="text"
                name="acronym"
                label="Sigla:"
                required={true}
                col="col-md-4 col-sm-4 col-lg-4"
                messageErrors= {[
                  'Requerido*'
                ]}
                handleChange={onChange}
                value={dataForm.acronym}
              />
            </Row>
            <Row>
              <InputField
                type="select"
                name="type"
                label="Para:"
                required={true}
                col="col-md-4 col-sm-4 col-lg-4"
                handleChange={onChange}
                value={dataForm.type}
                messageErrors= {[
                  'Requerido*'
                ]}
              >
                <option value={false}>Cierre</option>
                <option value={true}>Falla</option>
              </InputField>
              <Col sm={3} md={3} lg={3} className="margin_col">
                <label forHtml="is_active">
                  <input type="checkbox" name="is_active" id="is_active" checked={dataForm.is_active} onChange={onChange} />
                  &nbsp; Activo
                </label>
              </Col>
              <Col sm={3} md={3} lg={3} className="margin_col">
                <label forHtml="report">
                  <input type="checkbox" name="report" id="report" checked={dataForm.report}  onChange={onChange} />
                  &nbsp; En Reporte
                </label>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <br/>
                <Button size="sm" type="submit" variant="primary" block={true}>Guardar Datos</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <br/><br/>
          <Table data={data} columns={dataColumns} />
        </Col>
      </Row>
    </Container>
  )
}

ServiceReasonClosePage.defaultProps = {
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
}

export default ServiceReasonClosePage
