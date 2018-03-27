import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h2>Info</h2>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    { props.isAdmin && <p>This is private information. Please do not share</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>
    { props.isAuthenticated ?
        (
          <WrappedComponent {...props} />
        ) : (
          <p>Please login</p>
        )}

  </div>
);

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated info="These are the details" />, document.getElementById('app'));
