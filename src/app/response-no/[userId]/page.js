import React from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';

export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://first-react-app-39662-default-rtdb.firebaseio.com/responseNo.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = PropTypes.string;
