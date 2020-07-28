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
  FaPlusCircle,FaRegFileExcel
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
let housing_columns = []

const HousingComplexesPage = (props) => {

  const [data,setData] = useState([])

  useEffect(() => {

    fetchData()

    return () => {
      housing_columns = []
    }

  },[])

  useMemo(() => {
    housing_columns = [{
          Header : 'Codigo',
          accessor: 'id',
          Cell: props1 => {
            return (
              <Button variant="link" onClick={() => {modifyRegister(props1.cell.row.original)}}>{props1.cell.row.original.id}</Button>
            )
          }
        },
        {
          Header : 'Sigla',
          accessor: 'acronym',
        },
        {
          Header : 'Nombre',
          accessor: 'name',
        },
        {
          Header : 'Tipo Proyecto',
          accessor: props1 => {
            if(props1.type_proyect == 1){
              return 'Extensión'
            }else if(props1.type_proyect == 2){
              return 'Altura'
            }else{
              return 'Serviu'
            }
          },
          Cell: props1 => {
            const { original } = props1.cell.row

            if(original.type_proyect == 1){
              return 'Extensión'
            }else if(original.type_proyect == 2){
              return 'Altura'
            }else{
              return 'Serviu'
            }
          }
        },
        {
          Header : 'Dirección',
          accessor: props1 => [props1.street+' '+props1.number],
        },
        {
          Header : 'Etapa',
          accessor: 'stage',
        },
        {
          Header : 'Con Block/Mzna',
          accessor: props1 => props.block_mza ? 'Si' : 'No',
        },
        {
          Header : 'Cant Viviendas',
          accessor: 'number_living',
        },
        {
          Header : 'Empresas',
          accessor: props1 => [props1.enterprise.name],
        },
        {
          Header : 'fecha Recepción Municipal',
          accessor: props1 => [moment(props1.date_municipal_reception).format('DD-MM-YYYY')],
        },
        {
          Header : 'Administrador',
          accessor: 'admin_postventa',
        },
        {
          Header : 'Director Proyecto',
          accessor: 'dir_proyect_postventa',
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
    axios.delete(API_URL+'housing_complexe/'+id).then(result => {
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

  const exportDataExcel = () => {

    let wb = xlsx.utils.book_new()
    let bodyTable = [['Código','Sigla','Nombre','Tipo de Proyecto','Dirección','Etapa','Con Block/Mza.','Cant. Viviendas','Empresas','Fecha Recep. Muni.','Administrador','Director Proyecto']]

    wb.Props = {
      Title: "ListadoCHabitacionales"+moment().format('DD-MM-YYYY'),
      Subject: "Exportación de Data",
      Author: 'Veanx tecnology',
      CreatedDate: moment().format('YYYY-MM-DD')
    };
    wb.SheetNames.push("Listado Conjuntos");
    let type_proyect = ""
    data.forEach((v,i) => {

      if(v.type_proyect == 1){
        type_proyect = 'Extensión'
      }else if(v.type_proyect == 2){
        type_proyect = 'Altura'
      }else{
        type_proyect = 'Serviu'
      }

      bodyTable.push([
        v.id,
        v.acronym,
        v.name,
        type_proyect,
        v.street+' '+v.number,
        v.stage,
        v.block_mza ? 'Si' : 'No',
        v.number_living,
        v.enterprise.name,
        moment(v.date_municipal_reception).format('DD-MM-YYYY'),
        v.admin_postventa,
        v.dir_proyect_postventa,
      ])
    })

    var ws = xlsx.utils.aoa_to_sheet(bodyTable);
    wb.Sheets["Listado Conjuntos"] = ws;
    var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
    let datos = s2ab(wbout)
    saveAs(new Blob([datos],{type:"application/octet-stream"}), "ListadoCHabitacionales"+moment().format('DD-MM-YYYY')+'.xlsx')

  }

  const fetchData = () => {
    axios.get(API_URL+'housing_complexe').then(result => {
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
    props.history.replace('/masters/housing_complexes/form')
  }

  const modifyRegister = datos => {
    props.history.replace('/masters/housing_complexes/form/'+datos.id)
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12} xs={12} className="">
          <h4 className="title_principal">Conjunto Habitacionales</h4>
          <hr/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Row className="justify-content-center">
            <Col sm={4} md={4} lg={4}>
              <Button variant="secondary" size="sm" block={true} onClick={goToForm}>Crear Complejo Habitacional &nbsp;&nbsp;<FaPlusCircle/></Button>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Button variant="success" size="sm" block={true} onClick={exportDataExcel}>Exportar Excel &nbsp;&nbsp;<FaRegFileExcel/></Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Table data={data} columns={housing_columns} />
        </Col>
      </Row>
    </Container>
  )
}

export default HousingComplexesPage
