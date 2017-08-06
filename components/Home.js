import React, { Component } from 'react';
import { Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';
import { Container, Header, Left, Right, Title, Content, Footer, Button, Icon, Body, Card, CardItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from "react-native-router-flux";




const { width, height } = Dimensions.get('window');

export default class Menu extends Component {
    componentDidMount(){
        StatusBar.setBackgroundColor('#FF3366');
    }
    render() {
        return (
            <Container >
           <StatusBar hidden={true} backgroundColor="#891845" />
                <Header style={{ backgroundColor: '#891845' }} >
                    <Body>
                        <Title style={{color: 'white', paddingTop: 13 }} >Home</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row style={styles.cardsh} >
                            <Col>
                                <TouchableOpacity>
                                   
                                                <Image source={require('../src/img/home.jpg')} style={styles.cardImage} resizeMode="contain">
                                                  
                                                </Image>
                                           
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Grid>
                 <View style={styles.container1} >
                     <Content style={{ paddingTop: 90 }}>
                      <TouchableOpacity activeOpacity={.5} onPress={this.menu} >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Pilih Kota</Text>
                                </View>
                            </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.5} onPress={this.profil} >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Profil</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.5} onPress={this.tentang} >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Tentang</Text>
                                </View>
                            </TouchableOpacity>
                        </Content>
                    </View>
                </Content>
            </Container>
        );
    }
    menu(){
        Actions.menu({type:'reset'});
    }
     profil(){
        Actions.profil({type:'reset'});
    }
    tentang(){
        Actions.tentang({type:'reset'});
    }
}

const cardsh = {
    color: 'white',
    backgroundColor: 'transparent',
};

const textCat = {
    fontSize: 30,
    marginBottom: -225,
    fontWeight: '200',
    color: 'white',
    backgroundColor: 'transparent'
};

const text1 = {
    fontSize: 30,
    fontWeight: '200',
    color: 'black',
    backgroundColor: 'transparent'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
     container1: {
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
      button: {
        backgroundColor: '#891845',
        paddingVertical: 15,
        marginHorizontal: 82,
        alignItems: 'center',
        width: width * 0.65,
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color:'#FFF',
        fontSize: 18,
    },
    cardImage: {
        alignSelf: 'center',
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOverlay: {
        height: height * 0.35,
        width: width * 0.935,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});