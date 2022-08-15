import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getSpecificCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}&number=9`
    );
    const data = await response.json();
    console.log(data, 'data');
    setCuisine(data.results);
  };

  useEffect(() => {
    getSpecificCuisine(params.cuisine);
  }, [params.cuisine]);

  return (
    <Grid
      animate={{
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        </Link>
      ))}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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
