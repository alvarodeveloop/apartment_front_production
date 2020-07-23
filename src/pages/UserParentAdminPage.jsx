import React, {useState, useEffect, useMemo, useRef} from 'react'
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
let columns_user = []

const UserParentAdminPage = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    rut: '',
    email: '',
    password: '',
    password_repeat: ''
  })
  const [validated, setValidated] = useState(false)
  const [dataUser,setDataUser]  = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    fetchData()
  },[])

  useMemo(() => {
    columns_user = [
      {
        Header: 'Rut',
        accessor: 'rut'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Nombre',
        accessor: 'name'
      },
      {
        Header: 'Estado',
        accessor: props1 => props1.delete ? ['Desactivado'] : ['Activo']
      },
      {
        Header: 'Acciones',
        Cell: props1 => {
          const id = props1.cell.row.original.id
          return(
            <DropdownButton id={'drop'+id} title="Seleccione"  block="true">
              <Dropdown.Item onClick={() => modifyRegister(props1.cell.row.original)}>Modificar</Dropdown.Item>
              <Dropdown.Item onClick={() => deleteRegister(id)}>{props1.cell.row.original.delete ? 'Activar' : 'Deshabilitar'}</Dropdown.Item>
            </DropdownButton>
          )
        }
      },
    ]
  },[])

  const fetchData = () => {
    axios.get(API_URL+'user_admin_parent').then(result => {
      setDataUser(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange = e => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const onSubmit = e => {

    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }
    let objectPost = Object.assign({},formData)
    if(objectPost.password !== objectPost.password_repeat){
      toast.error('Error, las contraseñas no coinciden')
      return false
    }

    if(objectPost.id){
      axios.put(API_URL+'user_admin_parent/'+objectPost.id,objectPost).then(result => {
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
      axios.post(API_URL+'users_parent_admin',objectPost).then(result => {
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

  const modifyRegister = datos => {
    setFormData({
      name: datos.name,
      rut: datos.rut,
      email: datos.email,
      password: '',
      password_repeat: '',
      id: datos.id
    })
  }

  const deleteRegister = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui-edit'>
            <h1>¿Esta seguro?</h1>
            <p className="font-alert">¿Desea realmente cambiar el estado de este registro?</p>
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

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'user_admin_parent/'+id).then(result => {
      toast.success('Registro Deshabilitado')
      fetchData()
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const clearForm = () => {
    setFormData({
      name: '',
      rut: '',
      email: '',
      password: '',
      password_repeat: ''
    })
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Row>
              <InputFieldRef
                ref={inputRef}
                type="text"
                name="rut"
                label="Rut"
                required={true}
                value={formData.rut}
                handleChange={onChange}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*'
                ]}
              />
              <InputField
                type="email"
                name="email"
                label="Email"
                required={false}
                value={formData.email}
                handleChange={onChange}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*', 'Formato Email*'
                ]}
              />
              <InputField
                type="text"
                name="name"
                label="Nombre y Apellido"
                required={true}
                value={formData.name}
                handleChange={onChange}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*'
                ]}
              />
            </Row>
            <Row>
              <InputField
                type="password"
                name="password"
                label="Contraseña"
                required={formData.id ? false : true}
                value={formData.password}
                handleChange={onChange}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*'
                ]}
              />
              <InputField
                type="password"
                name="password_repeat"
                label="Repita Contraseña"
                required={formData.id ? false : true}
                value={formData.password_repeat}
                handleChange={onChange}
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  'Requerido*'
                ]}
              />
            </Row>
            <Row className="justify-content-center">
              <Col sm={4} md={4} lg={4}>
                <Button variant="secondary" block={true} size="sm" type="submit">Enviar</Button>
              </Col>
              {formData.id ? (
                <Col sm={4} md={4} lg={4}>
                  <Button variant="danger" block={true} size="sm" type="button" onClick={clearForm}>Cancelar</Button>
                </Col>
              ) : ''}
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Table columns={columns_user} data={dataUser}/>
        </Col>
      </Row>
    </Container>
  )
}

export default UserParentAdminPage
