import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Searched = () => {
  const [searched, setSearched] = useState([]);

  const params = useParams();

  const getSearchedCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}&number=9`
    );
    const data = await response.json();
    console.log(data, 'data');
    setSearched(data.results);
  };

  useEffect(() => {
    getSearchedCuisine(params.searchTerm);
  }, [params.searchTerm]);
  return (
    <Grid>
      {searched.map((searchTerm) => (
        <Card key={searchTerm.id}>
          <img src={searchTerm.image} alt={searchTerm.title} />
          <h4>{searchTerm.title}</h4>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
