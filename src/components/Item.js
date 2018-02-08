import React from 'react';
import styled from 'styled-components';

export default class Item extends React.Component {
  render() {
    const { id, label, hex, onDelete } = this.props;

    return (
      <Container>
        <Details>
          <Color hex={hex} />
          <Label>{label}</Label>
        </Details>
        <Delete onClick={() => onDelete(id)}>delete</Delete>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  min-height: 70px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  text-transform: capitalize;
  color: #888;
  font-size: 14px;
  font-weight: 300;
`;

const Color = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ hex }) => hex || '#e0e0e0'};
  margin-right: 20px;
`;

const Delete = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #888;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    color: #000;
  }
`;