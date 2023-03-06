import React from 'react';
import styled from 'styled-components';

const StyleCompo = () => {
  const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  const Second = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  return (
    <>
      <Title>Something</Title>
      <Title><Second>Data</Second>Something</Title>
      <h2 style={{"color":"blue"}}>Data</h2>
      <h2 style={{color:"blue",fontSize:"50px"}}>Data</h2>
      <h2 style={{"color":"blue","font-size":"50px"}}>Data</h2>
    </>
  );
};

export default StyleCompo;