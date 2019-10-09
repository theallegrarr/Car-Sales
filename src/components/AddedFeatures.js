import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreator';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const { features } = props;

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.car.features.length ? (
        <ol type="1">
          {features.car.features.map(item => (
            <AddedFeature key={item.id} name={item.name} price={item.price} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AddedFeatures);