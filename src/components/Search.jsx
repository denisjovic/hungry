import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchValue}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 12rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 1.2rem;
    margin: 2rem;
    border-radius: 2rem;
    outline: none;
    width: 80%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(100%, -50%);
    color: white;
  }
`;
