import React from 'react';

const AddedFeature = props => {
  const { removeFeature } = props;

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature.id, props.feature.price)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
