import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";
const Button = styled.button`
  background-color: white;
  color: blue;
  font-size: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0px 0px;
  cursor: pointer;
`;
function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  
  return !isAuthenticated && (
    
    <Button onClick={loginWithRedirect}>Log in</Button>
  );
}

export default LoginButton;