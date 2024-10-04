import React from 'react';
import Form from '../../components/Form';

const sampleData = {
  firebaseKey: '-O8K1e5VERPM1Xy7oEcW',
  name: 'dinnerdoggy',
  text: 'Dogs are funny',
  userId: 'VzSkKcnh3afZYTJjYammDmo58oE2',
};

export default function FormPage() {
  return (
    <div>
      <h2>CREATE</h2>
      <Form />
      <h2>UPDATE</h2>
      <Form obj={sampleData} />
    </div>
  );
}
