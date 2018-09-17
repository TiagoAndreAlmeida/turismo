import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container, Text, Header, Content, Button,
  Input, Label, Form, Item, Body, Title, Left, Right} from 'native-base';

export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      email:'',
      password: ''
    };
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Left />
        <Body>
          <Title>Cadastro</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={styles.content}>
          <Item floatingLabel>
            <Label>Usuário</Label>
            <Input onChangeText={(value) => this.setState({username: value})}/>
          </Item>
          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input onChangeText={(value) => this.setState({email: value})}/>
          </Item>
          <Item floatingLabel>
            <Label>Senha</Label>
            <Input onChangeText={(value) => this.setState({password: value})}/>
          </Item>
        </Form>
        <Button 
        full 
        light 
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Cadastrar</Text>
        </Button>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 10
  }
});
