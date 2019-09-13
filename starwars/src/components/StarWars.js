import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StarCard from "./StarCard";

const MainCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin 20px AudioTrack;
    `;

function StarWars() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data);
        setdata(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <MainCard>
        {data.map(data => {
          return (
            <StarCard
              key={data.created}
              name={data.name}
              birth={data.birth_year}
              gender={data.gender}
              eye={data.eye_color}
              hair={data.hair_color}
              height={data.height}
              mass={data.mass}
            />
          );
        })}
      </MainCard>
    </div>
  );
}

export default StarWars;
