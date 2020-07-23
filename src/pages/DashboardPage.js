import { AnnouncementCard, TodosCard } from 'components/Card';
import Page from 'components/Page';
import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Accordion
} from 'react-bootstrap'
import DashboardOwnershipComponent from '../components/DashboardOwnershipComponent'
import DashboardEstandartComponent from '../components/DashboardEstandartComponent'
import DashboardHousingComponent from '../components/DashboardHousingComponent'
import 'styles/pages/dashboard.css'

const DashboardPage = props => {
    useEffect(() => {
      console.log(props,'aqui');
    },[])

    return (
      <Page
        className="DashboardPage"
        title="Escritorio"
        breadcrumbs={[{ name: 'Escritorio', active: true }]}
      >
        {props.user.id_rol < 5 ? (
            <DashboardEstandartComponent {...props} />
          ) : props.user.id_rol == 5 ? (
            <DashboardOwnershipComponent {...props} />
          ) : props.user.id_rol == 6 ? (
            <DashboardHousingComponent {...props} />
          ) : ''

        }
      </Page>
    );

}

function mapStateToProps(state){
  return {
    user : state.auth.user,
    housing: state.housing.housing,
  }
}

export default connect(mapStateToProps,{})(DashboardPage);
