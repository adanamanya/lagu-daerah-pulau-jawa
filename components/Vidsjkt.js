import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Button, Icon, Title, Container, Content } from 'native-base';

export default class Vidsjkt extends Component {
 componentDidMount() {
  console.log(this.props.url);
 }
 render() {
  return (
      <Container>
      <View style={styles.container}>
    <Header style={{ backgroundColor: '#FF3366' }} >
    <Left>
    <Button transparent onPress={this._goBack}>
     <Icon ios="ios-arrow-back" android="ios-arrow-back" style={{color: '#FFF'}} />
     </Button>
     </Left>
     <Title style={{color: '#FFF', paddingTop: 13 }} >Vids</Title>
     </Header>

     <Content contentContainerStyle={{marginTop: - 140, flex: 1}}>
       <WebView
    source={{uri: this.props.url}}
    style={{flex:1}}
   />
      </Content>
     </View>
     
     </Container>
  );
 }
 _goBack = () => {
       Actions.listjakarta({type: 'reset'});
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});