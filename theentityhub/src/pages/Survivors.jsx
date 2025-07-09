import { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import FetchCharacters from '../components/FetchCharacters';


function Survivors() {
  const SurvivorsProp = "survivor";
  return <><FetchCharacters characterType={SurvivorsProp} /></>;
}
export default Survivors;