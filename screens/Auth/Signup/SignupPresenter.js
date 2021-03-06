import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const LogoContainer = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 128px;
  height: 148px;
  margin-top: 20px;
`;

const InputContainer = styled.View`
  flex: 7;
  align-items: center;
  justify-content: space-evenly;
`;

const EmptyView = styled.View``;

const TextInput = styled.TextInput`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 8px 0px;
  width: 320px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 320px;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  padding: 14px 60px;
  background-color: #ffa726;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

function SignupPresenter({ onCancel, onComplete }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <LogoContainer>
            <Logo source={require("../../../assets/logo.png")} />
          </LogoContainer>
          <InputContainer>
            <EmptyView>
              <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <TextInput placeholder="Password" secureTextEntry textContentType="password" />
              <TextInput
                placeholder="Password Confirm"
                secureTextEntry
                textContentType="password"
              />
              <TextInput placeholder="Username" textContentType="username" />
            </EmptyView>
            <ButtonContainer>
              <Button onPress={onCancel}>
                <ButtonText>취소</ButtonText>
              </Button>
              <Button onPress={onComplete}>
                <ButtonText>완료</ButtonText>
              </Button>
            </ButtonContainer>
          </InputContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

SignupPresenter.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default SignupPresenter;
