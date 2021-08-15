import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = (props) => {
    return (
        <View>
            <Text>This is Home screen</Text>
            <Button title="Go to detail" onPress={()=> props.navigation.navigate('Detail')} />
        </View>
    );
}

export default HomeScreen;