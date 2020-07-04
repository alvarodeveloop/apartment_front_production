
import React from 'react';
import { Route } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const InvoiceContainer = ({ component: Component,...rest }) => (
  <React.Suspense fallback={<div>Loading... </div>}>
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Component {...props} />
          <NotificationContainer />
        </React.Fragment>
      )}
    />
  </React.Suspense>
);

export default InvoiceContainer;
