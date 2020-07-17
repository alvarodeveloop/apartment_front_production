
import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

const InvoiceContainer = ({ component: Component,...rest }) => (
  <React.Suspense fallback={<div>Loading... </div>}>
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Component {...props} />
          <ToastContainer />
        </React.Fragment>
      )}
    />
  </React.Suspense>
);

export default InvoiceContainer;
