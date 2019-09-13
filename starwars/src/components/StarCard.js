import React from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 400px;
  background-color: #D6E3E3;
  margin: 30px;
  flex-direction: column;
  border-radius: 30px;
  padding-bottom: 25px;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 25px 25px 0px 0px;
`;

function StarCard(props) {
  return (
    <div className="characters">
      <Body>
        <Header>
          <h2>Name: {props.name}</h2>
        </Header>
        <p>Gender: {props.gender}</p>

        <p>Eye-Color: {props.eye}</p>
        <p>Hair-Color: {props.hair}</p>
        <p>Height: {props.height}cm</p>
        <p>Mass: {props.mass}kg</p>
        <p>Birth Year: {props.birth}</p>
      </Body>
    </div>
  );
}

export default StarCard;
