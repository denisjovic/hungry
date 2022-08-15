import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const vegetarianUrl = 'https://api.spoonacular.com/recipes/random';

export const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);

  const getVegetarianData = async () => {
    const vegetarianCache = localStorage.getItem('vegetarian');
    if (vegetarianCache) {
      setVegetarian(JSON.parse(vegetarianCache));
    } else {
      const response = await fetch(
        `${vegetarianUrl}?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await response.json();
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };
  useEffect(() => {
    getVegetarianData();
  }, []);

  return (
    <Wrapper>
      <h3>Vegetarian</h3>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          arrows: true,
          gap: '5rem',
          drag: 'free',
        }}
      >
        {vegetarian.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 10;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: .8rem
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
