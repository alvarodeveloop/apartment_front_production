import React, { useMemo,useRef,useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Container,
  Form,
  Button,
} from 'react-bootstrap'
import { toast } from 'react-toastify'
import 'styles/pages/authPage.css'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { API_URL } from 'utils/constants'

const AuthRecoveryPassForm = (props) => {

  const [formPass,setFormPass] = useState({
    password: '',
    password_repeat: ''
  })

  const [validated, setValidated] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    verifyToken()
  },[])

  const goToLogin = () => {
    props.history.replace('/')
  }

  const onChange = e => {
    setFormPass({...formPass, [e.target.name] : e.target.value })
  }

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return
    }
    const passObject = Object.assign({},formPass)
    if(passObject.password !== passObject.password_repeat){
      toast.error('Las contraseñas no coinciden')
      return false
    }

    passObject.token = props.match.params.token

    axios.post(API_URL+'auth_recovery_pass_form',passObject).then(result => {
      toast.success('Contraseña Cambiada')
      setTimeout(() => {
        goToLogin()
      },1500)
      goToLogin()
    }).catch(err => {
      const { response } = err
      if(response){
        toast.error(response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

 const verifyToken = () => {
   const token = props.match.params.token
   axios.get(API_URL+'auth_verify_token_pass/'+token).then(result => {
     if(!result.data){
       toast.error('Token ya utilizado')
       goToLogin()
     }else{
      inputRef.current.focus()
     }
   }).catch(err => {
     const { response } = err
     if(response){
       //toast.error(response.data.message)
     }else{
       console.log(err);
       //toast.error('Error, contacte con soporte')
     }
   })
 }

  return (
    <Container fluid={true} className="fondo">
      <Row className="justify-content-center">
        <Col md={6} lg={6} xs={6} sm={6}>
          <div className="flexContainer">
            <div className="containerBox">
              <h1 className="title-login">Recuperación de Contraseña</h1>
              <Form onSubmit={onSubmit} noValidate validated={validated}>
                <Row>
                  <InputFieldRef
                    { ...props.inputPass }
                    handleChange={onChange}
                    value={formPass.password}
                    ref={inputRef}
                  />
                  <InputField
                    { ...props.inputPassRepeat }
                    handleChange={onChange}
                    value={formPass.password_repeat}
                  />
                </Row>
                <Row className="justify-content-center">
                  <Col xs={5} sm={5} md={5} lg={5}>
                      <Button variant="info" type="submit" block={true}>Enviar</Button>
                  </Col>
                  <Col xs={5} sm={5} md={5} lg={5}>
                      <Button onClick={goToLogin} variant="secondary" type="button" block={true}>Volver al Login</Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <br/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

AuthRecoveryPassForm.defaultProps = {
  inputPass: {
    type: 'password',
    required: true,
    name: 'password',
    label : 'Contraseña Nueva',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
  inputPassRepeat: {
    type: 'password',
    required: true,
    name: 'password_repeat',
    label : 'Repita la Contraseña',
    messageErrors: [
      'Requerido*'
    ],
    cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"
  },
}

export default AuthRecoveryPassForm
