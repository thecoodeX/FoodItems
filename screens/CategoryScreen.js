import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const CategoryScreen = props => {
    return (
        <View style={style.container}>
            <Text>
                Hello CategoryScreen
            </Text>
            <Button
                onPress={() => { props.navigation.navigate('Deatails') }}
                title='Details'
            />
        </View>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default CategoryScreen;

