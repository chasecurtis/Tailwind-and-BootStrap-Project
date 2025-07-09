import { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import CharacterCard from './CharacterCard';
console.log("/App")

export default function FetchCharacters({ characterType = 'survivor' }) {
    // STATES
    const [characters, setCharacters] = useState([]); // starts as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    console.log('→ destructured characterType:', characterType);
    console.log('type of : ', typeof characterType)

    // PATHS FOR ASSETS
    const BASE_IMG_PATH = `/portraits_${characterType}s/`

    // INITIALLY PULL CHARACTER DATA INTO ARRAY ONCE
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://corsproxy.io/?https://dbd.tricky.lol/api/characters?role=${characterType}`);
                // convert objects into array
                const characterArray = Object.values(response.data).map(character => {
                    const fileName = character.image.split('/').pop() 
                    return {
                        ...character,
                        imgSrc: `${BASE_IMG_PATH}${fileName}`
                    };
                });
                setCharacters(characterArray);
                console.log("Character state after set:", characters);
                setIsLoading(false);
                
                
            
            } catch (err) {
                setError(err);
                console.log(err);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // IF STILL LOADING THEN DISPLAY THIS
    if (isLoading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">Error loading characters</p>;


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border border-b-cyan-700">
            {characters.map(character => (
                <CharacterCard
                    key={character.id}
                    character={character}
                    type={characterType}
                />
            ))}
        </div>
    );


}
