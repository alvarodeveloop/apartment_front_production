import React, { useMemo, useState , useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import Table from 'components/Table'
import { toast } from 'react-toastify';
import { formatNumber, s2ab } from 'utils/functions'
import { saveAs } from 'file-saver'
import * as xlsx from 'xlsx'
import * as moment from 'moment-timezone'
let columns = []

const OwnershipPage = (props) => {

  const [ownerships, setOwnerships] = useState([])
  const [formSearch, setFormSearch] = useState({
    nro_propiedad : '',
    housing_complexe: '',
    type_ownership: '',
    block_mzna: '',
    ownership: '',
  })
  const [housingComplexes, setHousingComplexes] = useState([])
  const [blockMzna, setBlockMzna] = useState([])
  const [typeOwnership, setTypeOwnership] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {

    
    fetchData()
    inputRef.current.focus()
    return () => {
      columns = []
    }

  },[])

  useMemo(() => {
    columns = [
      {
        Header: 'Nro Propiedad',
        accessor: 'number',
        Cell: props1 => {
          return(
            <Button type="button" size="sm" variant="link" onClick={() => modifyRegister(props1.cell.row.original) }>{props1.cell.row.original.number}</Button>
          )
        }
      },
      {
        Header: 'C.Hab',
        accessor: props1 => [props1.housing_complexe.name]
      },
      {
        Header: 'Tipo Propiedad',
        accessor: props1 => [props1.typeOwnership.name]
      },
      {
        Header: 'Block/Mzna',
        accessor: 'block'
      },
      {
        Header: 'Cant.Dormi',
        accessor: 'number_rooms'
      },
      {
        Header: 'Cant.Baños',
        accessor: 'number_bathrooms'
      },
      {
        Header: 'M2',
        accessor: 'square_mtr'
      },
      {
        Header: 'Modelo',
        accessor: props1 => [props1.models.name]
      },
      {
        Header: 'Esta',
        accessor: props1 => props1.parkings.length > 0 ? props1.parkings.filter(v => v.type == 2).map(v => v.name) : '',
      },
      {
        Header: 'Bodega',
        accessor: props1 => props1.parkings.length > 0 ? props1.parkings.filter(v => v.type == 1).map(v => v.name) : ''
      },
      {
        Header: 'Inscripción a Conservador',
        accessor: props1 => props1.date_inscription_conservative ? [moment(props1.date_inscription_conservative).format('DD-MM-YYYY')] : ''
      },
      {
        Header: 'Entrega a Propietario',
        accessor: props1 => props1.date_delivery_ownership ? [moment(props1.date_delivery_ownership).format('DD-MM-YYYY')] : ''
      },
      {
        Header: 'Propietario Rut',
        accessor: 'id_client_ownership'
      },
      {
        Header: 'Propietario Nombre',
        accessor: props1 => props1.ownership_client ? [props1.ownership_client.name+' '+props1.ownership_client.last_names] : ''
      },
      {
        Header: 'Arrendador',
        accessor: props1 => props1.id_client_lessee ? [props1.lessee.name+' '+props1.lessee.last_names] : ''
      },
    ]
  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'master_block'),
      axios.get(API_URL+'type_ownership'),
      axios.get(API_URL+'masters_ownership'),
    ]

    Promise.all(promises).then(result => {

      setHousingComplexes(result[0].data)
      setBlockMzna(result[1].data)
      setTypeOwnership(result[2].data)
      setOwnerships(result[3].data)

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
    setFormSearch({...formSearch, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {

    e.preventDefault();
    let objectPost = Object.assign({},formSearch)

    axios.post(API_URL+'masters_ownership_by_filter',objectPost).then(result => {
      setOwnerships(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })

  }

  const clearForm = () => {
    setFormSearch({
      nro_propiedad : '',
      housing_complexe: '',
      type_ownership: '',
      block_mzna: '',
      ownership: '',
    })
    inputRef.current.focus()
  }

  const goToForm = () => {
    props.history.replace('/masters/ownerships/form')
  }

  const exportExcel = () => {

      let wb = xlsx.utils.book_new()
      let bodyTable = [['Nro Propiedad','C.Hab','Tipo Propiedad','Block/Mzna','Cant.Dormi','Cant.Baños','M2','Modelo','Estacionamiento','Bodega','Inscripción Conservador', 'Entrega a Propietario','Propietario Rut', 'Propietario Nombre','Arrendador']]

      wb.Props = {
        Title: "Reporte de Propiedades",
        Subject: "Exportación de Data",
        Author: 'Veanx tecnology',
        CreatedDate: moment().format('YYYY-MM-DD')
      };
      wb.SheetNames.push("Propiedades");

      ownerships.forEach((v,i) => {
        bodyTable.push([
          v.number,
          v.housing_complexe.name,
          v.typeOwnership.name,
          v.id_block_mzna ?  v.block.name : '',
          v.number_rooms,
          v.number_bathrooms,
          v.square_mtr,
          v.models.name,
          printCellarParking(v.parkings,'parking'),
          printCellarParking(v.parkings,'cellar'),
          v.date_inscription_conservative ? moment(v.date_inscription_conservative).format('DD-MM-YYYY') : '',
          v.date_delivery_ownership ? moment(v.date_delivery_ownership).format('DD-MM-YYYY') : '',
          v.id_client_ownership,
          v.ownership_client ? v.ownership_client.name+' '+v.ownership_client.last_names : '',
          v.id_client_lessee ? v.lessee.name+' '+v.lessee.last_names : ''
        ])
      })

      var ws = xlsx.utils.aoa_to_sheet(bodyTable);
      wb.Sheets["Propiedades"] = ws;
      var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
      let datos = s2ab(wbout)
      saveAs(new Blob([datos],{type:"application/octet-stream"}), 'Reporte de Propiedades'+moment().format('DD-MM-YYYY')+'.xlsx')
  }


  const  printCellarParking = (dataPrint,type) => {
    let string = ""
    if(dataPrint.length > 0){
      dataPrint.filter(v => type === "parking" ? v.type == 2 : v.type == 1).forEach((v, i) => {
        string+= v.name+" \n"
      });
    }

    return string
  }

  const modifyRegister = dataUpdate => {
    console.log(dataUpdate,'aqui');
    props.history.replace('/masters/ownerships/form/'+dataUpdate.id)
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <InputFieldRef
                {...props.inputNumber}
                value={formSearch.nro_propiedad}
                handleChange={onChange}
                ref={inputRef}
              />
              <InputField
                {...props.inputHousingComplexe}
                value={formSearch.housing_complexe}
                handleChange={onChange}
              >
              <option value=''>--Seleccione--</option>
                {housingComplexes.map((v,i) => (
                  <option value={v.id}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                {...props.inputTypeOwnership}
                value={formSearch.type_ownership}
                handleChange={onChange}
              >
              <option value=''>--Seleccione--</option>
                {typeOwnership.map((v,i) => (
                  <option value={v.id}>{v.name}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <InputField
                {...props.inputBlock}
                value={formSearch.block_mzna}
                handleChange={onChange}
              >
                <option value=''>--Seleccione--</option>
                  {blockMzna.map((v,i) => (
                    <option value={v.id}>{v.name}</option>
                  ))}
              </InputField>
              <InputField
                {...props.inputOwnership}
                value={formSearch.ownership}
                handleChange={onChange}
              />
            </Row>
            <Row className="justify-content-center">
              <Col sm={3} md={3} lg={3}>
                <Button type="submit" size="sm" variant="secondary" block={true}>Buscar</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button type="button" size="sm" variant="secondary" block={true} onClick={clearForm}>Limpiar Formulario</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button type="button" size="sm" variant="secondary" block={true} onClick={exportExcel}>Exportar a Excel</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button type="button" size="sm" variant="secondary" block={true} onClick={goToForm}>Nueva Propiedad</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12} xs={12}>
          <br/><br/>
          <h4 style={{color: 'blue'}}>Listado de Propiedades</h4>
          <Table columns={columns} data={ownerships}  />
        </Col>
      </Row>
    </Container>
  )
}

OwnershipPage.defaultProps = {
  inputNumber: {
    type: 'number',
    required: false,
    name: 'nro_propiedad',
    label : 'Nro. Propiedad',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputHousingComplexe: {
    type: 'select',
    required: false,
    name: 'housing_complexe',
    label : 'Conjunto Habitacional',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputTypeOwnership: {
    type: 'select',
    required: false,
    name: 'type_ownership',
    label : 'Tipo de Propiedad',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputBlock: {
    type: 'select',
    required: false,
    name: 'block_mzna',
    label : 'Block/Mzna:',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputOwnership: {
    type: 'number',
    required: false,
    name: 'ownership',
    label : 'Propietario',
    messageErrors: [

    ],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default OwnershipPage
