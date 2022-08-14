import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNachos } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const Categories = () => {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </NavLink>
      <NavLink to={'/cuisine/Mexican'}>
        <GiNachos />
        <h4>Mexican</h4>
      </NavLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0rem;
`;
