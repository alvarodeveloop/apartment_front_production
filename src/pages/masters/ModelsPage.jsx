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

let models_columns = []

const ModelsPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [models, setModels] = useState([])
  const [brands, setBrands] = useState([])
  const [dataForm, setDataForm] = useState({
    name: '',
    id_brand: '',
    state: true
  })

  const inputRef = useRef(null)

  useEffect(() => {
    fetchData()
    inputRef.current.focus()
    return () => {
      models_columns = []
    }
  },[])

  useMemo(() => {
    models_columns = [

          {
            Header: 'Código',
            accessor: 'id'
          },
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'Marca',
            accessor: props1 => [props1.brands.name]
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
    setDataForm({
      name: '',
      id_brand: '',
      state : true
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'master_models/'+id).then(result => {
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
    let promises = [
      axios.get(API_URL+'master_models'),
      axios.get(API_URL+'master_brand')
    ]

    Promise.all(promises).then(result => {
      setModels(result[0].data)
      setBrands(result[1].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setDataForm({
      name: data.name,
      id_brand: data.id_brand,
      id: data.id,
      state: data.state
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    if(e.target.name === "state"){
      let val = e.target.value === "false"  ? false : true
      setDataForm({...dataForm, [e.target.name] : val})
    }else{
      setDataForm({...dataForm, [e.target.name] : e.target.value})
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
      axios.put(API_URL+'master_models/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'master_models',objectPost).then(result => {
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
                {...props.inputName}
                value={dataForm.name}
                handleChange={onChange}
              />
              <InputField
                {...props.inputBrand}
                value={dataForm.id_brand}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                {brands.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row className="justify-content-center">
              <Col sm={6} md={6} lg={6}>
                <label className="form-control-label">Estado</label>
                <Row>
                  <Col sm={3} md={3} lg={3}>
                    <label>
                      <input type="checkbox" name="state" onChange={onChange} value={true} checked={dataForm.state  ? true : false} />
                      &nbsp;&nbsp;Activo
                    </label>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <label>
                      <input type="checkbox" name="state" onChange={onChange} value={false} checked={dataForm.state ? false : true} />
                      &nbsp;&nbsp;Inactivo
                    </label>
                  </Col>
                </Row>
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
          <Table data={models} columns={models_columns} />
        </Col>
      </Row>
    </Container>
  )
}

ModelsPage.defaultProps = {
  inputName: {
    type: 'text',
    required: true,
    name: 'name',
    label : 'Modelo',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputBrand: {
    type: 'select',
    required: true,
    name: 'id_brand',
    label : 'Marca',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default ModelsPage
