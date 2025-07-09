import { useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';

export default function CharacterCard({ character, type }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      bg="dark"
      text="white"
      className="
        p-4 rounded transition-shadow duration-200 ease-in-out
        hover:-translate-y-1 hover:shadow-x3 hover:scale-105"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Card.Img
        variant="top"
        src={character.imgSrc}
        alt={character.name}
        className="object-cover h-48 w-full"
      />
      <Card.Body className="text-center">
        <Card.Title as="h5" className="mb-0">
          {character.name}
        </Card.Title>

        <Collapse in={isExpanded}>
          <div className="mt-3 text-sm text-gray-300">
            <div dangerouslySetInnerHTML={{ __html: character.bio }} />
            <p className="mt-2 text-xs italic">Perks: {character.perks.join(', ')}</p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
