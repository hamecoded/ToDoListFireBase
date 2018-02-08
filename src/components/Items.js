import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Item from './Item';
import {itemDelete, itemAdd, resetItems, fetchItems} from '../redux/actions/itemActions';


class Items extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  handleClick = () => {
    const {itemAdd} = this.props;
    const item = {
      hex: "#" + ((1 << 24) * Math.random() | 0).toString(16),
      label: `new item`
    };

    itemAdd(item);
  };

  emptyState() {
    return (
      <Empty>you don't have any items yet</Empty>
    );
  }

  render() {
    const {items, itemDelete, resetItems} = this.props;

    return (
      <Container>
        <Card>
          <Title>
            list items
            <AddButton onClick={this.handleClick}>+</AddButton>
          </Title>
          {
            items.length ?
              <ListContainer>
                {items.map(({id, label, hex}) => (
                  <Item
                    key={`item-${id}`}
                    label={label}
                    hex={hex}
                    id={id}
                    onDelete={itemDelete}
                  />
                ))}
              </ListContainer> : this.emptyState()
          }
          <ResetButton onClick={resetItems}>Reset</ResetButton>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, {
  itemDelete,
  itemAdd,
  resetItems,
  fetchItems
})(Items);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Card = styled.div`
  width: 400px;
  min-height: 300px;
  max-height: 600px;
  background: #fff;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -5px rgba(0,0,0,0.2);
  box-sizing: border-box;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  text-transform: capitalize;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddButton = styled.div`
   width: 30px;
   height: 30px;
   background: #888;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   cursor: pointer;
   transition: all 300ms;
   
   &:hover {
    background: #000;
   }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  max-height: 500px;
  overflow-y: auto;
`;


const ResetButton = styled.div`
  box-sizing: border-box;
  padding: 15px 0px;
  background: #444;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    background: #ce0000;
  }
`;

const Empty = styled.div`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  color: #888;
`;