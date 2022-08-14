import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const popularUrl = 'https://api.spoonacular.com/recipes/random';

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopularData = async () => {
    const popularCache = localStorage.getItem('popular');
    if (popularCache) {
      setPopular(JSON.parse(popularCache));
    } else {
      const response = await fetch(
        `${popularUrl}?apiKey=${import.meta.env.VITE_API_KEY}&number=9`
      );
      const data = await response.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  useEffect(() => {
    getPopularData();
  }, []);

  return (
    <Wrapper>
      <h3>Popular</h3>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          arrows: true,
          gap: '5rem',
          drag: 'free',
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide>
            <Card key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
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
    height: 20%;
    text-align: center;
    font-size: 0.8rem
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
