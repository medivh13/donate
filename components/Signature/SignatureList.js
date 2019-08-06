import React, { Component } from 'react';
import { ScrollView, Text,  View, Image, StyleSheet } from 'react-native';
import axios from '../../services/axiosInstance';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
// import SignatureDetail from './SignatureDetail';

class SignatureList extends Component {
    state = { signatures: [] };
    
    componentWillMount(){
        axios.get('signatures')
        .then(response => this.setState({  signatures: response.data.data }));
    }

    render(){
        // console.log(this.state.signatures)
        return (
                this.state.signatures.map(
                    val => 
                    <Card key={val.id}>
                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image 
                                style={styles.thumbnailStyle}
                                source={{uri:val.avatar}} />
                        </View>
                        <View style={styles.headerContetnStyle}>
                            <Text style={styles.headerTextStyle}>{val.name}</Text>
                            <Text>{val.value}</Text>
                        </View>
                    </CardSection>
                    </Card>
                )
        );
    } 
};

const styles = StyleSheet.create({
    headerContetnStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 2,
        width: null
    }
});
export default SignatureList;