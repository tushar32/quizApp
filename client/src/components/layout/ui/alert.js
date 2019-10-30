import React from 'react';
import PropTypes from 'prop-types';
/*
   PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 
   In this example, we’re using PropTypes.string.     
   When an invalid value is provided for a prop, a warning will be shown in the JavaScript     c
*/
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);