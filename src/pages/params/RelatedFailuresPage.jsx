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

let dataColumns = []

const RelatedFailuresPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState([])
  const [dataForm, setForm] = useState({
    name: '',
    is_active: ''
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
            Header: 'Activo',
            accessor: props1 => props1.is_active ? ['Si'] : ['No']
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
      is_active: false
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'params_manage_problems_related_failures/'+id).then(result => {
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
    axios.get(API_URL+'params_manage_problems_related_failures').then(result => {
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
      axios.put(API_URL+'params_manage_problems_related_failures/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'params_manage_problems_related_failures',objectPost).then(result => {
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
                <Col sm={6} md={6} lg={6}>
                  <br/>
                  <label for="is_active">
                    <input type="checkbox" name="is_active" id="is_active" checked={dataForm.is_active} onChange={onChange} />
                    &nbsp; Activa
                  </label>
                </Col>
            </Row>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <br/>
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
    </Container>
  )
}

RelatedFailuresPage.defaultProps = {
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

export default RelatedFailuresPage
