import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {login} from '../redux/actions/authActions';

class Login extends React.Component {
  state = {};

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  handleClick = () => {
    const {email, password} = this.state;
    const {login} = this.props;

    login(email, password);
  };

  render() {
    return (
      <Container>
        <Card>
          <Title>LOGIN</Title>
          <Input type="text" onChange={(e) => this.handleChange(e.target.value, 'email')}/>
          <Input type="password" onChange={(e) => this.handleChange(e.target.value, 'password')}/>
          <Button onClick={this.handleClick}>login</Button>
        </Card>
      </Container>
    );
  }
}

export default connect(undefined, {
  login
})(Login);

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
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

const Button = styled.div`
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

const Title = styled.div`
  font-size: 30px;
  text-transform: capitalize;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #888;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  user-select: all;
  
  &:focus {
    border-color: #444;
  }
`;