'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from './Form';

function FactCard({ fact }) {
  const [localFact, setLocalFact] = useState(fact);
  const [editMode, setEditMode] = useState(false);

  return (
    <Card>
      <Card.Body>
        {editMode ? (
          <>
            <p>EDIT MODE</p>
            <Form obj={localFact} func={setLocalFact} />
            <div>
              <button type="button" className="btn btn-success" onClick={() => setEditMode(false)}>
                EXIT EDIT MODE
              </button>
            </div>
          </>
        ) : (
          <>
            {localFact.text}
            <div>
              <button type="button" className="btn btn-secondary" onClick={() => setEditMode(true)}>
                EDIT FACT
              </button>
              <button type="button" className="btn btn-danger">
                DELETE FACT
              </button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default FactCard;
