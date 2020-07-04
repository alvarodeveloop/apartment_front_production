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
let id_point = 0

const MantainerFailureSolutionComponent = (props) => {

  const [validated, setValidated] = useState(false)
  const [data, setData] = useState([])
  const [nameFailure, setNameFailure] = useState('')
  const [solutions, setSolutions] = useState([])
  const [dataForm, setForm] = useState({
    id_solution: '',
    id_point_failure: '',
  })

  const inputRef = useRef(null)

  useEffect(() => {
    id_point = props.id
    inputRef.current.focus()
    setForm({...dataForm,id_point_failure: id_point})
    fetchData()
  },[props.id])

  useEffect(() => {

    getSolutions()

    return () => {
      dataColumns = []
      id_point =  0
    }
  },[])

  useMemo(() => {
    dataColumns = [
          {
            Header: 'Solución',
            accessor: props1 => [props1.solution.name]
          },
          {
            Header: 'Acciones',
            Cell: props1 => {
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

  const clearForm = () => {
    setForm({
      id_solution: '',
      id_point_failure: id_point,
    })
    inputRef.current.focus()
  }

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'params_manage_problems_solutions_point_failure/'+id).then(result => {
      NotificationManager.success('Registro Eliminado')
      fetchData()
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
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
    axios.get(API_URL+'params_manage_problems_point_failures/'+id_point).then(result => {
      setData(result.data.solutions)
      setNameFailure(result.data.name)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const getSolutions = () => {
    axios.get(API_URL+'params_manage_problems_solutions').then(result => {
      setSolutions(result.data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        console.log(err);
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const modifyRegister = data => {
    setForm({
      id_solution: data.id_solution,
      id_point_failure: data.id_point_failure,
      id: data.id,
    })
    inputRef.current.focus()
  }

  const onChange = e => {
    setForm({...dataForm, [e.target.name] : e.target.value})
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
      axios.put(API_URL+'params_manage_problems_solutions_point_failure/'+objectPost.id,objectPost).then(result => {
        NotificationManager.success('Registro Modificado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          console.log(err);
          NotificationManager.error('Error, contacte con soporte')
        }
      })
    }else{
      axios.post(API_URL+'params_manage_problems_solutions_point_failure',objectPost).then(result => {
        NotificationManager.success('Registro Creado')
        fetchData()
        clearForm()
      }).catch(err => {
        if(err.response){
          NotificationManager.error(err.response.data.message)
        }else{
          console.log(err);
          NotificationManager.error('Error, contacte con soporte')
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
              <h4 className="text-center">Solución de { nameFailure }</h4>
            </Col>
            <Col sm={12} md={12} lg={12} xs={12}>
              <Form onSubmit={onSubmit} noValidate validated={validated}>
                <Row>
                    <InputFieldRef
                      ref={inputRef}
                      { ...props.inputSolution}
                      handleChange={onChange}
                      value={dataForm.id_solution}
                    >
                      <option value=''>--Seleccione--</option>
                      {solutions.map((v,i) => (
                        <option value={v.id} key={i}>{v.name}</option>
                      ))}
                    </InputFieldRef>
                </Row>
                <Row>
                  <Col sm={6} md={6} lg={6}>
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
        </Col>
      </Row>
  )
}

MantainerFailureSolutionComponent.propTypes = {
  id: PropTypes.number.isRequired,
  displaySection: PropTypes.func.isRequired
}

MantainerFailureSolutionComponent.defaultProps = {
  inputSolution: {
    type: 'select',
    required: true,
    name: 'id_solution',
    label : 'Solución',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"
  },
}

export default MantainerFailureSolutionComponent
