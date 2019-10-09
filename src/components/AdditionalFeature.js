import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreator';

const AdditionalFeature = props => {
  const { addFeature } = props;

  return (
    <li>
      <button 
        className="button" 
        onClick={() => addFeature(props.feature.name, props.feature.price)}
        >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(AdditionalFeature);