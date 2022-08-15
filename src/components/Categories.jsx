import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNachos } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const Categories = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/cuisine/African'}>
        <GiNachos />
        <h4>African</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-right: 2rem;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.2rem;
  }
  &.active {
    background: linear-gradient(35deg, #f27121, #e94057);
    svg,
    h4 {
      color: white;
    }
  }
`;
