import React from 'react';
import { Image, StyleSheet, View  } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Content, Container, Item, Input} from 'native-base';
import axios from '../services/axiosInstance';
export default class DonasiScreen extends React.Component {
    state = { penerima: [] };
    
    componentWillMount(){
        const { navigation } = this.props;
        const Id = navigation.getParam('id', 'id');
        axios.get('donasi'+'/'+Id)
        .then(
            response => this.setState({  penerima: response.data }),
        );
            
        
    }
    render (){
        return (
            <View style={styles.container}>
                <Card style={{marginLeft:15, marginRight:15}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: this.state.penerima.avatar}} />
                            <Body>
                                <Text style={{textAlign : "justify"}}>Anda akan berdonasi untuk :</Text>
                                <Text style={{textAlign : "justify"}}>{this.state.penerima.title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                    <Item>
                        <Text>Rp</Text>
                        <Input placeholder='nominal' style={styles.duitStyle}/>
                    </Item>
                    </CardItem>
                    <CardItem>
                        <Button style={styles.buttonStyle}>
                            <Text>Donasi</Text>
                        </Button>
                    </CardItem>
                    {/*<CardItem>
                        <Left>
                            <Button style={styles.buttonStyle}>
                                <Text>Detail</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button style={styles.buttonStyle}>
                                <Text>Donasi</Text>
                            </Button>
                        </Right>
                    </CardItem> */}
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    duitStyle : {
        // backgroundColor: '#e6e6e6',
        textAlign: "right"
    },
    buttonStyle: {
        backgroundColor: '#006600',
    },
    
});