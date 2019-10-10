import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreator';

const Total = props => {
  const { features } = props;
  
  return (
    <div className="content">
      <h4>Total Amount: ${features.car.price + features.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(Total);
