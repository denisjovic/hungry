import React from 'react';
import { Popular } from '../components/Popular';
import { Vegetarian } from '../components/Vegetarian';

export default function Home() {
  return (
    <React.Fragment>
      <Popular />
      <Vegetarian />
    </React.Fragment>
  );
}
