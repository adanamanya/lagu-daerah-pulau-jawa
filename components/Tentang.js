import React, { Component } from 'react';
import { Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';
import { Container, Header, Left, Right, Title, Content, Footer, Button, Icon, Body, Card, CardItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from "react-native-router-flux";




const { width, height } = Dimensions.get('window');

export default class Tentang extends Component {
   
    render() {
        return (
            <Container >
           <StatusBar hidden={true} backgroundColor="#891845" />
                <Header style={{ backgroundColor: '#891845' }} >
                    <Left>
                        <Button transparent onPress={this._goBack}>
                        <Icon ios="ios-arrow-back" android="ios-arrow-back" style={{color: '#FFF'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'white', paddingTop: 13 }} >Tentang</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row style={styles.cardsh} >
                            <Col>
                                <TouchableOpacity>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/android-studio.png')} style={styles.cardImage} resizeMode="contain">
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                         <Card>
                            <CardItem>
                            <Body>
                            <Text>
                           Aplikasi ini dibuat bertujuan untuk memudahkan masyarakat dalam mencari dan mendengarkan lagu-lagu daerah di Indonesia,
                           khususnya lagu daerah di Pulau Jawa.
                            </Text>
                            </Body>
                            </CardItem>
                            <CardItem>
                            <Body>
                            <Text>
                            Aplikasi ini dibuat menggunakan Android Studio, namun tidak menutup kemungkinan untuk dikembangkan agar dapat dijalankan di platform selain Android yaitu iOS.
                            </Text>    
                            </Body>
                            </CardItem>
                            <CardItem footer>
                            <Text>Batasan masalah pada pembuatan aplikasi ini adalah lagu-lagu daerah pada aplikasi ini hanya untuk daerah Pulau Jawa. Lagu-lagu yang akan ditampilkan dalam aplikasi sebanyak 40 lagu beserta video dan liriknya.
                            </Text>
                            </CardItem>
                         </Card>
                    </Grid>
                </Content>
            </Container>
        );
    }
    _goBack(){
        Actions.home({type:'reset'});
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
        height: height * 0.25,
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