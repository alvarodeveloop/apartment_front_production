import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import Loader from './shared/Loader'

// Layouts
//import Layout1 from './shared/layouts/Layout1'
import MainContainer from './containers/MainContainer'
import AuthContainer from './containers/AuthContainer'
import AuthPasswordContainer from './containers/AuthPasswordContainer'

// Lazy load component
const lazy = (cb) => loadable(() => pMinDelay(cb(), 200), { fallback: <Loader /> })

// ---
// Default application layout

export const DefaultLayout = MainContainer

// ---
// Document title template

export const titleTemplate = '%s - React Starter'

// ---
// Routes
//
// Note: By default all routes use { "exact": true }. To change this
// behaviour, pass "exact" option explicitly to the route object

export const defaultRoute = '/'


export const routes = [
  {
    path: '/mail_recovery',
    component: lazy(() => import('./containers/AuthPasswordContainer')),
    layout: AuthPasswordContainer
  },
  {
    path: '/',
    component: lazy(() => import('./containers/AuthContainer')),
    layout: AuthContainer
  },
  {
    path: '/user/list',
    component: lazy(() => import('./pages/UserListPage'))
  },
  {
    path: '/user/create/:id?',
    component: lazy(() => import('./pages/UserCreatePage'))
  },
  {
    path: '/user/admin',
    component: lazy(() => import('./pages/UserParentAdminPage'))
  },
  {
    path: '/params/manager_problems/solutions',
    component: lazy(() => import('./pages/params/SolutionsPage'))
  },
  {
    path: '/params/service/type_task',
    component: lazy(() => import('./pages/params/ServiceTypeTaskPage'))
  },
  {
    path: '/params/service/limit_time',
    component: lazy(() => import('./pages/params/ServiceTimeLimitPage'))
  },
  {
    path: '/params/service/reason_close',
    component: lazy(() => import('./pages/params/ServiceReasonClosePage'))
  },
  {
    path: '/params/service/origin_service',
    component: lazy(() => import('./pages/params/ServiceOriginPage'))
  },
  {
    path: '/params/service/priority_service',
    component: lazy(() => import('./pages/params/ServicePriorityPage'))
  },
  {
    path: '/request/property/form',
    component: lazy(() => import('./pages/request_services/RequestPropertyForm'))
  },
  {
    path: '/masters/region',
    component: lazy(() => import('./pages/masters/RegionPage'))
  },
  {
    path: '/params/manager_problems/related_failures',
    component: lazy(() => import('./pages/params/RelatedFailuresPage'))
  },
  {
    path: '/masters/precint/form/:id?',
    component: lazy(() => import('./pages/masters/PrecintFormPage'))
  },{
    path: '/masters/precint',
    component: lazy(() => import('./pages/masters/PrecintPage'))
  },
  {
    path: '/request/planning',
    component: lazy(() => import('./pages/request_services/PlanningPage'))
  },
  {
    path: '/masters/personal/form/:id?',
    component: lazy(() => import('./pages/masters/PersonalEnterpriseFormPage'))
  },{
    path: '/masters/personal',
    component: lazy(() => import('./pages/masters/PersonalEnterprisePage'))
  },
  {
    path: '/params/service/type_service',
    component: lazy(() => import('./pages/params/ParamsServiceTypeServicePage'))
  },
  {
    path: '/masters/ownerships/form/:id?',
    component: lazy(() => import('./pages/masters/OwnershipFormPage'))
  },{
    path: '/masters/ownerships',
    component: lazy(() => import('./pages/masters/OwnershipPage'))
  },
  {
    path: '/params/models_property',
    component: lazy(() => import('./pages/params/ModelsPropertyPage'))
  },
  {
    path: '/masters/models',
    component: lazy(() => import('./pages/masters/ModelsPage'))
  },{
    path: '/masters/measurement_unit',
    component: lazy(() => import('./pages/masters/MeasurementUnitPage'))
  },
  {
    path: '/params/manager_problems/mantainer_failures',
    component: lazy(() => import('./pages/params/MantainerFailuresPage'))
  },
  {
    path: '/request/property/managment/form/:id?',
    component: lazy(() => import('./pages/request_services/ManagementSolicitudePropertyFormPage'))
  },
  {
    path: '/request/property/managment',
    component: lazy(() => import('./pages/request_services/ManagementSolicitudePropertySSPage'))
  },
  {
    path: '/request/property/managment_failures"',
    component: lazy(() => import('./pages/request_services/ManagementFailuresPropertyPage'))
  },
  {
    path: '/delivery/management',
    component: lazy(() => import('./pages/deliverys/ManagementDeliveryTablePage'))
  },
  {
    path: '/delivery/form/:id?',
    component: lazy(() => import('./pages/deliverys/ManagementDeliveryFormPage'))
  },
  {
    path: '/indicators/operations/ss_by_month',
    component: lazy(() => import('./pages/indicators/IndicatorSSByMonthPage'))
  },
  {
    path: '/indicators/operations/by_multiple_proyects',
    component: lazy(() => import('./pages/indicators/IndicatorByMultipleProyectsPage'))
  },
  {
    path: '/indicators/operations/consolidate_listing',
    component: lazy(() => import('./pages/indicators/IndicatorConsolidateListingPage'))
  },
  {
    path: '/indicators/operations/by_proyect',
    component: lazy(() => import('./pages/indicators/IndicatorByProyectPage'))
  },
  {
    path: '/masters/housing_complexes',
    component: lazy(() => import('./pages/masters/HousingComplexesPage'))
  },
  {
    path: '/masters/housing_complexes/form/:id?',
    component: lazy(() => import('./pages/masters/HousingComplexesForm'))
  },
  {
    path: '/params/frequent_questions',
    component: lazy(() => import('./pages/params/FrequentQuestionPage'))
  },
  {
    path: '/request/follow_task',
    component: lazy(() => import('./pages/request_services/FollowTasksPage'))
  },
  {
    path: '/masters/families',
    component: lazy(() => import('./pages/masters/FamilyPage'))
  },
  {
    path: '/masters/enterprise/form/:id?',
    component: lazy(() => import('./pages/masters/EnterpriseFormPage'))
  },
  {
    path: '/masters/enterprise',
    component: lazy(() => import('./pages/masters/EnterprisePage'))
  },
  {
    path: '/masters/enclosure',
    component: lazy(() => import('./pages/masters/EnclosurePage'))
  },
  {
    path: '/dashboard',
    component: lazy(() => import('./pages/DashboardPage'))
  },
  {
    path: '/masters/country',
    component: lazy(() => import('./pages/masters/CountryPage'))
  },
  {
    path: '/masters/contractor/form/:id?',
    component: lazy(() => import('./pages/masters/ContractorFormPage'))
  },
  {
    path: '/masters/contractor',
    component: lazy(() => import('./pages/masters/ContractorPage'))
  },
  {
    path: '/masters/config',
    component: lazy(() => import('./pages/masters/ConfigPage'))
  },
  {
    path: '/masters/clients/form/:id?',
    component: lazy(() => import('./pages/masters/ClientFormPage'))
  },
  {
    path: '/masters/clients',
    component: lazy(() => import('./pages/masters/ClientPage'))
  },
  {
    path: '/masters/cities',
    component: lazy(() => import('./pages/masters/CityPage'))
  },
  {
    path: '/change_password',
    component: lazy(() => import('./pages/ChangePasswordPage'))
  },
  {
    path: '/masters/category',
    component: lazy(() => import('./pages/masters/CategoryPage'))
  },
  {
    path: '/masters/charges',
    component: lazy(() => import('./pages/masters/ChargesPage'))
  },
  {
    path: '/masters/brands',
    component: lazy(() => import('./pages/masters/BrandPage'))
  },
  {
    path: '/masters/blocks',
    component: lazy(() => import('./pages/masters/BlockPage'))
  },
  {
    path: '/request/area/form',
    component: lazy(() => import('./pages/request_services/AreaRequestFormPage'))
  },

  {
    path: '/request/area/managment',
    component: lazy(() => import('./pages/request_services/AreaManagemenSolicitudePage'))
  },
  {
    path: '/request/area/managment_failures',
    component: lazy(() => import('./pages/request_services/AreaManagementFailurePage'))
  },
  {
    path: '/request/area/managment/form/:id',
    component: lazy(() => import('./pages/request_services/AreaFormSolicitudePage'))
  },
  {
    path: '/ownership/frequent_questions',
    component: lazy(() => import('./pages/ownerships/FrequentQuestionPage'))
  },
  {
    path: '/ownership/asks',
    component: lazy(() => import('./pages/ownerships/QueryPage'))
  },
  {
    path: '/ownership/downloads',
    component: lazy(() => import('./pages/ownerships/DownloadOwnershipPage'))
  },
  {
    path: '/ownership/status_services',
    component: lazy(() => import('./pages/ownerships/FailureManagePage'))
  },
  {
    path: '/ownership/request_service',
    component: lazy(() => import('./pages/ownerships/SolicitudeSSPage'))
  },
  {
    path: '/request/property/managment_failures',
    component: lazy(() => import('./pages/request_services/ManagementFailuresPropertyPage'))
  },
  {
    path: '/housing/frequent_questions',
    component: lazy(() => import('./pages/housing/FrequentQuestionPage'))
  },
  {
    path: '/housing/asks',
    component: lazy(() => import('./pages/housing/QueryPage'))
  },
  {
    path: '/housing/downloads',
    component: lazy(() => import('./pages/housing/DownloadOwnershipPage'))
  },
  {
    path: '/housing/request_service',
    component: lazy(() => import('./pages/housing/SolicitudeSSPage'))
  },
  {
    path: '/housing/status_services',
    component: lazy(() => import('./pages/housing/FailureManagePage'))
  },
]
