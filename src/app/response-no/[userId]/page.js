import PropTypes from 'prop-types';
import React from 'react';

export default function ResponseNoPage({ params }) {
  return <div>{params.userId}</div>;
}

ResponseNoPage.propTypes = PropTypes.string;
