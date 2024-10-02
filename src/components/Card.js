'use client';

import Card from 'react-bootstrap/Card';

function FactCard(fact) {
  return (
    <Card>
      <Card.Body>{fact}</Card.Body>
    </Card>
  );
}

export default FactCard;
