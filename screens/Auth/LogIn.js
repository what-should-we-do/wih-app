import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const LogoContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  box-shadow: 3px 3px 10px #aaa;
`;

const InputContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: space-around;
`;

const EmptyView = styled.View``;

const TextInput = styled.TextInput`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 4px 0px 8px;
  width: 320px;
`;

const AdditionalLink = styled.TouchableOpacity`
  margin-top: 4px;
  margin-bottom: 8px;
`;

const AdditionalText = styled.Text`
  font-size: 16px;
  color: #0091ff;
  text-align: center;
`;

const LogInButton = styled.TouchableOpacity`
  margin: 10px;
  padding: 16px;
  background-color: #ffa726;
  width: 320px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export default function LogIn() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={require("../../assets/logo.png")} resizeMode="center" />
      </LogoContainer>
      <InputContainer>
        <EmptyView>
          <TextInput
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput placeholder="Password" secureTextEntry textContentType="password" />
          <AdditionalLink>
            <AdditionalText>Not having account?</AdditionalText>
          </AdditionalLink>
          <AdditionalLink>
            <AdditionalText>Forgot password?</AdditionalText>
          </AdditionalLink>
        </EmptyView>
        <LogInButton>
          <ButtonText>Log In</ButtonText>
        </LogInButton>
      </InputContainer>
    </Container>
  );
}
