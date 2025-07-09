import { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import FetchCharacters from '../components/FetchCharacters';
console.log("/App")

function Killers() {
  const KillersProp = "killer";
  return <><FetchCharacters characterType={KillersProp} /></>;
}

export default Killers;
