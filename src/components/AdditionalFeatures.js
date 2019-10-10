import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreator';

const AdditionalFeatures = props => {
  const { features } = props;
  //console.log(props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.stores.length ? (
        <ol type="1">
          {features.stores.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(AdditionalFeatures);
