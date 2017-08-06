import React, { Component } from 'react';
import { Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';
import { Container, List, ListItem, Header, Left, Right, Title, Content, Footer, Button, Icon, Body, Card, CardItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from "react-native-router-flux";




const { width, height } = Dimensions.get('window');

export default class Menu extends Component {
   
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
                        <Title style={{color: 'white', paddingTop: 13 }} >Profil</Title>
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
                                                <Image source={require('../src/img/asd.jpg')} style={styles.cardImage} resizeMode="contain">
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >Fildzah Ruswina</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Grid>
                     <List>                
            <ListItem >
              <Text>Nama : Fildzah Ruswina</Text>
            </ListItem>
            <ListItem>
              <Text>Tempat, Tgl Lahir : Jakarta, 7 Juni 1996</Text>
            </ListItem>
               <ListItem>
              <Text>Pekerjaan : Mahasiswa</Text>
            </ListItem>
               <ListItem>
              <Text>Nama Universitas : Universitas Gunadarma</Text>
            </ListItem>
               <ListItem>
              <Text>Fakultas : Ilmu Komputer</Text>
            </ListItem>
               <ListItem>
              <Text>Jurusan : Sistem Informasi</Text>
            </ListItem>
               <ListItem>
              <Text>Email : fildzahruswina@gmail.com</Text>
            </ListItem>
          </List>
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