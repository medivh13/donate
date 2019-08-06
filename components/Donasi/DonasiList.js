import React, { Component }from 'react';
// import { ScrollView, Text,  View, Image, StyleSheet } from 'react-native';
import { Image, ProgressBarAndroid, StyleSheet  } from 'react-native';
import axios from '../../services/axiosInstance';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Content, Container} from 'native-base';

import { createStackNavigator } from 'react-navigation';

class DonasiList extends Component {
    state = { donasi: [] };
    
    componentWillMount(){
        // console.log(axios.get('donasi'));
        axios.get('donasi')
        .then(response => this.setState({  donasi: response.data }));
    }
    // btnDonasi = () => {                      //here use arrow  function
    //     // console.log("test");
    //     this.props.navigation.navigate('DonasiScreen');    
    // }

    getProgressBar(value){
        if(value < 30){
            return (
                <Content>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={value / 100} color="#ff0000"/>
                </Content> 
            )   
        }else if(value < 50){
            return (
                <Content>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={value / 100} color="#ffff00"/>
                </Content> 
            )  
        }else if(value < 100){
            return (
                <Content>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={value / 100} color="#0066ff"/>
                </Content> 
            )  
        }else{
            return (
                <Content>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={value / 100}/>>
                </Content> 
            )  
        }
    }

    render(){
        const navigation = this.props
        // console.log(this.props);
        return (
                this.state.donasi.map(
                    val => 
                    <Card key={val.id} style={{marginLeft:15, marginRight:15}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: val.alamat}} />
                                <Body>
                                    <Text style={{textAlign : "justify"}}>{val.title}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: val.alamat}} style={{height: 150, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontWeight: "bold"}}>{val.name}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Rp. {val.value}</Text>
                            </Left>
                            <Right>
                                <Text>Rp. {val.needed}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            {this.getProgressBar(val.progress)}    
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Text>{val.progress} % Tercapai</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>{val.last_day}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button style={styles.buttonStyle}>
                                    <Text>Detail</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button style={styles.buttonStyle}
                                onPress={() => navigation.navigation.navigate("Donasi", {id : val.id})}>
                                    <Text>Donasi</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                )
        );
    } 
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#006600',
    },
    cardStyle: {
        marginBottom: 2,
        marginTop: 2
    }
});

export default DonasiList;