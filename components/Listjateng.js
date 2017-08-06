import React, { Component } from 'react';
import { Header, Title, Button, Container, Content, List, ListItem, Thumbnail, Text, Body, Icon, Left, Right, Switch } from 'native-base';
import { Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity, TouchableHighlight, Alert, View } from 'react-native';
import {Actions} from "react-native-router-flux";
import SettingsList from 'react-native-settings-list';
const { width, height } = Dimensions.get('window');



 const vids = [  ];

export default class Listjateng extends Component {
 constructor() {
  super();

  this.state = {
   Vids: {}
  };
 }

 componentDidMount() {
  this.getVids();
 }

 getVids() {
  this.setState({
   Vids: [ {
    'Title' : 'Gundul-Gundul Pacul',
    'url' : 'https://www.youtube.com/embed/kRHVRUz2lHk?rel=0&autoplay=0&showinfo=0&controls=1'
   } ],
   loading: false
  });
 }

 
 handleItemPress(url) {
  Actions.vidsjateng({url: url});
 }

  
  render() {
      var bgColor = '#DCE3F4';
    return (
      <Container>
          <StatusBar hidden={true} backgroundColor="#891845" />
                <Header style={{ backgroundColor: '#891845' }} >
                    <Left>
                        <Button transparent onPress={this._goBack}>
                        <Icon ios="ios-arrow-back" android="ios-arrow-back" style={{color: '#FFF'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'white', paddingTop: 13 }} >Jawa Tengah</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
        <Content>
           <List 
            
            dataArray={this.state.Vids}
            renderRow={(item) =>
            
            <ListItem onPress={() => this.handleItemPress(item.url)}>
              <Thumbnail style={styles.imageStyle} source={require('../src/img/Music.png')} />
              <Body>
                <Text>{item.Title}</Text>
                <Text note>Click to play..</Text>
              </Body>
            </ListItem>
           
            }
          />
        </Content>
      </Container>
    );
  }
   _goBack(){
        Actions.menu({type:'reset'});
    }
}

const styles = StyleSheet.create({

    imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  },

    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        resizeMode: "stretch"
    },
     backgroundd: {
        width,
        height,
    },
    container: {
        flex: 1,
    },
    menuWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    menuItem: {
        fontSize: 20,
        justifyContent:'center',
        backgroundColor: 'transparent',
        color: 'white'
    },
    cardsh: {
        marginHorizontal: 10,
        marginTop: 10,
        justifyContent: 'space-around',
        
    },
    cardImage: {
        alignSelf: 'center',
        height: height * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textOverlay: {
        height: height * 0.35,
        width: width * 0.935,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },


    scrollview: {
        flex: 1,
        paddingTop: 50
    },
    title: {
        marginTop: 15,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginBottom: 30
    },
    sliderContainer: {
    }
});