import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Card from '../components/Card';



const Menu = props => {


    const RenderItem = (itemData) => {
        const imgUri = itemData.item.imgUrl;

        return <Card style={style.card}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('CategoryScreen') }}
                style={style.touch1}

            >
                <ImageBackground style={style.imageBackground}
                    source={{ uri: imgUri }}
                >


                    <View style={style.v1}>
                        <Text style={style.t1}>
                            {itemData.item.title}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity >

        </Card>

    }
    return (
        <View style={style.container}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={RenderItem}

            />
        </View>

    );

}

const style = StyleSheet.create({
    container: {

    },
    card: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        margin: 10,
        overflow: 'hidden'


    },

    v1: {
        flex: 1,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'


    },
    t1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageBackground: {
        flex: 1,
        height: '100%',
        width: '100%',
      

    }

});

export default Menu;

