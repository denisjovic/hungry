import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();
  const fetchDetails = async (id) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setRecipe(data);
  };

  useEffect(() => fetchDetails(params.recipeId), [params.recipeId]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt='' />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' && 'active'}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' && 'active'}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
  margin: 10rem 0 5rem 0;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid #313131;
    margin-right 2rem;
    font-weight: bold;
  `;

const Info = styled.div`
  margin-left: 10rem;
`;
