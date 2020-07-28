import React, { useEffect , useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import {
  FaRegFileExcel,FaPlusCircle
} from 'react-icons/fa'
import Table from 'components/Table'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios'
import { toast } from 'react-toastify';
import { API_URL } from 'utils/constants'
import { formatNumber, s2ab } from 'utils/functions'
import { saveAs } from 'file-saver'
import * as xlsx from 'xlsx'
import * as moment from 'moment-timezone'
let client_columns = []

const ClientPage = (props) => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetchData()
    return () => {
      client_columns = []
    }

  },[])

  useMemo(() => {
    client_columns = [

        {
          Header : 'Rut',
          accessor: 'rut',
          Cell: props1 => {
            return (
              <Button variant="link" onClick={() => {modifyRegister(props1.cell.row.original)}}>{props1.cell.row.original.rut}</Button>
            )
          }
        },
        {
          Header : 'Nombre',
          accessor: 'name',
        },
        {
          Header : 'Apellidos',
          accessor: 'last_names'
        },
        {
          Header : 'Dirección',
          accessor: 'address'
        },
        {
          Header : 'Email',
          accessor: 'email'
        },
        {
          Header: 'Acciones',
          Cell : props1 => {
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

  const confirmDeleteRegister = id => {
    axios.delete(API_URL+'client/'+id).then(result => {
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
    axios.get(API_URL+'client').then(result => {
      setData(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const goToForm = () => {
    props.history.replace('/masters/clients/form')
  }

  const modifyRegister = datos => {
    props.history.replace('/masters/clients/form/'+datos.id)
  }

  const exportToExcel = () => {

      let wb = xlsx.utils.book_new()
      let bodyTable = [['Rut','Dv','Nombre','Apellidos','Dirección','Población','Cod.País','Cod.Ciudad','Fono1','Fono2','Email']]

      wb.Props = {
        Title: "Reporte de Clientes",
        Subject: "Exportación de Data",
        Author: 'Veanx tecnology',
        CreatedDate: moment().format('YYYY-MM-DD')
      };
      wb.SheetNames.push("Clientes");

      data.forEach((v,i) => {
        bodyTable.push([
          v.rut,
          v.rut.split('-')[1],
          v.name,
          v.last_names,
          v.address,
          v.poblation,
          v.id_country,
          v.id_city,
          v.phone1,
          v.phone2,
          v.email
        ])
      })

      var ws = xlsx.utils.aoa_to_sheet(bodyTable);
      wb.Sheets["Clientes"] = ws;
      var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
      let datos = s2ab(wbout)
      saveAs(new Blob([datos],{type:"application/octet-stream"}), 'Reporte de Clientes'+moment().format('DD-MM-YYYY')+'.xlsx')

  }


  return (
    <Container fluid={true}>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="">
          <h4 className="title_principal">Clientes</h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button variant="secondary" size="sm" block={true} onClick={goToForm}>Crear Cliente <FaPlusCircle/></Button>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Button variant="success" size="sm" block={true} onClick={exportToExcel}>Exportar a Excel <FaRegFileExcel/></Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Table data={data} columns={client_columns} />
        </Col>
      </Row>
    </Container>
  )
}

export default ClientPage
