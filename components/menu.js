import React, { Component } from 'react';
import { Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';
import { Container, Header, Left, Right, Title, Content, Footer, Button, Icon, Body, Card, CardItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from "react-native-router-flux";
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../components/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import { ENTRIES1} from '../components/entries';



const { width, height } = Dimensions.get('window');

export default class Menu extends Component {
    componentDidMount(){
        StatusBar.setBackgroundColor('#aa11af');
    }

     getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    get example1 () {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={false}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid={true}
              removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    render() {
        return (
            <View style={styles.container}>
            <Image source={require('../src/img/bg2.jpg')} style={styles.backgroundd} resizeMode='cover'>
                <StatusBar hidden={true} backgroundColor="#891845" />
                <Header style={{ backgroundColor: '#891845' }} >
                    <Left>
                        <Button transparent >
                            
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'white', paddingTop: 13 }} >Menu</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                
                <Content>
                 { this.example1 }
                </Content>
                <Content>
                    <Grid>
                        <Row style={styles.cardsh} >
                            
                             <Col>
                                <TouchableOpacity  onPress={this._gotoJakarta}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/jakarta.jpg')} style={styles.cardImage} resizeMode="contain">
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >DKI Jakarta</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity  onPress={this._goToView}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/jawabarat.jpg')} style={styles.cardImage} resizeMode="contain">
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >Jawa Barat</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                              <Col>
                                <TouchableOpacity  onPress={this._goToView}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/jogja.jpg')} style={styles.cardImage} resizeMode="contain">
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >D.I Yogyakarta</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={styles.cardsh}  >
                               <Col>
                                <TouchableOpacity onPress={this.Jateng}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/jawatengah.jpg')} style={styles.cardImage}  resizeMode="contain" >
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >Jawa Tengah</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={this.Jatim}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Body>
                                                <Image source={require('../src/img/jawatimur.jpg')} style={styles.cardImage}  resizeMode="contain" >
                                                    <View style={styles.textOverlay} >
                                                        <Text style={textCat} >Jawa Timur</Text>
                                                    </View>
                                                </Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </Col>
                              <Col>
                                <TouchableOpacity  onPress={this.home}>
                                                <Image source={require('../src/img/back2.png')} style={styles.cardImage2} resizeMode="contain">
                                                </Image>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                 </Image>
            </View>
        );
    }
    _News(){
        Actions.news({type:'reset'});
    }
    _gotoJakarta(){
        Actions.listjakarta({type: 'reset'});  
    }
      _goToAbout() {
        Actions.about({type: 'reset'});
    }
    home() {
        Actions.home({type: 'reset'});
    }
     Jatim() {
        Actions.listjatim({type: 'reset'});
    }
        Jateng() {
        Actions.listjateng({type: 'reset'});
    }
}

const cardsh = {
    color: 'white',
    backgroundColor: 'transparent',
};

const textCat = {
    fontSize: 20,
    fontWeight: '200',
    color: 'white',
    backgroundColor: 'transparent'
};

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: 'hsl(15, 55%, 50%)',
    background2: 'hsl(230, 30%, 45%)'
};

const styles = StyleSheet.create({

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
        backgroundColor: 'transparent'
        
    },

    cardImage2: {
        alignSelf: 'center',
        height: height * 0.18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
        
    },
    textOverlay: {
        height: height * 0.35,
        width: width * 0.935,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    colorsContainer: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row'
    },
    color1: {
        flex: 1,
        backgroundColor: colors.background1
    },
    color2: {
        flex: 1,
        backgroundColor: colors.background2
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