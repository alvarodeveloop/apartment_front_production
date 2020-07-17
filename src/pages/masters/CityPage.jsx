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

let cityColumns = []

const CityPage = (props) => {

  const [validated, setValidated] = useState(false)
  const [cities, setCities] = useState([])
  const [countrys, setCountrys] = useState([])
  const [cityForm, setCityForm] = useState({
    name: '',
    id_country: ''
  })

  const inputRef = useRef(null)

  useEffect(() => {
    fetchData()
    inputRef.current.focus()

    return () => {
      cityColumns = []
    }
  },[])

  useMemo(() => {
    cityColumns = [

          {
            Header: 'Código',
            accessor: 'id'
          },
          {
            Header: 'Nombre',
            accessor: 'name'
          },
          {
            Header: 'País',
            accessor: props1 => [props1.countrys.name]
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
    setCityForm({
      name: '',
      id_country: ''
    })
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'master_cities/'+id).then(result => {
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
    let promises = [
      axios.get(API_URL+'master_cities'),
      axios.get(API_URL+'master_countrys')
    ]

    Promise.all(promises).then(result => {
      setCities(result[0].data)
      setCountrys(result[1].data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setCityForm({
      name: data.name,
      id_country: data.id_country,
      id: data.id
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    setCityForm({...cityForm, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }

    let objectPost = Object.assign({},cityForm)
    if(objectPost.id){
      axios.put(API_URL+'master_cities/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'master_cities',objectPost).then(result => {
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
              <Col sm={6} md={6} lg={6}>
                <Form.Group>
                  <label className="form-control-label"><span className="asterisk_red">*</span>Nombre Ciudad</label>
                  <Form.Control
                    ref={inputRef}
                    { ...props.inputName}
                    onChange={onChange}
                    value={cityForm.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    <span>Requerido*</span>
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <InputField
                {...props.inputCountry}
                handleChange={onChange}
                value={cityForm.id_country}
              >
                <option value="">--Seleccione--</option>
                {countrys.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
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
          <Table data={cities} columns={cityColumns} />
        </Col>
      </Row>
    </Container>
  )
}

CityPage.defaultProps = {
  inputName:{
    type: 'text',
    required: true,
    name: 'name',
  },
  inputCountry: {
    type: 'select',
    required: true,
    name: 'id_country',
    label : 'País',
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6",
    messageErrors: [
      'Requerido*'
    ],
  },
}

export default CityPage
